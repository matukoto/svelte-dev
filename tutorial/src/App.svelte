<script>
	import src from './assets/svelte.svg';
	import Counter from './lib/Counter.svelte';
	let name = 'Svelte';
</script>

<h1>Hello {name.toUpperCase()}</h1>
<!-- src={src}と書けるが属性の名前と変数名が一致する場合、以下のように省略できる -->
<img {src} alt="{name} name" />
<Counter />
