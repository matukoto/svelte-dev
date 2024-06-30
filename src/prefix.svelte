<script>
	let n = 1;
	$: if (n > 10) {
		alert('多すぎ。10以内にして');
		n = 10;
	}
</script>

<div>
	数量: {n}
</div>
<div>
	<button on:click={() => (n = n - 1)} disabled={n <= 1}> ☆を減らす </button>
	<button on:click={() => (n = n + 1)}> ☆を増やす </button>
</div>
