<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import type { CompState } from './myTypes';

	import { getData } from './api_data';
	import { fly } from 'svelte/transition';
	import { defaultCompState } from '$lib/helpers';

	function lookup() {
		getData(place).then((theState) => (myState = theState));
	}

	let myState: CompState = {
		state: 'idle',
		payload: defaultCompState,
		error: ''
	};

	let place = '';
</script>

<section class="top section is-flex">
	<div class="field">
		<div class="control">
			<input class="input" name="place" type="text" placeholder="The place" bind:value={place} />
		</div>
	</div>
	<div><button class="button" on:click={lookup}>Lookup</button></div>
</section>

<section class="section center">
	{#if myState.state === 'success'}
		<h1 class="title">{myState.payload.place}</h1>
		<h2 class="subtitle">{myState.payload.temperature}</h2>
		<p><b>Sky:</b>{myState.payload.sky}</p>
	{:else if myState.state === 'fail'}
		<div class="notification is-danger" transition:fly={{ x: 100, duration: 1500 }}>
			{myState.error}
		</div>
	{/if}
</section>

{#if myState.state === 'success'}
	<section class="section footer">
		<Footer data={myState.payload} />
	</section>
{/if}

<style lang="scss">
	.footer {
		margin-top: 5em;
	}
</style>
