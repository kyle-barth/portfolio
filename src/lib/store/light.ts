import { writable } from 'svelte/store';

const initValue = { color: 'gray', intensity: 2 };

const genRandColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);
const genRandIntensity = () => Math.ceil(Math.random() * 3) ?? 1;

function lightStore() {
	const { set, subscribe } = writable(initValue);

	return {
		subscribe,
		set,
		reset: () => set(initValue),
		rand: () => {
			set({
				color: genRandColor(),
				intensity: genRandIntensity()
			});
		}
	};
}

export const light = lightStore();
