<script>
	import PackageInfo from './lib/PackageInfo.svelte';

	const pkg = {
		name: 'svelte',
		speed: 'blazing',
		version: 4,
		website: 'https://svelte.dev'
	};
</script>

<PackageInfo name={pkg.name} speed={pkg.speed} version={pkg.version} website={pkg.website} />
spread構文
<PackageInfo {...pkg} />
