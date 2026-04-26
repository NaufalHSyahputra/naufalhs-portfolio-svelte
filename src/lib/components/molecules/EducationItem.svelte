<script lang="ts">
	interface Props {
		institution: string;
		studyType: string;
		area: string;
		score?: string;
		date: string;
		href?: string;
	}

	let { institution, studyType, area, score, date, href }: Props = $props();
</script>

<div
	class="flex flex-col justify-between gap-4 rounded-lg border border-border/60 bg-card p-6 shadow-sm transition-all hover:border-primary/30 md:flex-row md:items-center md:p-8"
>
	<div class="flex items-start gap-4">
		<!-- Icon -->
		<div
			class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-graduation-cap"
				><path
					d="M21.42 10.922 12 4.19 2.58 10.922a.5.5 0 0 0 0 .814L12 18.47l9.42-6.734a.5.5 0 0 0 0-.814z"
				/><path d="M18 12.5v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5" /><path d="M3 21h18" /></svg
			>
		</div>

		<div>
			<h3 class="text-lg leading-snug font-semibold text-foreground">
				{#if href}
					<a
						{href}
						target="_blank"
						rel="noopener noreferrer"
						class="underline-offset-4 transition-colors hover:text-primary hover:underline"
					>
						{institution}
					</a>
				{:else}
					{institution}
				{/if}
			</h3>
			<p class="mt-0.5 text-muted-foreground">
				{studyType} · {area}
			</p>
			{#if score}
				<p class="mt-1 text-sm text-muted-foreground">
					GPA: <span class="font-medium text-foreground">{score}</span>
				</p>
			{/if}
		</div>
	</div>

	<!-- Date badge -->
	<div class="shrink-0 md:text-right">
		<span
			class="inline-flex rounded-full border border-border bg-muted px-3 py-1 font-mono text-xs font-medium text-muted-foreground"
		>
			{date}
		</span>
	</div>
</div>
