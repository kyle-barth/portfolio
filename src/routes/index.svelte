<script lang="ts">
	import { fly } from 'svelte/transition';
	import { slide } from '../animations/slide';
	import Desk from '../components/desk.svelte';

	import SVGButton from '../components/SVGButton.svelte';

	import TailwindSVG from '../icons/tailwind.svg.svelte';
	import ThreeSVG from '../icons/three.svg.svelte';
	import SvelteSVG from '../icons/svelte.svg.svelte';
	import TypeScriptSVG from '../icons/typescript.svg.svelte';

	import Rightarrow from '../icons/rightarrow.svg.svelte';

	let loaded: boolean = false;
</script>

<Desk bind:loaded />

{#if loaded}
	<div
		class="absolute flex justify-end z-50 w-1/2 p-10 text-gray-200 h-full bg-gray-600 glassmorphic"
		in:fly={slide}
	>
		<div class="max-w-xl flex flex-col justify-between">
			<div>
				<h1 class="text-6xl font-extrabold">Hi. 🚀</h1>
				<p class="text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam cum sed ad, et labore,
					sint vel nisi iure consectetur explicabo beatae soluta laudantium perspiciatis! Architecto
					rerum voluptate eaque neque impedit.
				</p>
			</div>

			<div>
				<h3 class="text-xl font-extrabold pb-5 flex items-center">
					Made with some cool stuff
					<Rightarrow />
				</h3>
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

<style lang="postcss">
	/*   only works on chrome :(   */
	.glassmorphic {
		@apply backdrop-filter backdrop-blur-xl bg-opacity-30;
	}
</style>
