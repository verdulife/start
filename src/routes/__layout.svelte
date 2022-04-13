<script context="module">
	export async function load({ url }) {
		return {
			props: { url }
		};
	}
</script>

<script lang="ts">
	import 'verdu/fonts/circular.css';
	import 'verdu/fonts/operator.css';
	import Transition from '$lib/components/Transition.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import { DarkTheme } from '$lib/store';
	import { onMount } from 'svelte';

	console.log(`Dark theme is: ${$DarkTheme ? 'enabled' : 'disabled'}`);

	export let url: string;

	onMount(() => {
		const root = document.querySelector(':root') as HTMLElement;
		console.log(getComputedStyle(root).getPropertyValue('--bg'));

		setTimeout(() => {
			root.style.setProperty('--bg', '#111');
			root.style.setProperty('--base', '#eee');
		}, 3000);
	});
</script>

<main>
	<div class="scroll">
		<Nav />

		<Transition {url}>
			<slot />
		</Transition>
	</div>
</main>

<style lang="scss">
	:global {
		@import '../routes/global';
		@import 'verdu/verdu.scss';
	}

	main {
		background: var(--bg);
		color: var(--base);
		transition: 200ms;
	}
</style>
