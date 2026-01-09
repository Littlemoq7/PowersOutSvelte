<script lang="ts">
    import { page } from '$app/state';
    let { title, linkText } = $props();
</script>
<a href="/{linkText}" style="text-decoration: none">
    <div class="p-3 h-9 pb-1 text-white min-w-fit w-full flex justify-between text-nowrap text-sm rounded-md text-left hover:font-bold">
        {title}
    </div>
    {#if page.url.pathname == "/" + linkText}
    <div class="h-px bg-white flex mx-3">

    </div>
    {/if}
</a>