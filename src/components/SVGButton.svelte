<script lang="ts">
	export let size: number = 20;
	export let svgIcon: any;
	export let url: string;
</script>

<a href={url} target="_blank">
	<svelte:component this={svgIcon} {size} />
</a>
