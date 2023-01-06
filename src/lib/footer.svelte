<script lang="ts">
	import type { Weather } from '$lib/myTypes';
	import { getSVGfor } from './helpers';
	import FooterCard from './footer-card.svelte';

	export let data: Weather;
	$: skyImage = getSVGfor(data.sky);
</script>

<div class="footer">
	<FooterCard desc={data.sky} image={skyImage} />
	<FooterCard desc={data.air_pressure.toString()} image="barometer.svg" />
	<FooterCard desc={data.humidity.toString()} image="humidity.svg" />
	<FooterCard desc={data.wind.toString()} image="wind.svg" />
</div>

<style lang="scss">
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
</style>
