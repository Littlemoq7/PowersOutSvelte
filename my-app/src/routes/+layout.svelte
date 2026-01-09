<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavigationLink from '$lib/components/navigationLink.svelte';
  import NavigationBarIcon from '$lib/components/navigationBarIcon.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<header class="row bg-amber-700 h-20 justify-between w-full">
	<div class="flex flex-row left">
		<NavigationLink title="Home" linkText=""></NavigationLink>
		<NavigationLink title="About" linkText="about"></NavigationLink>
		<NavigationLink title="Gallery" linkText="gallery"></NavigationLink>
		<NavigationLink title="Discography" linkText="discography"></NavigationLink>
		<NavigationLink title="Contact" linkText="contact"></NavigationLink>
	</div>
	<div class="text-white font-semibold text-4xl center text-nowrap" >
		Power's Out
	</div>
	<div class="flex flex-row right">
		<NavigationBarIcon></NavigationBarIcon>
	</div>
</header>
{@render children()}

<style>
	.row {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
	}

	.center {
		justify-self: center;
	}

	.left {
		justify-self: end;
	}

	.right {
		justify-self: start;
	}
</style>