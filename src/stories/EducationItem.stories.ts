import type { Meta, StoryObj } from '@storybook/svelte';
import EducationItem from '$lib/components/molecules/EducationItem.svelte';

const meta = {
	title: 'Molecules/EducationItem',
	component: EducationItem,
	tags: ['autodocs']
} satisfies Meta<typeof EducationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		institution: 'Binus University',
		studyType: 'Bachelor of Computer Science',
		area: 'Mobile Application & Technology',
		score: '3.70 / 4.00',
		date: '2016 - 2020',
		href: 'https://binus.ac.id/'
	}
};
