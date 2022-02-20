<script lang="ts">
	import { page } from '$app/stores';

	let path;
	$: {
		path = $page.url.pathname.replace('/', '');
	}
</script>

<svelte:head>
	<meta name="description" content="Kyle Barth - Web Developer - Portfoilio website." />
	<title>kyle-barth {path && `| ${path}`}</title>
</svelte:head>
