<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
</script>

<Container fade={true}>
	<div class="spacing flex w-full flex-col">
		<a href="/">&larr; back</a>
		<h1 class="text-5xl">Skillset.</h1>
		<p>
			A list of the tooling I have used in industry and in my down time, from the small to the large
			scale projects with <span class="text-xl font-extrabold"
				>thousands of requests per-second</span
			>.
		</p>
	</div>

	<span class="m-auto my-10 h-1 w-3/4 bg-gray-200" />

	<h2>Preferred Languages</h2>
	<ul>
		<li>TypeScript - JavaScript.</li>
	</ul>

	<h2>Front-End</h2>
	<ul>
		<li>NextJS - React.</li>
		<li>SvelteKit - Svelte.</li>
	</ul>
	<div class="pl-5">
		<h3>Styling</h3>
		<ul>
			<li>CSS / PostCSS / SCSS.</li>
			<li>TailwindCSS.</li>
		</ul>
	</div>

	<h2>Testing</h2>
	<ul>
		<li>Jest.</li>
		<li>Mocha.</li>
	</ul>

	<h2>Back-End</h2>
	<ul>
		<li>NestJS.</li>
		<li>ExpressJS.</li>
		<li>GraphQL.</li>
	</ul>

	<h2>Cloud / DevOps</h2>
	<div class="pl-5">
		<h3>AWS</h3>
		<ul>
			<li>CloudWatch.</li>
			<li>Incognito.</li>
			<li>EC2 / ECS.</li>
		</ul>
	</div>
	<ul>
		<li>Vercel.</li>
		<li>Docker.</li>
		<li>CircleCI.</li>
		<li>GitLab CI/CD.</li>
	</ul>

	<h2>Other</h2>
	<ul>
		<li>Git.</li>
		<li>GitHub.</li>
		<li>GitLab.</li>
		<li>Stash.</li>
		<li>Jira.</li>
	</ul>
</Container>

<style lang="postcss">
	.spacing * {
		@apply pb-5;
	}
	h2 {
		@apply text-xl font-bold;
	}
	h3 {
		@apply text-lg font-bold;
	}
	ul {
		@apply list-inside list-disc pb-2;
	}
	li {
		@apply pl-5;
	}
</style>
