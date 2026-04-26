import type { Meta, StoryObj } from '@storybook/svelte';
import ExperienceItem from '$lib/components/molecules/ExperienceItem.svelte';

const meta = {
	title: 'Molecules/ExperienceItem',
	component: ExperienceItem,
	tags: ['autodocs']
} satisfies Meta<typeof ExperienceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		company: 'eDOt',
		position: 'Senior Software Engineer',
		location: 'Jakarta, Indonesia',
		date: 'Jan 2021 - Present',
		summaries: [
			'Designed and implemented microservices using Golang.',
			'Optimized database performance and reduced latency by 30%.'
		],
		technologies: ['Golang', 'PostgreSQL', 'Redis', 'Docker']
	}
};

export const MultipleSummaries: Story = {
	args: {
		company: 'Previous Corp',
		position: 'Lead Developer',
		location: 'Remote',
		date: '2018 - 2020',
		multipleSummaries: [
			{
				company: 'Subdivision A',
				summaries: ['Managed a team of 5 developers.', 'Implemented CI/CD pipelines.']
			},
			{
				company: 'Subdivision B',
				summaries: ['Redesigned the core API.', 'Migrated legacy data to new schema.']
			}
		],
		technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL']
	}
};
