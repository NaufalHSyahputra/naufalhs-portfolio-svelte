import type { PageServerLoad } from './$types';
import resume from '$lib/data/resume.json';

export const load: PageServerLoad = async () => {
	return {
		resume
	};
};
