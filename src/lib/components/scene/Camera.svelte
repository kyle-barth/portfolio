<script lang="ts">
	import * as SC from 'svelte-cubed';
	import { camera } from '$lib/store/camera';
</script>

<SC.PerspectiveCamera position={$camera} target={[0]} />
<SC.OrbitControls enableZoom={true} autoRotate={true} maxDistance={5} minDistance={3.6} />
