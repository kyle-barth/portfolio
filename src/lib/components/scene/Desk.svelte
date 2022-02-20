<script lang="ts">
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import * as SC from 'svelte-cubed';
	import { deskLoaded } from '$lib/store/deskLoaded';

	const gltfLoader = new GLTFLoader();
	const scene = new THREE.Scene();

	gltfLoader.load('desk.gltf', (gltf) => {
		scene.add(gltf.scene);
		deskLoaded.set(true);
	});
</script>

<SC.Primitive object={scene} scale={0.05} />
