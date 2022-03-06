<script lang="ts">
	import { fly } from 'svelte/transition';
	import Lightbulb from '$lib/components/icons/Lightbulb.svelte';
	import Scene from '$lib/components/scene/Scene.svelte';
	import { camera } from '$lib/store/camera';
	import { deskLoaded } from '$lib/store/deskLoaded';
	import { slideL, slideR } from '$lib/animations/slide';
	import { light } from '$lib/store/light';

	let loaded = false;

	function reset() {
		camera.reset();
		light.reset();
	}

	$: {
		if ($deskLoaded) {
			setTimeout(() => {
				loaded = true;
			}, 750);
		}
	}
</script>

{#if loaded}
	<div class="absolute top-0 left-0 h-screen w-screen overflow-x-hidden">
		<div
			in:fly={slideR}
			class="glassmorphic absolute left-0 bottom-0 z-10 flex h-1/2 w-full flex-col justify-between bg-gray-900 bg-opacity-50 p-5 sm:h-full sm:w-1/2 sm:p-10"
		>
			<div class="max-w-lg self-end">
				<div class="relative right-0 flex items-center pb-5">
					<img src="/rocket.ico" alt="Rocket Icon" class="h-[4rem] sm:h-20" />
					<h1 class="pl-4 text-6xl sm:text-8xl">Hi.</h1>
				</div>
				<p class="text-xl sm:text-2xl">
					I'm Kyle, a passionate Full Stack Web Dev based in london. Welcome to my site!
				</p>
			</div>

			<div class="flex w-full flex-col text-right">
				<a href="/portfolio">portfolio &rarr;</a>
				<a href="/skillset">tooling / skillset &rarr;</a>
			</div>
		</div>

		<div
			in:fly={slideL}
			class="camera-controls absolute left-0 z-10 flex items-center p-5 sm:left-1/2 sm:right-0 sm:w-1/2 sm:p-10 "
		>
			<button class="glassmorphic" on:click={light.rand}
				>randomize lighting
				<Lightbulb /></button
			>
			<span class="px-5">|</span>
			<button class="glassmorphic" on:click={reset}>reset</button>
		</div>
	</div>
{/if}

<Scene />

<style lang="postcss">
	:global(.camera-controls *) {
		@apply text-zinc-400;
	}
	a {
		@apply text-2xl hover:underline;
	}
	button {
		@apply flex items-center font-mono hover:underline;
	}
</style>
