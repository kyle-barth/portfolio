<script lang="ts">
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
	import Desk from '$lib/components/scene/Desk.svelte';
	import Camera from '$lib/components/scene/Camera.svelte';
	import Lighting from '$lib/components/scene/Lighting.svelte';
	import { deskLoaded } from '$lib/store/deskLoaded';
	import { onMount } from 'svelte';

	let canvasContainer: HTMLDivElement;

	onMount(() => {
		deskLoaded.subscribe((loaded) => {
			if (loaded) {
				requestAnimationFrame(() => {
					canvasContainer.classList.remove('scale-0');
				});
			}
		});
	});
</script>

<div
	id="scene-container"
	bind:this={canvasContainer}
	class="absolute left-0 top-0 h-full w-full scale-0 transition-all duration-700"
>
	<SC.Canvas antialias shadows={THREE.VSMShadowMap}>
		<Desk />
		<Camera />
		<Lighting />
	</SC.Canvas>
</div>

<style lang="postcss">
	/* svelte-cubed bug? not sure why anyone would want a 
	 max-w forced on the canvas... */
	:global(#scene-container *) {
		@apply h-full w-full max-w-none !important;
	}
</style>
