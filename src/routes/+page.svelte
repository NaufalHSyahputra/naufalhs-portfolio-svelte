<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import Section from '$lib/components/organisms/Section.svelte';
	import ExperienceItem from '$lib/components/molecules/ExperienceItem.svelte';
	import ProjectCard from '$lib/components/molecules/ProjectCard.svelte';
	import SkillsSection from '$lib/components/organisms/SkillsSection.svelte';
	import EducationItem from '$lib/components/molecules/EducationItem.svelte';
	import Badge from '$lib/components/atoms/Badge.svelte';
	import Typography from '$lib/components/atoms/Typography.svelte';

	import ProjectModal from '$lib/components/molecules/ProjectModal.svelte';

	import type { Project } from '$lib/types';

	let { data } = $props();
	let resume = $derived(data.resume);
	let basics = $derived(resume.basics);
	let sections = $derived(resume.sections);

	let selectedProject = $state<Project | null>(null);

	let seoTitle = $derived(`${basics.name} | ${basics.headline}`);
	let seoDescription = $derived(sections.summary.content);

	// Calculate stats
	let yearsExp = $derived(new Date().getFullYear() - 2019);
	let companiesCount = $derived(
		new Set(sections.experience.items.map((item: any) => item.company)).size
	);
	let projectsCount = $derived(sections.projects.items.length);
</script>

<svelte:head>
	<title>{seoTitle}</title>
	<meta name="description" content={seoDescription} />
	<meta property="og:title" content={seoTitle} />
	<meta property="og:description" content={seoDescription} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={basics.picture.url} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seoTitle} />
	<meta name="twitter:description" content={seoDescription} />
</svelte:head>

<ProjectModal project={selectedProject} onClose={() => (selectedProject = null)} />

<main class="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pb-16 md:pb-24">
	<Hero
		name={basics.name}
		headline={basics.headline}
		location={basics.location}
		summary={sections.summary.content}
		email={basics.email}
		pictureUrl={basics.picture.url}
		socials={basics.customFields}
		stats={{
			yearsExp,
			companiesCount,
			projectsCount
		}}
	/>

	<Section title="Experience" id="experience">
		<div class="flex flex-col gap-4">
			{#each sections.experience.items as exp (exp.id)}
				<ExperienceItem
					company={exp.company}
					position={exp.position}
					date={exp.date}
					location={exp.location}
					summaries={exp.summaries}
					multipleSummaries={exp.multipleSummaries}
					technologies={exp.technologies}
				/>
			{/each}
		</div>
	</Section>

	<Section title="Skills" id="skills">
		<SkillsSection skills={sections.skills.items} />
	</Section>

	<Section title="Projects" id="projects">
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each sections.projects.items as project (project.id)}
				<ProjectCard
					title={project.title}
					description={project.description}
					company={project.company}
					technologies={project.technologies}
					coverImage={project.coverImage}
					images={project.images}
					onclick={() => (selectedProject = project)}
				/>
			{/each}
		</div>
	</Section>

	<Section title="Education" id="education">
		<div class="space-y-4">
			{#each sections.education.items as edu (edu.id)}
				<EducationItem
					institution={edu.institution}
					studyType={edu.studyType}
					area={edu.area}
					score={edu.score}
					date={edu.date}
					href={edu.url?.href}
				/>
			{/each}

			{#if sections.languages.items.length > 0}
				<div class="mt-8 flex flex-wrap items-center gap-3">
					<Typography variant="p" class="text-sm font-medium text-muted-foreground">
						Languages:
					</Typography>
					{#each sections.languages.items as lang (lang.id)}
						<Badge variant="outline" class="bg-accent/50">{lang.name}</Badge>
					{/each}
				</div>
			{/if}
		</div>
	</Section>

	<footer class="mt-24 border-t py-12 text-center">
		<Typography variant="muted">
			© {new Date().getFullYear()}
			{basics.name}. Built with SvelteKit & Tailwind CSS.
		</Typography>
	</footer>
</main>
