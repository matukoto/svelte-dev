<script>
	let count = 0;
	function increment() {
		count += 1;
	}
</script>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
<!-- # はブロックの開始タグ -->
{#if count > 10}
	<p>{count} is greater than 10</p>
	<!-- :はブロックの継続タグ -->
{:else}
	<p>{count} is between 0 and 10</p>
	<!-- /はブロックの終了タグ -->
{/if}
