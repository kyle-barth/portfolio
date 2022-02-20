import { writable } from 'svelte/store';

const initCameraPos = [0, 1.5, 6];

function cameraStore() {
	const { set, subscribe } = writable(initCameraPos);

	return {
		subscribe,
		set,
		reset: () => {
			set(initCameraPos);
		}
	};
}

export const camera = cameraStore();
