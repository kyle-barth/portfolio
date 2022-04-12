<!-- Lazy loads images with a nice fade in animation
1. IF IMAGE FIRST LOAD - once the image has loaded,
	a reference to the image is appended to a cache
	so next time step 2 is followed.
2. IF IMAGE PREVIOUSLY LOADED - it does nothing 
	and leaves svelte's clever image caching do it's 
	thing. This means the image will only fade in upon
	it's first load - from then on will already be 
	loaded and displayed instantly from svelte's cahce
	- so no need to fade the image in.
 -->
<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	export let alt: string;
	export let src: string;
	export let width: string = '';
	export let height: string = '';
	export let classes: string = '';
	export let loading: string = '';

	let imgEl: HTMLImageElement;

	onMount(() => {
		imgEl.src = src;
	});

	if (browser) {
		if (!window['imgCache']) {
			window['imgCache'] = [];
		}

		window['lazyImgFadeIn'] = (src: string) => {
			if (!window['imgCache'].includes(src)) {
				window['imgCache'].push(src);
				document.getElementById(src).classList.remove('opacity-0');
			}
		};
	}
</script>

<img
	id={'lazy-img-' + src}
	{alt}
	{width}
	{height}
	{loading}
	style={`width: ${width}px; height: ${height}px`}
	class={browser && window['imgCache'].includes('lazy-img-' + src)
		? classes
		: 'opacity-0 ' + classes}
	decoding="async"
	onload="window['lazyImgFadeIn'](this.id)"
	bind:this={imgEl}
/>

<style lang="postcss">
	img {
		@apply transition-all ease-in;
	}
</style>
