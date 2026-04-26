import type { Meta, StoryObj } from '@storybook/svelte';
import SkillsSection from '$lib/components/organisms/SkillsSection.svelte';

const meta = {
	title: 'Organisms/SkillsSection',
	component: SkillsSection,
	tags: ['autodocs']
} satisfies Meta<typeof SkillsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		skills: [
			{
				name: 'Backend',
				keywords: [
					{ title: 'Golang', image: 'Go.svg' },
					{ title: 'Node.js', image: 'Node.svg' },
					{ title: 'PHP', image: 'PHP.svg' }
				]
			},
			{
				name: 'Databases',
				keywords: [
					{ title: 'PostgreSQL', image: 'postgresql.svg' },
					{ title: 'MySQL', image: 'mysql.svg' },
					{ title: 'MongoDB', image: 'mongodb.svg' }
				]
			}
		]
	}
};
