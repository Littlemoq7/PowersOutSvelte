<script lang="ts">
	import '@fontsource-variable/oswald/index.css';
	import '@fontsource-variable/work-sans/index.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import NavigationLink from '$lib/components/navigationLink.svelte';
	import NavigationBarIcon from '$lib/components/navigationBarIcon.svelte';
	import { page } from '$app/state';
	import { socials } from '$lib/socials';

	let { children } = $props();
	let elementScrollTop = $state(0);
	let menuOpen = $state(false);

	let isHome = $derived(page.url.pathname === '/');
	let scrolled = $derived(elementScrollTop > 50 || !isHome || menuOpen);

	function closeMenu() {
		menuOpen = false;
	}

	const navLinks = [
		{ title: 'Home', linkText: '' },
		{ title: 'About', linkText: 'about' },
		{ title: 'Gallery', linkText: 'gallery' },
		{ title: 'Discography', linkText: 'discography' },
		{ title: 'Contact', linkText: 'contact' }
	];
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<svelte:window bind:scrollY={elementScrollTop} />
<header class="w-full top-0 fixed z-10000 border-b transition-colors duration-500 {scrolled ? 'bg-po border-po-line' : 'border-white/0'}">
	<div class="relative flex items-center h-20 justify-center md:justify-between w-full max-w-7xl mx-auto px-2">
		<!-- Hamburger button (mobile only) -->
		<button
			class="absolute left-2 top-1/2 -translate-y-1/2 flex md:hidden flex-col justify-center gap-1.5 w-10 h-10 p-2"
			aria-label="Open menu"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = true)}
		>
			<span class="block h-0.5 w-full bg-white rounded"></span>
			<span class="block h-0.5 w-full bg-white rounded"></span>
			<span class="block h-0.5 w-full bg-white rounded"></span>
		</button>
		<a href="/" class="text-white font-semibold text-3xl md:text-5xl text-nowrap font-display transition-opacity duration-500" class:opacity-0={elementScrollTop < 50 && isHome} onclick={closeMenu}>
			Power's Out
		</a>
		<!-- Desktop nav links -->
		<div class="hidden md:flex flex-row">
			{#each navLinks as { title, linkText }}
				<NavigationLink {title} {linkText} onclick={closeMenu}></NavigationLink>
			{/each}
		</div>
	</div>
</header>

<!-- Mobile slide-out drawer -->
<div
	class="fixed inset-0 z-10001 md:hidden transition-opacity duration-500"
	class:opacity-0={!menuOpen}
	class:pointer-events-none={!menuOpen}
	class:opacity-100={menuOpen}
>
	<!-- Panel -->
	<nav
		class="absolute top-0 left-0 h-full w-full bg-po flex flex-col p-6"
	>
		<div class="flex justify-between items-center mb-6">
			<span class="text-white font-semibold text-2xl font-display">Power's Out</span>
			<button class="text-white text-3xl leading-none px-2" aria-label="Close menu" onclick={closeMenu}>&times;</button>
		</div>
		<div class="flex flex-col gap-2 text-xl">
			{#each navLinks as { title, linkText }}
				<NavigationLink {title} {linkText} onclick={closeMenu}></NavigationLink>
			{/each}
		</div>
		<div class="flex flex-row gap-2 mt-8 mx-auto">
			{#each socials as { link, path }}
				<NavigationBarIcon {link} {path} size={'36px'}></NavigationBarIcon>
			{/each}
		</div>
	</nav>
</div>

{@render children()}

<footer class="w-full bg-po border-t border-po-line">
	<div class="max-w-7xl mx-auto flex flex-col items-center gap-2 p-2">
		<div class="flex flex-row justify-center">
			{#each socials as { link, path }}
				<NavigationBarIcon {link} {path} size={'28px'}></NavigationBarIcon>
			{/each}
		</div>
		<div class="text-white text-center text-sm font-display">Power's Out Records</div>
	</div>
</footer>