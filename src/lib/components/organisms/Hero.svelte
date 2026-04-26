<script lang="ts">
	import Typography from '../atoms/Typography.svelte';
	import Badge from '../atoms/Badge.svelte';
	import { Mail, ArrowDown, MapPin, MessageCircle, Download } from 'lucide-svelte';

	interface Props {
		name: string;
		headline: string;
		location: string;
		summary: string;
		email: string;
		pictureUrl?: string;
		socials: Array<{ name: string; value: string; icon: string }>;
		stats: {
			yearsExp: number;
			companiesCount: number;
			projectsCount: number;
		};
	}

	let { name, headline, location, summary, email, pictureUrl, socials, stats }: Props = $props();

	function scrollToNextSection() {
		const element = document.getElementById('experience');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

{#snippet BrandIcon({ name, size = 20 }: { name: string; size?: number })}
	{#if name.toLowerCase() === 'github'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-github"
		>
			<path
				d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
			/>
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	{:else if name.toLowerCase() === 'linkedin'}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-linkedin"
		>
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect width="4" height="12" x="2" y="9" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	{:else if name.toLowerCase() === 'whatsapp'}
		<MessageCircle {size} />
	{:else}
		<Mail {size} />
	{/if}
{/snippet}

<section
	class="relative flex min-h-[calc(100vh-80px)] flex-col items-center justify-center py-12 lg:py-0"
>
	<!-- Background Glow Effect -->
	<div class="absolute inset-0 -z-10 overflow-hidden">
		<div class="absolute top-1/4 -left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px]"></div>
		<div
			class="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]"
		></div>
	</div>

	<div class="flex w-full flex-col items-center gap-10 md:flex-row md:items-center md:gap-12 lg:gap-16">
		<!-- Left Content -->
		<div class="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
			<!-- Availability Badge -->
			<div
				class="mb-6 flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-[10px] font-semibold text-green-600 md:text-xs dark:text-green-400"
			>
				<span class="relative flex h-2 w-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
					></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
				</span>
				OPEN TO OPPORTUNITIES
			</div>

			<div class="flex flex-col gap-2 md:gap-4">
				<Typography
					variant="h1"
					class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
				>
					{name}
				</Typography>
				<Typography
					variant="lead"
					class="text-lg font-semibold text-primary sm:text-2xl md:text-3xl"
				>
					{headline}
				</Typography>
				<Typography
					variant="muted"
					class="flex items-center justify-center gap-2 text-sm md:justify-start md:text-base"
				>
					<MapPin size={16} class="text-muted-foreground md:size-[18px]" />
					{location}
				</Typography>
			</div>

			<Typography
				variant="p"
				class="mt-6 max-w-[650px] text-base leading-relaxed text-muted-foreground sm:text-lg md:mt-8 md:text-xl"
			>
				{summary}
			</Typography>

			<!-- Actions -->
			<div class="mt-8 flex w-full flex-col justify-center gap-4 sm:flex-row md:justify-start lg:mt-10">
				<a
					href="mailto:{email}"
					class="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95 sm:w-auto"
				>
					<Mail size={18} />
					Get In Touch
				</a>

				<div class="flex w-full flex-wrap justify-center gap-3 sm:w-auto md:justify-start">
					{#each socials as social}
						<a
							href={social.value}
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-12 min-w-[120px] flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 font-medium transition-all hover:bg-accent hover:text-accent-foreground sm:flex-none"
							title={social.name}
						>
							{@render BrandIcon({ name: social.name })}
							<span class="hidden sm:inline">{social.name}</span>
						</a>
					{/each}
				</div>
			</div>

			<!-- Stats -->
			<div
				class="mt-12 grid w-full grid-cols-2 gap-6 border-t border-border/50 pt-8 sm:grid-cols-3 sm:gap-8 md:mt-16 md:gap-10 md:pt-10 lg:gap-16"
			>
				<div class="flex flex-col gap-1">
					<span class="text-3xl font-bold text-foreground sm:text-4xl"
						>{stats.yearsExp}+</span
					>
					<span
						class="text-[9px] font-bold tracking-widest text-muted-foreground uppercase md:text-[10px]"
						>Years Exp.</span
					>
				</div>
				<div class="flex flex-col gap-1">
					<span class="text-3xl font-bold text-foreground sm:text-4xl"
						>{stats.companiesCount}</span
					>
					<span
						class="text-[9px] font-bold tracking-widest text-muted-foreground uppercase md:text-[10px]"
						>Companies</span
					>
				</div>
				<div class="flex flex-col gap-1 col-span-2 sm:col-span-1">
					<span class="text-3xl font-bold text-foreground sm:text-4xl"
						>{stats.projectsCount}</span
					>
					<span
						class="text-[9px] font-bold tracking-widest text-muted-foreground uppercase md:text-[10px]"
						>Projects</span
					>
				</div>
			</div>
		</div>

		<!-- Right Image -->
		{#if pictureUrl}
			<div class="relative order-first md:order-last">
				<div class="absolute -inset-4 rounded-full bg-primary/20 blur-2xl"></div>
				<div
					class="relative h-48 w-48 overflow-hidden rounded-full border-2 border-primary/30 p-1.5 shadow-2xl transition-transform hover:scale-105 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80"
				>
					<div class="h-full w-full overflow-hidden rounded-full bg-accent">
						<img
							src={pictureUrl}
							alt={name}
							class="h-full w-full object-cover"
							fetchpriority="high"
							loading="eager"
							decoding="async"
							width="384"
							height="384"
						/>
					</div>
				</div>
			</div>
		{/if}
	</div>

	<!-- Scroll Indicator -->
	<button
		onclick={scrollToNextSection}
		class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
		aria-label="Scroll to experience"
	>
		<div class="animate-bounce">
			<ArrowDown size={24} />
		</div>
	</button>
</section>
