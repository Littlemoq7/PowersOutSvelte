<script lang="ts">
    let { path, link } = $props();
</script>
<div class="h-10 flex m-1">
    <a class="my-auto w-7 h-7 hover:w-8 hover:h-8" href={link} target="_blank" aria-label="Spotify">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#ffffff" d={path}/>
        </svg>
    </a>
</div>