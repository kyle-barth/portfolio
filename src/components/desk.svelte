<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	import * as THREE from 'three';
	import { GLTFLoader } from '../GLTFLoader';
	import oc from 'three-orbit-controls';

	import { slideL } from '../animations/slide';
	import Divider from './divider.svelte';

	import Lightbulb from '../icons/lightbuld.svg.svelte';

	let el: HTMLCanvasElement;
	export let loaded: boolean;

	let genLighting = (str?: string) => {};
	let resetControls = () => {};

	onMount(() => {
		const loader = new GLTFLoader();
		const scene = new THREE.Scene();

		let renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });

		const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
		camera.position.set(-55, 25, 55);
		const OrbitControls = oc(THREE);
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.maxDistance = 125;
		controls.autoRotate = true;
		controls.enableRotate = true;
		controls.enablePan = false;
		controls.enableZoom = true;

		resetControls = () => {
			controls.reset();
		};

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
			const randomIntensity: number = Math.ceil(Math.random() * 10);
			const pointlight = new THREE.PointLight(`#${randomColor}`, randomIntensity, 100);
			pointlight.position.set(0, 50, 0);
			scene.add(pointlight);
		};

		loader.load(
			'/desk.gltf',
			// called when the resource is loaded
			(gltf) => {
				loaded = true;

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

				window.addEventListener('resize', resize);
			},
			// called while loading is progressing
			(xhr) => {},
			// called when loading has errors
			(error) => {}
		);
	});

	let delay: boolean = false;
	$: {
		if (loaded) {
			setTimeout(() => {
				delay = true;
			}, 750);
		}
	}
</script>

<div class="absolute overflow-hidden">
	<canvas
		class={loaded
			? 'canvas sm:translate-x-[20%] scale-100 opacity-100'
			: 'canvas sm:translate-x-[20%] scale-0 opacity-0'}
		bind:this={el}
	/>
</div>

{#if delay}
	<div in:fly={slideL} class="p-5 sm:left-1/2 sm:p-10 absolute flex items-center">
		<button
			on:click={() => genLighting()}
			class="text-gray-400 font-mono cursor-pointer focus:outline-none flex items-center hover:underline"
		>
			randomise lighting
			<Lightbulb />
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

<style lang="postcss">
	.canvas {
		@apply transform transition-all duration-700;
	}
</style>
