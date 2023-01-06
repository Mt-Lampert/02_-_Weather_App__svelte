<script lang="ts">
	import { getSVGfor } from './helpers';

	export let place: string = 'London';
	export let temperature: string = '10';
	export let sky: string = 'cloudy';

	$: skyImage = 'images/' + getSVGfor(sky);
</script>

<div class="center">
	<p>
		<img src={skyImage} alt="Sky Clipart" />
	</p>
	<h1 class="title">{place}</h1>
	<h2 class="subtitle">{temperature}</h2>
</div>
