<script>
	let questions = [
		{ id: 1, text: `where did you  go to school?` },
		{ id: 2, text: `What is your mothers name?` },
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with google`
		}
	];

	let selected = { id: 5, text: `aaaa` };
	let answer = '';

	function handleSubmit() {
		alert(`answerd question ${selected.id} (${selected.text}) with "${answer}"`);
	}
</script>

<h2>Insecurity questions</h2>

<form on:submit|preventDefault={handleSubmit}>
	<select bind:value={selected} on:change={() => (answer = '')}>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer} />

	<button disabled={!answer} type="submit"> Submit</button>
</form>

<p>selected question {selected ? selected.id : '[waiting...]'}</p>
