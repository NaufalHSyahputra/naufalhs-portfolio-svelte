import type { Meta, StoryObj } from '@storybook/svelte';
import Badge from '$lib/components/atoms/Badge.svelte';

const meta = {
	title: 'Atoms/Badge',
	component: Badge,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'secondary', 'destructive', 'outline']
		}
	}
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'default',
		children: undefined // We'll handle this in a custom story if needed, or just text
	}
};

export const Secondary: Story = {
	args: {
		variant: 'secondary'
	}
};

export const Outline: Story = {
	args: {
		variant: 'outline'
	}
};
