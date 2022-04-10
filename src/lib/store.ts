import { browser } from '$app/env';
import { writable } from 'svelte/store';

const defaultTheme = 'dark';

export const ThemeStore = writable(
	(browser && JSON.parse(localStorage.getItem('ThemeStore'))) || defaultTheme
);

ThemeStore.subscribe((val) => browser && (localStorage.ThemeStore = JSON.stringify(val)));
