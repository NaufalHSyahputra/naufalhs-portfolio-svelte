<script lang="ts">
	import Typography from '../atoms/Typography.svelte';

	interface Props {
		title: string;
		id?: string;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let { title, id, class: className = '', children }: Props = $props();
</script>

<section {id} class={`py-12 md:py-20 ${className}`} style="content-visibility: auto; contain-intrinsic-size: 1px 500px;">
	<div class="flex flex-col gap-8 md:gap-12">
		<div class="flex flex-col gap-2">
			<Typography variant="h2" class="text-3xl font-bold tracking-tight md:text-4xl">
				{title}
			</Typography>
			<div class="h-1.5 w-12 rounded-full bg-primary/80"></div>
		</div>
		{@render children?.()}
	</div>
</section>
