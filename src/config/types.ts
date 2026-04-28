import type { iconPaths } from '../components/IconPaths';

export interface UserTheme {
	fallbackColor: string;
	light: Record<string, string>;
	dark: Record<string, string>;
}

export interface SocialLink {
	label: string;
	href: string;
	icon: keyof typeof iconPaths;
}

export interface Skill {
	icon: keyof typeof iconPaths;
	title: string;
	description: string;
}

export interface Role {
	icon: keyof typeof iconPaths;
	label: string;
}

export interface Project {
	name: string;
	description: string;
	img: string;
	date: Date;
	tags: string[];
}

export interface UserConfig {
	id: 'ryan' | 'reina';
	theme: UserTheme;
	name: string;
	hero: {
		title: string;
		tagline: string;
		portraitAlt: string;
		roles: Role[];
	};
	skills: Skill[];
	about: {
		background: string;
		education: string;
		skills: string;
	};
	resume: {
		filename: string;
		downloadName: string;
	};
	contact: {
		email: string;
	};
	socials: SocialLink[];
	projects: Project[];
  portrait: string;
}
