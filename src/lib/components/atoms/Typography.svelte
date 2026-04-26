<script lang="ts">
	interface Props {
		variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'lead' | 'small' | 'muted';
		class?: string;
		id?: string;
		children?: import('svelte').Snippet;
	}

	let { variant = 'p', class: className = '', id, children }: Props = $props();

	const variants = {
		h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
		h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
		h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
		h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
		p: 'leading-7 [&:not(:first-child)]:mt-6',
		lead: 'text-xl text-muted-foreground',
		small: 'text-sm font-medium leading-none',
		muted: 'text-sm text-muted-foreground'
	};
</script>

{#if variant === 'h1'}
	<h1 {id} class={`${variants[variant]} ${className}`}>{@render children?.()}</h1>
{:else if variant === 'h2'}
	<h2 {id} class={`${variants[variant]} ${className}`}>{@render children?.()}</h2>
{:else if variant === 'h3'}
	<h3 {id} class={`${variants[variant]} ${className}`}>{@render children?.()}</h3>
{:else if variant === 'h4'}
	<h4 {id} class={`${variants[variant]} ${className}`}>{@render children?.()}</h4>
{:else if variant === 'p'}
	<p {id} class={`${variants[variant]} ${className}`}>{@render children?.()}</p>
{:else if variant === 'lead'}
	<p {id} class={`${variants[variant]} ${className}`}>{@render children?.()}</p>
{:else if variant === 'small'}
	<small {id} class={`${variants[variant]} ${className}`}>{@render children?.()}</small>
{:else if variant === 'muted'}
	<p {id} class={`${variants[variant]} ${className}`}>{@render children?.()}</p>
{/if}
