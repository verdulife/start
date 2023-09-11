<script>
	import { metadata } from '$lib/metadata';
	import Meta from '$components/Meta.svelte';

	export let data;
	const { origin } = data;
</script>

<Meta {metadata} {origin} />

<main class="col">
	<h1>Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://kit.svelte.dev" rel="no-referrer">kit.svelte.dev</a> to read the documentation
	</p>

	<footer class="row">
		<input type="text" />
		<button>SEND</button>
	</footer>
</main>

<style lang="postcss">
	main {
		gap: 2em;
		background-color: var(--base-200);
		padding: 2em;

		@media (--dark) {
			background-color: var(--base-700);
		}
	}

	footer {
		gap: 0.5em;
	}
</style>
