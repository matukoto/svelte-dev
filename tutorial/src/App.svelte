<script>
	import Inner from './lib/Inner.svelte';
	function handleMessage(event) {
		alert(event.detail.text);
	}
</script>

<Inner on:message={handleMessage} />
