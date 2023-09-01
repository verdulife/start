<script>
	import { metadata } from '$lib/metadata';
	import Meta from '$components/Meta.svelte';

	export let data;
	const { origin } = data;
</script>

<Meta {metadata} {origin} />

<main>
	<h1>Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://kit.svelte.dev" rel="no-referrer">kit.svelte.dev</a> to read the documentation
	</p>
</main>

<style lang="postcss">
	main {
		background-color: var(--base-200);
		padding: 2em;

		@media (--dark) {
			background-color: var(--base-700);
		}
	}
</style>
