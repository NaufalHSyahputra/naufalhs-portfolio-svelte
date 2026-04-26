import type { Meta, StoryObj } from '@storybook/svelte';
import Hero from '$lib/components/organisms/Hero.svelte';

const meta = {
	title: 'Organisms/Hero',
	component: Hero,
	tags: ['autodocs']
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'Naufal Hakim Syahputra',
		headline: 'Senior Software Engineer',
		location: 'Jakarta, Indonesia',
		summary:
			'Passionate software engineer with 5+ years of experience in backend development, focusing on scalable systems and distributed architectures.',
		email: 'naufalhsyahputra@gmail.com',
		pictureUrl: 'https://github.com/naufalhsyahputra.png',
		socials: [
			{ name: 'Github', value: 'https://github.com/naufalhsyahputra', icon: 'github' },
			{ name: 'LinkedIn', value: 'https://linkedin.com/in/naufalhsyahputra', icon: 'linkedin' },
			{ name: 'WhatsApp', value: 'https://wa.me/628137023344', icon: 'whatsapp' }
		],
		stats: {
			yearsExp: 7,
			companiesCount: 6,
			projectsCount: 9
		}
	}
};
