import type { UserConfig } from './types';

const reina: UserConfig = {
	id: 'reina',
	name: 'Reina El Khoury',
	hero: {
		title: 'Hello, my name is Reina El Khoury',
		tagline: 'I am graduating soon from UCI as a CompSci Major!',
		portraitAlt: 'Reina El Khoury',
		roles: [
			{ icon: 'code', label: 'Developer' },
			{ icon: 'microphone-stage', label: 'Speaker' },
			{ icon: 'pencil-line', label: 'Writer' },
		],
	},
	skills: [
		{
			icon: 'terminal-window',
			title: 'Full Stack',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
		},
		{
			icon: 'trophy',
			title: 'Industry Leader',
			description: 'Neque viverra justo nec ultrices dui. Est ultricies integer quis auctor elit.',
		},
		{
			icon: 'strategy',
			title: 'Strategy-Minded',
			description: 'Urna porttitor rhoncus dolor purus non enim praesent ornare.',
		},
	],
	about: {
		background: '',
		education: 'Corporis voluptates tenetur laudantium.',
		skills: 'officia unde omnis',
	},
	resume: {
		filename: 'reinaelkhoury_resume_2026.pdf',
		downloadName: 'reinaelkhoury_resume_2026.pdf',
	},
	contact: {
		email: 'mailto:me@example.com',
	},
	socials: [
		{ label: 'GitHub', href: 'https://github.com/me', icon: 'github-logo' },
		{ label: 'YouTube', href: 'https://www.youtube.com/@me/', icon: 'youtube-logo' },
		{ label: 'TikTok', href: 'https://www.tiktok.com/en', icon: 'tiktok-logo' },
		{ label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram-logo' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin-logo' },
	],
	projects: [],
};

export default reina;
