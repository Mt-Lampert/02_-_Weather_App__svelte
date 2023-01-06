<script lang="ts">
	export let desc = 'sunny';
	export let image = 'sunny.svg';

	$: mySVG = 'images/' + image;
</script>

<div class="footer-card">
	<p><img src={mySVG} alt="weather symbol" width="50" /></p>
	<p>{desc}</p>
</div>

<style lang="scss">
	.footer-card {
		display: flex;
		flex-direction: column;
		width: 100px;
		p {
			text-align: center;
		}
	}
</style>
