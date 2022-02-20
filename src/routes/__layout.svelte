<script>
	import Seo from '$lib/components/seo/Seo.svelte';
	import '../app.css';
</script>

<slot />

<Seo />

<style lang="postcss">
	:global(*) {
		@apply font-sfPro text-white;
	}
	:global(.glassmorphic) {
		/*   only works on chrome :(   */
		@apply backdrop-blur-xl backdrop-filter;
	}
</style>
