<script lang="ts">
	export let desc = 'sunny';
	export let image = 'sunny.svg';

	$: mySVG = 'images/' + image;
</script>

<div class="footer-card">
	<figure>
		<img src={mySVG} alt="weather symbol" />
	</figure>
	<p>{desc}</p>
</div>

<style lang="scss">
	.footer-card {
		figure {
			width: 100px;
		}
	}
</style>
