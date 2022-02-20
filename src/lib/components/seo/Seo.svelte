<script lang="ts">
	import { browser } from '$app/env';
	import { page } from '$app/stores';

	let title = '';
	$: {
		if (browser) {
			const pathname = $page.url.pathname.replace('/', '');
			title = pathname ? '| ' + pathname : '';
		}
	}
</script>

<svelte:head>
	<meta name="description" content="Kyle Barth - Web Developer - Portfoilio website." />
	<title>kyle-barth {title}</title>
</svelte:head>
