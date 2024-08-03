<script>
	let count = 0;
	$: doubled = count * 2;
	const increment = () => {
		count += 1;
	};
</script>

<button on:click={increment}>
	count is {count}
</button>

<p>{count} doubled is {doubled}</p>
