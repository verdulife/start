<script>
	export let src = null;
	export let width = null;
	export let height = null;
	export let alt = null;
</script>

<img {width} {height} {src} {alt} loading="lazy" decoding="async" />
