<script lang="ts">
	import Typography from '../atoms/Typography.svelte';
	import Badge from '../atoms/Badge.svelte';

	interface Props {
		title: string;
		description: string;
		company: string;
		technologies: string[];
		coverImage?: string;
		images?: string[];
		onclick?: () => void;
	}

	let { title, description, company, technologies, coverImage, onclick }: Props = $props();
</script>

<button
	type="button"
	class="group flex h-full flex-col overflow-hidden rounded-lg border bg-card text-left text-card-foreground shadow-sm transition-all hover:border-primary/50 hover:shadow-md"
	{onclick}
>
	{#if coverImage}
		<div class="aspect-video overflow-hidden">
			<img
				src={coverImage}
				alt={title}
				class="h-full w-full transition-transform duration-300 group-hover:scale-105"
				loading="lazy"
				decoding="async"
			/>
		</div>
	{/if}
	<div class="flex flex-1 flex-col p-5">
		<Typography
			variant="h3"
			class="mb-1 text-xl font-bold transition-colors group-hover:text-primary">{title}</Typography
		>
		<Typography variant="muted" class="mb-4 text-sm">{company}</Typography>
		<div class="flex-1">
			<Typography variant="p" class="mb-6 line-clamp-2 text-sm text-muted-foreground"
				>{description}</Typography
			>
		</div>

		<div class="mt-auto flex flex-wrap gap-2">
			{#each technologies as tech (tech)}
				<Badge variant="secondary" class="text-[10px]">{tech}</Badge>
			{/each}
		</div>
	</div>
</button>
