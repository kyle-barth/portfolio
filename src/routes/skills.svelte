<script>
	import { fade } from 'svelte/transition';
</script>

<div transition:fade class="p-5 pb-10 sm:p-10 max-w-6xl flex flex-col m-auto text-gray-200">
	<a class="hover:underline text-gray-200" href="/">
		<h3 class="text-xl font-extrabold pb-5 flex items-center">Home</h3>
	</a>

	<h1 class="h1">Tooling / Skillset.</h1>
	<p>
		A list of the tooling I have used in industry and in my down time, from the small to the large
		scale projects with <span class="font-extrabold text-xl">thousands of requests per-second</span
		>.
	</p>

	<span class="w-3/4 m-auto h-1 bg-gray-200 my-10" />

	<h2>Preferred Languages</h2>
	<ul>
		<li>TypeScript.</li>
		<li>JavaScript.</li>
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

	<h2>Front-End</h2>
	<ul>
		<li>NextJS - React.</li>
		<li>SvelteKit - Svelte.</li>
		<li>Angular 9.</li>
		<li>HTML 5.</li>
	</ul>
	<div class="pl-5">
		<h3>Styling</h3>
		<ul>
			<li>CSS / PostCSS / SCSS.</li>
			<li>TailwindCSS.</li>
			<li>MaterialUI / MUI.</li>
		</ul>
	</div>

	<h2>Back-End</h2>
	<ul>
		<li>NestJS.</li>
		<li>ExpressJS.</li>
		<li>GraphQL.</li>
	</ul>

	<h2>Testing</h2>
	<ul>
		<li>Jest.</li>
		<li>Mocha.</li>
	</ul>

	<h2>Other</h2>
	<ul>
		<li>Git.</li>
		<li>GitHub.</li>
		<li>GitLab.</li>
		<li>Stash.</li>
		<li>Jira.</li>
	</ul>

	<button
		class="sm:hidden cursor-pointer focus:outline-none m-auto hover:underline p-5"
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Scroll to top</button
	>
</div>

<style lang="postcss">
	h2 {
		@apply text-xl font-bold;
	}
	h3 {
		@apply text-lg font-bold;
	}
	ul {
		@apply list-disc list-inside pb-2;
	}
	li {
		@apply pl-5;
	}
</style>
