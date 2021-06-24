<script>
	import { fade } from 'svelte/transition';

	import Code from '../components/code.svelte';
	import Link from '../components/link.svelte';
</script>

<div transition:fade class="p-5 pb-10 sm:p-10 max-w-6xl flex flex-col m-auto text-gray-200">
	<a class="hover:underline text-gray-200" href="/">
		<h3 class="text-xl font-extrabold pb-5 flex items-center">Home</h3>
	</a>

	<h1 class="h1">How it's made!</h1>
	<p class="pb-5">This is by no means a tutorial - just some pointers 🎯</p>
	<p class="pb-5">
		I've got a boiler plate project for you
		<Link str="here" url="https://github.com/kyle-barth/sveltekit-tailwind-threejs-test" />,
		continue reading if you want to know a little more about how it works!
	</p>

	<div class="flex flex-col">
		<p class="pb-5">
			<span class="font-extrabold text-xl">Before we start,</span>
			it's important to note most the tools chosen for this project are still in beta (SvelteKit & TailwindCSS
			JIT) as of the time of writing this (23rd June 2021).
		</p>
		<p class="pb-1">
			These tools were picked for <span class="font-extrabold text-xl">fun</span>, I was mostly just
			interested in checking out a few things:
		</p>
		<ul>
			<li>How these tools are coming along.</li>
			<li>Dev experience using a CSR tool in an SSR app.</li>
			<li>Any excuse to try out three.js!</li>
		</ul>
	</div>

	<span class="w-3/4 m-auto h-1 bg-gray-200 my-10" />

	<div class="flex flex-col-reverse sm:flex-row pb-10">
		<img
			class="sm:w-1/2 sm:self-end sm:pr-5 sm:pb-0"
			alt="Screenshot of 3D application blender"
			src="/screenshots/blender.png"
		/>

		<div class="flex items-center pb-10 sm:pb-0">
			<div class="flex">
				<h1 class="h1 pr-5">1</h1>
				<div class="flex flex-col">
					<p class="max-w-md pb-5">
						Firstly, I grabbed some assets off the web and threw this together in Blender. I didn't
						really care about the scene too much, my priority was making the website - I was a
						little out of my depth here!
					</p>
					<p class="max-w-md">
						Once I was happy with it - I exported the scene as a .gltf file format.
					</p>
				</div>
			</div>
		</div>
	</div>

	<div class="flex flex-col sm:flex-row pb-10">
		<div class="flex pb-10 sm:pb-0">
			<h1 class="h1 pr-5">2</h1>
			<div class="flex flex-col">
				<p class="max-w-md pb-5">Now the fun part - It's Web Dev time.</p>

				<p class="max-w-md pb-5">
					I created the SvelteKit App with Tailwind JIT following this great
					<Link
						str="post"
						url="https://levelup.gitconnected.com/how-to-use-svelte-kit-with-tailwind-css-jit-just-in-time-compilation-bc04c0c9ec17"
					/>. From there I installed three.js with it's type definitions.
				</p>
				<p class="max-w-md pb-5">
					Since I want to load a .gltf scene, lets set up GLTFLoader from three.js. This turned out
					to be a little tricky, but I got it working by grabbing the code from the
					<Link
						str="GitHub"
						url="https://github.com/mrdoob/three.js/blob/dev/examples/jsm/loaders/GLTFLoader.js"
					/>, and I added it to the src directory of my project as <Code str="GLTFLoader.ts" />. I
					then changed the import in GLTFLoader to be
					<Code str="from 'three'" />. This was a work around for this
					<Link str="error" url="https://github.com/manuelbieh/geolib/issues/208" />. Hopefully this
					gets fixed soon! Now simply import your loader, don't forget to destructure it!
				</p>
				<Code str={"import { GLTFLoader } from '../GLTFLoader'"} />
			</div>
		</div>

		<img
			class="sm:w-1/2 sm:pl-5 self-center"
			alt="Screenshot of 3D application blender"
			src="/screenshots/dependencies.png"
		/>
	</div>

	<div class="flex flex-col-reverse sm:flex-row pb-10">
		<img
			class="sm:w-1/2 sm:self-end sm:mr-5 border-2"
			alt="Screenshot of 3D application blender"
			src="/screenshots/site.png"
		/>

		<div class="flex items-center pb-5 sm:pb-0">
			<div class="flex">
				<h1 class="h1 pr-5">3</h1>
				<div class="flex flex-col max-w-md">
					<p class="pb-5">
						Finally, it's time to actually put our scene on the page. To do this we have to remember
						that three.js relies on running client side as it references a canvas in the DOM. The
						canvas is then updated by a self calling function (the animation loop) using <Code
							str="requestAnimationFrame()"
						/> to render it's cool 3D scene to. To find out why we do this, I highly recommend this <Link
							str="talk"
							url="https://www.youtube.com/watch?v=cCOL7MC4Pl0"
						/>.
					</p>
					<p class="pb-5">
						Nothing a simple <Code str="onMount()" /> can't solve! Then for loading your scene, I followed
						this nice <Link
							str="post"
							url="https://redstapler.co/add-3d-model-to-website-threejs/"
						/>.
					</p>
					<p class="pb-5">
						The rest is nothing more than fancy <Link
							str="Svelte"
							url="https://svelte.dev/docs#svelte_transition"
						/> / <Link str="TailwindCSS" url="https://tailwindcss.com/docs/transition-property" /> animations
						- Happy hacking!
					</p>
				</div>
			</div>
		</div>
	</div>

	<button
		class="cursor-pointer focus:outline-none m-auto hover:underline p-5"
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Scroll to top</button
	>
</div>

<style lang="postcss">
	ul {
		@apply list-disc list-inside;
	}
	li {
		@apply pl-5;
	}
</style>
