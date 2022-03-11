<script lang="ts">
	import 'verdu/fonts/circular.css';
	import 'verdu/fonts/operator.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<main>
	<Nav />
	<slot />
</main>

<style lang="scss">
	:global {
		@import 'verdu/_reset.scss';
		@import 'verdu/verdu.scss';
	}
</style>
