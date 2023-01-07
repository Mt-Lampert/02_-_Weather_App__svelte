<script lang="ts">
	import Center from '$lib/center.svelte';
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

<section class="top section is-flex is-justify-content-center">
	<form on:submit|preventDefault={lookup}>
		<div class="field is-flex">
			<div class="control">
				<input class="input" name="place" type="text" placeholder="The place" bind:value={place} />
			</div>
			<div><button class="button">Lookup</button></div>
		</div>
	</form>
</section>

<section class="section center is-flex is-justify-content-center">
	{#if myState.state === 'success'}
		<Center
			place={myState.payload.place}
			temperature={myState.payload.temperature}
			sky={myState.payload.sky}
		/>
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
