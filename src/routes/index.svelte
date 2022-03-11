<script lang="ts">
	import { message } from '$lib/scripts/utils';

	console.log(message);
</script>

<svelte:head>
	<title>{message}</title>
</svelte:head>

<div class="scroll">
	<div class="wrapper row jcenter fill">
		<h1>{message}</h1>
	</div>
</div>

<style lang="scss">
	.wrapper {
		background: $white;
		padding: 60px;

		@media (prefers-color-scheme: dark) {
			background: $black;
		}
	}

	h1 {
		color: $pri;

		@media (prefers-color-scheme: dark) {
			color: $sec;
		}
	}
</style>
