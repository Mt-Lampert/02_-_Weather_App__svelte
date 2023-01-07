<script lang="ts">
	import { getSVGfor } from './helpers';

	export let place: string = 'London';
	export let temperature: string = '10';
	export let sky: string = 'cloudy';

	$: skyImage = 'images/' + getSVGfor(sky);
</script>

<div class="center">
	<h1 class="has-text-centered">
		<img src={skyImage} alt="Sky Clipart" width="225" />
	</h1>
	<h1 class="title has-text-centered mt-5">{place}</h1>
	<h2 class="title has-text-centered">{temperature}&deg;C</h2>
</div>

<style lang="scss">
</style>
