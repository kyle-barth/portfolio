<script lang="ts">
	import type { PortfolioCard } from '$lib/types/PortfolioCard';

	const portfolioCards: PortfolioCard[] = [
		{
			name: 'MRVF',
			url: 'https://www.mrvf.io',
			desc: 'A static website utilising FFmpeg.wasm to perform basic video formatting all client side in the browser.',
			img: {
				url: '/mrvf-preview.png',
				alt: 'preview image of www.mrvf.io'
			}
		},
		{
			name: 'Mandelbrot',
			url: 'https://mandelbrot-bice.vercel.app',
			desc: 'Experiment in utilising web workers to prevent jank from blocking the main thread.',
			img: {
				url: '/mandle-preview.png',
				alt: 'preview image of https://mandelbrot-bice.vercel.app'
			}
		},
		{
			name: 'Otter',
			url: 'https://otter-phi.vercel.app/',
			desc: 'A simple local storage MarkDown note app written with Svelte, TypeScript, TailwindCSS, bundled with Vite and deployed via Vercel.',
			img: {
				url: '/otter-preview.png',
				alt: 'preview image of https://otter-phi.vercel.app/'
			}
		}
	];
</script>

<div class="flex flex-wrap pt-10">
	{#each portfolioCards as portfolioCard, i}
		<div class={i === portfolioCards.length - 1 ? 'card' : 'card mb-10'}>
			<a class="z-10" href={portfolioCard.url} target="_blank">
				<img
					class="-z-50 transition-all sm:hover:scale-105"
					src={portfolioCard.img.url}
					alt={portfolioCard.img.alt}
				/>
			</a>

			<div class="z-30 bg-gray-800 p-5">
				<div class="flex flex-row items-center justify-between pb-5 text-3xl">
					<h1>{portfolioCard.name}</h1>
					<a class="button glassmorphic text-lg" href={portfolioCard.url} target="_blank"
						>link &rarr;</a
					>
				</div>

				<p>
					{portfolioCard.desc}
				</p>
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.card {
		@apply flex flex-col overflow-hidden rounded-xl border-2 border-white shadow-2xl;
	}
	.button {
		@apply rounded-md border-2 border-white bg-white bg-opacity-20 px-2 hover:bg-opacity-30;
	}
</style>
