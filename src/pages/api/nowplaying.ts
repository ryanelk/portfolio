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
const processTrackData = (track: any): Track => {
	const t: Track = {
    title: track.name,
    artist: track.artist['#text'],
    album: track.album['#text'],
    image: track.image[3]['#text'],
    url: track.url,
    date: track.date ? track.date['#text'] : 'Now Playing',
    isPlaying: track['@attr']?.nowplaying === 'true'
  };
  return t;
};

export const GET: APIRoute = async () => {
  const API_KEY = import.meta.env.LASTFM_API_KEY;
  const USERNAME = import.meta.env.LASTFM_USERNAME;
  

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`
  );
  const data = await res.json();
  const track = data.recenttracks?.track?.[0];

  if (!track) {
    return new Response(JSON.stringify({ currTrack: null }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const currTrack = processTrackData(track);
  return new Response(JSON.stringify({ currTrack }), {
    headers: { 'Content-Type': 'application/json' },
  });
};