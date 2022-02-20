<script lang="ts">
	import { fade as _fade } from 'svelte/transition';

	export let fade = false;
</script>

{#if fade}
	<div transition:_fade={{ duration: 100 }} class="container">
		<slot />
	</div>
{:else}
	<div class="container">
		<slot />
	</div>
{/if}

<style lang="postcss">
	.container {
		@apply m-auto max-w-3xl py-5 px-5 sm:py-20;
	}
</style>
