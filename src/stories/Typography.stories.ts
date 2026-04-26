import type { Meta, StoryObj } from '@storybook/svelte';
import Typography from '$lib/components/atoms/Typography.svelte';

const meta = {
	title: 'Atoms/Typography',
	component: Typography,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['h1', 'h2', 'h3', 'h4', 'p', 'lead', 'small', 'muted']
		}
	}
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
	args: {
		variant: 'h1'
	}
};

export const Heading2: Story = {
	args: {
		variant: 'h2'
	}
};

export const Paragraph: Story = {
	args: {
		variant: 'p'
	}
};

export const Lead: Story = {
	args: {
		variant: 'lead'
	}
};

export const Muted: Story = {
	args: {
		variant: 'muted'
	}
};
