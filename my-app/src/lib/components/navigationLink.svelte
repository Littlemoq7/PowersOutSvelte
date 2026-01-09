<script lang="ts">
    let { title, linkText } = $props();
</script>
<a href="/{linkText}" style="text-decoration: none">
    <div class="mb-2 py-1.5 pl-4 pr-2 h-9 text-black min-w-fit w-full flex justify-between text-nowrap rounded-md text-left hover:bg-[#dfdfdf] group" >
        {title}
    </div>
</a>