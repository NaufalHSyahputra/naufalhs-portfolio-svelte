<script lang="ts">
	import Typography from '../atoms/Typography.svelte';
	import Badge from '../atoms/Badge.svelte';

	interface Props {
		company: string;
		position: string;
		date: string;
		location: string;
		summaries?: string[];
		multipleSummaries?: Array<{
			company: string;
			summaries: string[];
		}>;
		technologies: string[];
	}

	let { company, position, date, location, summaries, multipleSummaries, technologies }: Props =
		$props();
</script>

<div
	class="relative pl-8 before:absolute before:top-2 before:left-0 before:h-full before:w-[2px] before:bg-border last:before:h-8"
>
	<div
		class="absolute top-2 left-[-5px] h-3 w-3 rounded-full border-2 border-primary bg-background"
	></div>

	<div class="mb-8">
		<div class="flex flex-col justify-between sm:flex-row sm:items-center">
			<Typography variant="h3" class="text-xl font-bold">{position}</Typography>
			<Typography variant="muted" class="text-sm">{date}</Typography>
		</div>
		<div class="mb-2 flex items-center gap-2">
			<Typography variant="lead" class="text-base font-semibold">{company}</Typography>
			<span class="text-muted-foreground">•</span>
			<Typography variant="muted" class="text-sm">{location}</Typography>
		</div>

		{#if summaries && summaries.length > 0}
			<ul class="mb-4 list-outside list-disc space-y-1.5 pl-4">
				{#each summaries as item (item)}
					<li class="text-sm leading-relaxed text-muted-foreground">
						{item}
					</li>
				{/each}
			</ul>
		{/if}

		{#if multipleSummaries && multipleSummaries.length > 0}
			<div class="mb-4 space-y-4">
				{#each multipleSummaries as multi (multi.company)}
					<div>
						<Typography variant="p" class="mb-2 text-sm font-semibold text-foreground">
							{multi.company}
						</Typography>
						<ul class="list-outside list-disc space-y-1 pl-4">
							{#each multi.summaries as item (item)}
								<li class="text-sm leading-relaxed text-muted-foreground">
									{item}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		{/if}

		<div class="flex flex-wrap gap-2">
			{#each technologies as tech (tech)}
				<Badge variant="outline" class="text-[10px]">{tech}</Badge>
			{/each}
		</div>
	</div>
</div>
