<script lang="ts">
	import { getSVGfor } from './helpers';

	export let desc = 'sunny';
	console.log(`inside the footer card the sky is ${desc}`);

	$: mySVG = 'images/' + getSVGfor(desc);
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
