<script lang="ts">
	import { message } from '$lib/utils';

	console.log(message);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>{message}</h1>

<style lang="scss">
	h1 {
		color: $pri;
	}
</style>
