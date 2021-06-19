<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let el: HTMLCanvasElement;

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			50,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		const geometry = new THREE.TorusGeometry(2, 1, 16, 100);
		const material = new THREE.MeshBasicMaterial({ color: 'lightblue', wireframe: true });
		const donut = new THREE.Mesh(geometry, material);
		let renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });

		scene.add(donut);

		camera.position.z = 10;

		const animate = () => {
			requestAnimationFrame(animate);
			donut.rotation.x += 0.01;
			donut.rotation.y += 0.01;
			renderer.render(scene, camera);
		};

		const resize = () => {
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
		};

		resize();
		animate();

		window.addEventListener('resize', resize);
	});
</script>

<canvas class="absolute z-0" bind:this={el} />

<h1 class="absolute text-gray-200 text-6xl font-extrabold p-10 z-10">Hi.</h1>
