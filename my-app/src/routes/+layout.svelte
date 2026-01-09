<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavigationLink from '$lib/components/navigationLink.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<header>
	<NavigationLink title="Home" linkText=""></NavigationLink>
	<NavigationLink title="About" linkText="about"></NavigationLink>
	<NavigationLink title="Gallery" linkText="gallery"></NavigationLink>
	<NavigationLink title="Discography" linkText="discography"></NavigationLink>
	<NavigationLink title="Contact" linkText="contact"></NavigationLink>
</header>
{@render children()}
