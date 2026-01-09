<script lang="ts">
    import { page } from '$app/state';
    let { title, linkText } = $props();
</script>
<a href="/{linkText}">
    <div class="p-1 pb-px mx-1 h-9 text-white min-w-fit w-full flex justify-between text-nowrap  rounded-md text-left hover:font-bold">
        {title}
    </div>
    {#if page.url.pathname == "/" + linkText}
    <div class="h-px pt-0 mt-0 bg-white flex mx-3">

    </div>
    {/if}
</a>