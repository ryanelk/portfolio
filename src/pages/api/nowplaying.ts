import type { APIRoute } from 'astro';

interface Track {
	title: string;
	artist: string;
	album: string;
	image: string;
	url: string;
	date: string;
	isPlaying: boolean;
}

interface LastfmConfig {
	api_key: string;
	username: string;
}

interface GistConfig {
	[user: string]: LastfmConfig;
}

const processTrackData = (track: any): Track => ({
	title: track.name,
	artist: track.artist['#text'],
	album: track.album['#text'],
	image: track.image[3]['#text'],
	url: track.url,
	date: track.date ? track.date['#text'] : 'Now Playing',
	isPlaying: track['@attr']?.nowplaying === 'true',
});

async function fetchGistConfig(): Promise<GistConfig> {
	const token = import.meta.env.GITHUB_TOKEN;
	const gistId = import.meta.env.GIST_ID;

	if (!token || !gistId) {
		throw new Error('GITHUB_TOKEN or GIST_ID is not set');
	}

	const res = await fetch(`https://api.github.com/gists/${gistId}`, {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: 'application/vnd.github+json',
		},
	});

	if (!res.ok) {
		throw new Error(`Failed to fetch gist: ${res.status} ${res.statusText}`);
	}

	const gist = await res.json();

	// The gist is expected to have a single file containing the JSON config
	const file = Object.values(gist.files as Record<string, { content: string }>)[0];
	return JSON.parse(file.content) as GistConfig;
}

export const GET: APIRoute = async () => {
	const user = import.meta.env.PORTFOLIO_USER ?? 'ryan';

	let config: LastfmConfig;
	try {
		const gistConfig = await fetchGistConfig();
		config = gistConfig[user];
		if (!config) {
			throw new Error(`No Last.fm config found for user "${user}" in gist`);
		}
	} catch (err) {
		console.error('[nowplaying]', err);
		return new Response(JSON.stringify({ currTrack: null }), {
			headers: { 'Content-Type': 'application/json' },
		});
	}

	const res = await fetch(
		`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${config.username}&api_key=${config.api_key}&format=json&limit=1`
	);
	const data = await res.json();
	const track = data.recenttracks?.track?.[0];

	if (!track) {
		return new Response(JSON.stringify({ currTrack: null }), {
			headers: { 'Content-Type': 'application/json' },
		});
	}

	return new Response(JSON.stringify({ currTrack: processTrackData(track) }), {
		headers: { 'Content-Type': 'application/json' },
	});
};
