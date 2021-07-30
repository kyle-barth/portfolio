<script lang="ts">
	import { fly } from 'svelte/transition';
	import { fade } from 'svelte/transition';

	import { slide } from '../animations/slide';

	import Desk from '../components/desk.svelte';
	import SVGButton from '../components/SVGButton.svelte';

	import TailwindSVG from '../icons/tailwind.svg.svelte';
	import ThreeSVG from '../icons/three.svg.svelte';
	import SvelteSVG from '../icons/svelte.svg.svelte';
	import TypeScriptSVG from '../icons/typescript.svg.svelte';
	import Rightarrow from '../icons/rightarrow.svg.svelte';

	let loaded: boolean = false;
	let delay: boolean = false;

	$: {
		if (loaded) {
			setTimeout(() => {
				delay = true;
			}, 750);
		}
	}
</script>

<div out:fade>
	<Desk bind:loaded />

	{#if delay}
		<div
			class="h-3/5 bottom-0 p-5 sm:w-1/2 sm:h-full sm:p-10 absolute flex justify-end z-50 text-gray-200 bg-gray-600 glassmorphic"
			in:fly={slide}
		>
			<div class="sm:max-w-xl flex flex-col justify-between">
				<div>
					<div class="flex flex-row align-middle">
						<img src="/rocket.ico" alt="Rocket Icon" class="h-16"> 
						<h1 class="h1 pl-4">Hi.</h1>
					</div>
					<p class="text-lg">I'm Kyle. I am a passionate Full Stack Web Dev. Welcome to my site!</p>
				</div>

				<div>
					<a href="skills" class="hover:underline">
						<h3 class="text-xl font-extrabold pb-5 flex items-center">
							Tools I've worked with
							<Rightarrow />
						</h3>
					</a>
					<a href="the-build" class="hover:underline">
						<h3 class="text-xl font-extrabold pb-5 flex items-center">
							Find out how this site was made / link to boiler plate repo
							<Rightarrow />
						</h3>
					</a>
					<div class="flex justify-between">
						<SVGButton svgIcon={TailwindSVG} url="https://tailwindcss.com/" />
						<SVGButton svgIcon={ThreeSVG} url="https://threejs.org/" />
						<SVGButton svgIcon={SvelteSVG} url="https://kit.svelte.dev/" />
						<SVGButton svgIcon={TypeScriptSVG} url="https://www.typescriptlang.org/" />
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	/*   only works on chrome :(   */
	.glassmorphic {
		@apply backdrop-filter backdrop-blur-xl bg-opacity-30;
	}
</style>
