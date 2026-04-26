<script lang="ts">
	import ThemeToggle from '../atoms/ThemeToggle.svelte';
	import { Menu, X } from 'lucide-svelte';

	let { name }: { name: string } = $props();
	let isMenuOpen = $state(false);

	const navLinks = [
		{ name: 'Experience', href: '#experience' },
		{ name: 'Skills', href: '#skills' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Education', href: '#education' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<header
	class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
		<div class="flex items-center gap-8">
			<a class="flex items-center space-x-2" href="/" onclick={closeMenu}>
				<span class="text-lg font-bold">{name}</span>
			</a>

			<nav class="hidden items-center space-x-6 text-sm font-medium md:flex">
				{#each navLinks as link}
					<a class="text-foreground/60 transition-colors hover:text-foreground/80" href={link.href}>
						{link.name}
					</a>
				{/each}
			</nav>
		</div>

		<div class="flex items-center gap-2">
			<ThemeToggle />

			<!-- Mobile Menu Button -->
			<button
				class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
				onclick={toggleMenu}
				aria-label="Toggle Menu"
			>
				{#if isMenuOpen}
					<X size={20} />
				{:else}
					<Menu size={20} />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Navigation Overlay -->
	{#if isMenuOpen}
		<div
			class="absolute top-full left-0 w-full border-b bg-background/98 backdrop-blur-md md:hidden"
		>
			<nav class="flex flex-col p-4">
				{#each navLinks as link}
					<a
						class="flex py-3 text-lg font-medium text-foreground/70 transition-colors hover:text-primary"
						href={link.href}
						onclick={closeMenu}
					>
						{link.name}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>
