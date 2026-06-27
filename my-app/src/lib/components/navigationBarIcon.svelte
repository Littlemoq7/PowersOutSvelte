<script lang="ts">
    let { path, link, size = '1.75rem' } = $props();
</script>
<div class="flex items-center m-1">
    <a
        class="block transition-transform duration-200 hover:scale-110"
        style="width: {size}; height: {size};"
        href={link}
        target="_blank"
        aria-label="Spotify"
    >
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#ffffff" d={path} />
        </svg>
    </a>
</div>