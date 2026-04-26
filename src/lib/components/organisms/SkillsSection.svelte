<script lang="ts">
	interface Skill {
		title: string;
		image?: string;
		image_dark?: string;
	}

	interface Category {
		name: string;
		keywords: Skill[];
	}

	interface Props {
		skills: Category[];
	}

	let { skills }: Props = $props();

	let activeTab = $state('');

	$effect(() => {
		if (!activeTab && skills.length > 0) {
			activeTab = skills[0].name;
		}
	});

	const activeCategory = $derived(skills.find((c) => c.name === activeTab) || skills[0]);
</script>

<div class="flex flex-col gap-8">
	<!-- Tab Navigation -->
	<div class="flex flex-wrap gap-2 border-b pb-4">
		{#each skills as category (category.name)}
			<button
				onclick={() => (activeTab = category.name)}
				class={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
					activeTab === category.name
						? 'bg-primary text-primary-foreground shadow-sm'
						: 'text-muted-foreground hover:bg-muted hover:text-foreground'
				}`}
			>
				{category.name}
			</button>
		{/each}
	</div>

	<!-- Tab Content -->
	{#if activeCategory}
		<div
			class="grid grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5"
			style="content-visibility: auto;"
		>
			{#each activeCategory.keywords as skill (skill.title)}
				<div
					class="group flex flex-col items-center justify-center gap-3 rounded-xl border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md sm:p-6 dark:hover:bg-muted/50"
				>
					<div class="flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12">
						{#if skill.image}
							{#if skill.image_dark && skill.image_dark !== skill.image}
								<img
									src={`/assets/skills/${skill.image}`}
									alt={skill.title}
									class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110 dark:hidden"
									loading="lazy"
									decoding="async"
								/>
								<img
									src={`/assets/skills/${skill.image_dark}`}
									alt={skill.title}
									class="hidden h-full w-full object-contain transition-transform duration-300 group-hover:scale-110 dark:block"
									loading="lazy"
									decoding="async"
								/>
							{:else}
								<img
									src={`/assets/skills/${skill.image}`}
									alt={skill.title}
									class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
									loading="lazy"
									decoding="async"
								/>
							{/if}
						{:else}
							<div
								class="flex h-full w-full items-center justify-center rounded-lg bg-muted text-lg font-bold"
							>
								{skill.title.charAt(0)}
							</div>
						{/if}
					</div>
					<span
						class="text-center text-[10px] font-medium text-muted-foreground transition-colors group-hover:text-foreground sm:text-xs"
					>
						{skill.title}
					</span>
				</div>
			{/each}
		</div>
	{/if}
</div>
