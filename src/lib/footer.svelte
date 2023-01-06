<script lang="ts">
	import type { Weather } from '$lib/myTypes';
	import { getSVGfor } from './helpers';
	import FooterCard from './footer-card.svelte';

	export let data: Weather;
	$: skyImage = getSVGfor(data.sky);
</script>

<div class="footer">
	<FooterCard desc={data.sky} image={skyImage} />
</div>
