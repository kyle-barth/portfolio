<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import * as THREE from 'three';
	import { GLTFLoader } from '../GLTFLoader';
	import oc from 'three-orbit-controls';

	import { slideL } from '../animations/slide';
	import Divider from './divider.svelte';

	let el: HTMLCanvasElement;
	export let loaded: boolean;

	let genLighting = (str?: string) => {};
	let resetControls = () => {};

	onMount(() => {
		const ambientlight = new THREE.AmbientLight(0x404040, 5);

		const clearLights = () => {
			scene.children
				.filter((o) => o.type !== 'Group')
				.forEach((o) => {
					scene.remove(o);
				});
		};

		genLighting = (str?: string) => {
			clearLights();

			if (str) {
				resetControls();
				scene.add(ambientlight);
				return;
			}

			const randomColor: string = Math.floor(Math.random() * 16777215).toString(16);
			const randomIntensity: number = Math.ceil(Math.random() * 5);
			const pointlight = new THREE.PointLight(`#${randomColor}`, randomIntensity, 100);
			pointlight.position.set(0, 50, 0);
			scene.add(pointlight);
		};

		const loader = new GLTFLoader();
		const scene = new THREE.Scene();

		let renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });

		const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.set(-55, 55, 55);
		const OrbitControls = oc(THREE);
		const controls = new OrbitControls(camera, renderer.domElement);
		resetControls = () => {
			controls.reset();
		};

		loader.load(
			'src/assets/desk.gltf',
			// called when the resource is loaded
			(gltf) => {
				setTimeout(() => {
					loaded = true;
				}, 750);

				genLighting('reset');
				scene.add(gltf.scene);

				const animate = () => {
					requestAnimationFrame(animate);
					controls.update();
					renderer.render(scene, camera);
				};

				const resize = () => {
					renderer.setSize(window.innerWidth, window.innerHeight);
					camera.aspect = window.innerWidth / window.innerHeight;
					camera.updateProjectionMatrix();
				};

				resize();
				animate();

				controls.autoRotate = true;
				// controls.enableRotate = false;
				// controls.enablePan = false;
				// controls.enableZoom = false;

				window.addEventListener('resize', resize);

				el.classList.add('opacity-100');
				el.classList.add('scale-100');
			},
			// called while loading is progressing
			(xhr) => {},
			// called when loading has errors
			(error) => {}
		);
	});
</script>

<div class="absolute overflow-hidden">
	<canvas
		class="transform translate-x-1/5 pt-10 transition-all duration-700 scale-0 opacity-0"
		bind:this={el}
	/>
</div>

{#if loaded}
	<div in:fly={slideL} class="absolute left-1/2 p-10 flex items-center">
		<button
			on:click={() => genLighting()}
			class="text-gray-400 font-mono cursor-pointer focus:outline-none flex items-center hover:underline"
		>
			randomise lighting
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8 pl-2"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
				/>
			</svg>
		</button>

		<Divider />

		<button
			on:click={() => genLighting('reset')}
			class="text-gray-400 font-mono cursor-pointer focus:outline-none hover:underline"
		>
			reset
		</button>
	</div>
{/if}
