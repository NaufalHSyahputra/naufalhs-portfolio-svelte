<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/organisms/Navbar.svelte';
	import resume from '$lib/data/resume.json';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<Navbar name={resume.basics.name} />
{@render children()}
