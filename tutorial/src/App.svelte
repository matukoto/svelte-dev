<script>
	let count = 0;
	$: console.log('error is ${count}');

	$: {
		console.log('count is ${count}');
		console.log('count changed');
	}

	$: if (count >= 10) {
	}
</script>
