<script>
	let numbers = [1, 2, 3, 4];
	function addNumber() {
		numbers.push(numbers.length + 1);
		// svelte5 では push するだけで値が更新されるらしい
		numbers = numbers;
	}
	//

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}> Add a number </button>
