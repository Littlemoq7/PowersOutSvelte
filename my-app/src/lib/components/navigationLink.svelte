<script lang="ts">
    import { page } from '$app/state';
    let { title, linkText, onclick } = $props();
</script>
<a href="/{linkText}" {onclick}>
    <div class="pt-1 pb-px px-2 h-9 text-white text-xl w-full text-nowrap rounded-md hover:font-bold font-display">
        {title}
    </div>
    {#if page.url.pathname == "/" + linkText}
    <div class="h-0.5 bg-po-accent mx-2 rounded-full"></div>
    {/if}
</a>