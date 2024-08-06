<script>
	import { getRandomNumber } from './lib/utils.js';

	let promise = getRandomNumber();
	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}> generate random number</button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>the number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
