<script lang="ts">
	import { fade } from 'svelte/transition';

	export let svgIcon: any;
	export let url: string;

	let hover: boolean = false;
</script>

<a
	on:mouseleave={() => (hover = false)}
	on:mouseover={() => (hover = true)}
	href={url}
	target="_blank"
	class="flex flex-col"
>
	<svelte:component this={svgIcon} />

	{#if hover}
		<span transition:fade class="absolute mt-24 w-20 bg-gray-200 h-1" />
	{/if}
</a>
