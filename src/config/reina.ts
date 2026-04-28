import type { UserConfig } from './types';

const reina: UserConfig = {
	id: 'reina',
	theme: {
		fallbackColor: '26, 106, 191',
		light: {
			'gray-0': '#080c14',
			'gray-50': '#111a2b',
			'gray-100': '#1e2e47',
			'gray-200': '#2e4268',
			'gray-300': '#3f5a8a',
			'gray-400': '#5474a8',
			'gray-500': '#7090bf',
			'gray-600': '#94aed4',
			'gray-700': '#bacae2',
			'gray-800': '#dce6f2',
			'gray-900': '#edf3fa',
			'gray-999-basis': '210, 50%, 98%',
			'gray-999': '#f5f9fd',
			'accent-light': '#61a8f6',
			'accent-regular': '#1a6abf',
			'accent-dark': '#0a2e6e',
			'accent-overlay': 'hsla(210, 89%, 67%, 0.33)',
			'accent-subtle-overlay': 'hsla(210, 89%, 67%, 0.33)',
			'gradient-stop-1': '#61a8f6',
		},
		dark: {
			'gray-0': '#f5f9fd',
			'gray-50': '#edf3fa',
			'gray-100': '#dce6f2',
			'gray-200': '#bacae2',
			'gray-300': '#94aed4',
			'gray-400': '#7090bf',
			'gray-500': '#5474a8',
			'gray-600': '#3f5a8a',
			'gray-700': '#2e4268',
			'gray-800': '#1e2e47',
			'gray-900': '#111a2b',
			'gray-999-basis': '215, 35%, 7%',
			'gray-999': '#080c14',
			'accent-light': '#0a2e6e',
			'accent-regular': '#1a6abf',
			'accent-dark': '#61a8f6',
			'accent-overlay': 'hsla(210, 89%, 67%, 0.33)',
			'accent-subtle-overlay': 'hsla(211, 81%, 36%, 0.33)',
			'gradient-stop-1': '#1040a0',
		},
	},
	name: 'Reina El Khoury',
	hero: {
		title: 'Hello, my name is Reina El Khoury',
		tagline: 'I am graduating soon from UCI as a CompSci Major while doing DevOps and Sysadmin as part-time work!',
		portraitAlt: 'Reina El Khoury',
		roles: [
			{ icon: 'code', label: 'Developer' },
			{ icon: 'sun', label: 'Tennis' },
			{ icon: 'pencil-line', label: 'Film Buff' },
		],
	},
	skills: [
		{
			icon: 'terminal-window',
			title: 'Linux, VIM, & Scripting',
			description: "I am a sysadmin for my school's computer science department! I manage, install, and maintain servers for faculty, staff, professors, and students.",
		},
		{
			icon: 'strategy',
			title: 'DevOps',
			description: 'I have worked with CI/CD both from my last internship for managing testing suites for microntrollers and have conducted migrations from four different CI softwares, including Jenkins, Github Actions, Gitlab CI, and Bitbucket Pipelines. Of course, my preference goes to Gitlab and ask me why!',
		},
    {
			icon: 'rocket-launch',
			title: 'IoT, Pi, & Embedded Systems',
			description: "I've dabbled in a little bit of fun personal projects for this. I will be doing more of this in my free time.",
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
		email: 'elkhouryreina@gmail.com',
	},
	socials: [
		{ label: 'GitHub', href: 'https://github.com/me', icon: 'github-logo' },
		{ label: 'YouTube', href: 'https://www.youtube.com/@me/', icon: 'youtube-logo' },
		{ label: 'TikTok', href: 'https://www.tiktok.com/en', icon: 'tiktok-logo' },
		{ label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram-logo' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin-logo' },
	],
	projects: [],
  portrait: 'assets/reina_portrait.jpg'
};

export default reina;
