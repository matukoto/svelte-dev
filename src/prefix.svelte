<script>
	let n = 1;
	let stars;

	// 関数呼び出し
	$: console.log('n が ${n} に更新された');
	// 複数の文を書くにはブロックに
	$: {
		const newStars = [];
		for (let i = 0; i < n; i++) {
			newStars.push(i % 2 === 0 ? '☆' : '');
		}
		stars = newStars;
	}
</script>

<div>
	{#each stars as star}{star}{/each}
</div>
<div>
	<button on:click={() => (n = n - 1)} disabled={n <= 1}> ☆を減らす </button>
	<button on:click={() => (n = n + 1)}> ☆を増やす </button>
</div>
