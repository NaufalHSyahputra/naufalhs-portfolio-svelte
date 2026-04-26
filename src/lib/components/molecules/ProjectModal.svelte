<script lang="ts">
	import Typography from '../atoms/Typography.svelte';
	import Badge from '../atoms/Badge.svelte';
	import { fade, scale } from 'svelte/transition';
	import createPanZoom from 'panzoom';
	import { X } from 'lucide-svelte';

	import type { Project } from '$lib/types';

	interface Props {
		project: Project | null;
		onClose: () => void;
	}

	let { project, onClose }: Props = $props();

	let zoomedImage = $state<string | null>(null);

	// Action for panzoom
	function panzoomAction(node: HTMLElement) {
		const pz = createPanZoom(node, {
			maxZoom: 5,
			minZoom: 1,
			bounds: true,
			boundsPadding: 0.1,
			zoomDoubleClickSpeed: 1 // Disable double click zoom to allow fast closing if needed, or keep it
		});

		return {
			destroy() {
				pz.dispose();
			}
		};
	}

	// Close on escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			if (zoomedImage) {
				zoomedImage = null;
			} else {
				onClose();
			}
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if project}
	<!-- Zoomed Image Overlay -->
	{#if zoomedImage}
		<div
			class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
			transition:fade={{ duration: 200 }}
		>
			<!-- Controls Overlay -->
			<div class="absolute top-6 right-6 z-[110] flex items-center gap-6">
				<div class="hidden flex-col items-end gap-1 md:flex">
					<Typography variant="p" class="text-sm font-medium text-white"
						>Interactive View</Typography
					>
					<Typography variant="muted" class="text-xs text-white/50"
						>Scroll to zoom • Drag to pan</Typography
					>
				</div>
				<button
					type="button"
					class="rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
					onclick={() => (zoomedImage = null)}
					aria-label="Close zoom"
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
						stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
					>
				</button>
			</div>

			<!-- Panable Container -->
			<div class="flex h-full w-full items-center justify-center overflow-hidden">
				<div class="h-full w-full cursor-move" use:panzoomAction>
					<div class="flex h-full w-full items-center justify-center p-12">
						<img
							src={zoomedImage}
							alt="Zoomed project"
							class="max-h-full max-w-full rounded-sm object-contain shadow-2xl"
							transition:scale={{ duration: 300, start: 0.95, opacity: 0 }}
						/>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- Backdrop -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm transition-all"
		onclick={onClose}
		transition:fade={{ duration: 200 }}
		role="presentation"
	>
		<!-- Modal Content -->
		<div
			class="relative max-h-[95vh] w-full max-w-4xl overflow-hidden rounded-2xl border bg-card shadow-2xl transition-all sm:max-h-[90vh]"
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			tabindex="-1"
			transition:scale={{ duration: 300, start: 0.95, opacity: 0 }}
		>
			<!-- Close Button -->
			<button
				type="button"
				class="absolute top-4 right-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-background/80 p-2 text-foreground/70 backdrop-blur-sm transition-colors hover:bg-background hover:text-foreground"
				onclick={onClose}
				aria-label="Close"
			>
				<X size={20} />
			</button>

			<div class="flex h-full flex-col md:flex-row">
				<!-- Images Section -->
				<div class="h-[40vh] flex-1 overflow-y-auto bg-muted/50 md:h-auto md:max-h-[90vh]">
					<div class="flex flex-col gap-4 p-4 md:p-6">
						{#if project.images && project.images.length > 0}
							{#each project.images as img (img)}
								<button
									type="button"
									class="w-full cursor-zoom-in transition-transform hover:scale-[1.01]"
									onclick={() => (zoomedImage = img)}
								>
									<img
										src={img}
										alt={project.title}
										class="w-full rounded-lg object-contain shadow-sm"
										loading="lazy"
									/>
								</button>
							{/each}
						{:else if project.coverImage}
							<button
								type="button"
								class="w-full cursor-zoom-in transition-transform hover:scale-[1.01]"
								onclick={() => (zoomedImage = project.coverImage || null)}
							>
								<img
									src={project.coverImage}
									alt={project.title}
									class="w-full rounded-lg object-contain shadow-sm"
									loading="lazy"
								/>
							</button>
						{/if}
					</div>
				</div>

				<!-- Info Section -->
				<div class="flex w-full flex-col overflow-y-auto p-6 md:w-80 md:p-8 lg:w-96">
					<Typography variant="h2" id="modal-title" class="mb-1 text-xl font-bold sm:text-2xl"
						>{project.title}</Typography
					>
					<Typography variant="muted" class="mb-4 text-sm sm:mb-6">{project.company}</Typography>

					<div class="mb-6 flex-1 sm:mb-8">
						<Typography
							variant="h4"
							class="mb-2 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase sm:mb-3 sm:text-xs"
							>Description</Typography
						>
						<Typography variant="p" class="text-xs leading-relaxed text-foreground/90 sm:text-sm">
							{project.description}
						</Typography>
					</div>

					<div class="mt-auto">
						<Typography
							variant="h4"
							class="mb-2 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase sm:mb-3 sm:text-xs"
							>Technologies</Typography
						>
						<div class="flex flex-wrap gap-1.5 sm:gap-2">
							{#each project.technologies as tech (tech)}
								<Badge variant="secondary" class="px-2 py-0 text-[9px] sm:text-[10px]">{tech}</Badge
								>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Hide scrollbar for images section but allow scrolling */
	.overflow-y-auto {
		scrollbar-width: thin;
		scrollbar-color: hsl(var(--muted-foreground) / 0.2) transparent;
	}

	.overflow-y-auto::-webkit-scrollbar {
		width: 4px;
	}

	.overflow-y-auto::-webkit-scrollbar-thumb {
		background-color: hsl(var(--muted-foreground) / 0.2);
		border-radius: 20px;
	}
</style>
