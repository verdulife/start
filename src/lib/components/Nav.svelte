<script lang="ts">
	console.log('Navbar works!');
</script>

<nav class="row fcenter xfill">
	<img src="/favicon.svg" alt="Logo" />
</nav>

<style lang="scss">
	nav {
		background: $white;
		border-bottom: 1px solid $border;
		padding: 20px;
		
		@media (prefers-color-scheme: dark) {
			border-bottom: 1px solid $pri;
			background: $black;
		}

		img {
			height: 30px;
		}
	}
</style>
