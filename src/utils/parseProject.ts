import type { Project } from '../config/types';

export interface ParsedProject {
	id: string;
	data: {
		title: string;
		img: string;
		img_alt: string;
		publishDate: Date;
		description: string;
		tags: string[];
	};
}

export function parseProject(project: Project): ParsedProject {
	const { name, description, img, date, tags } = project;

	const id = name
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f¡!]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');

	return {
		id,
		data: {
			title: name,
			img,
			img_alt: name,
			publishDate: date,
			description,
			tags,
		},
	};
}
