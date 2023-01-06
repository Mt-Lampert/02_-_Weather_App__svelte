<script lang="ts">
	import type { Weather } from '$lib/myTypes';
	import FooterCard from './footer-card.svelte';

	export let data: Weather;
</script>

<FooterCard desc={data.sky} />
