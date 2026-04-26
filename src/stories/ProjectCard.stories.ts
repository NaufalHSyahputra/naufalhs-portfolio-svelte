import type { Meta, StoryObj } from '@storybook/svelte';
import ProjectCard from '$lib/components/molecules/ProjectCard.svelte';

const meta = {
	title: 'Molecules/ProjectCard',
	component: ProjectCard,
	tags: ['autodocs']
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Portfolio Project',
		description: 'A minimalist portfolio built with SvelteKit and Tailwind CSS.',
		company: 'Personal',
		technologies: ['SvelteKit', 'Tailwind CSS', 'TypeScript']
	}
};
