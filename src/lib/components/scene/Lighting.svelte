<script lang="ts">
	import * as SC from 'svelte-cubed';
	import { light } from '$lib/store/light';
</script>

<SC.AmbientLight intensity={0.5} />
<SC.PointLight intensity={$light.intensity} position={[-5, 5, 5]} color={$light.color} />
