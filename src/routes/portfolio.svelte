<script lang="ts">
	import Cards from '$lib/components/Cards.svelte';
	import Container from '$lib/components/layout/Container.svelte';
</script>

<Container fade={true}>
	<div class="spacing flex flex-col">
		<a href="/">&larr; back</a>
		<h1 class="text-5xl">Portfolio.</h1>
		<p>
			Check out some of my favourite projects I've worked on listed below, otherwise there is much
			much more on my &nbsp; <a
				class="text-blue-600 hover:underline"
				href="https://github.com/kyle-barth/">GitHub &rarr;</a
			>
		</p>
	</div>

	<Cards />
</Container>

<style lang="postcss">
	.spacing * {
		@apply pb-5;
	}
</style>
