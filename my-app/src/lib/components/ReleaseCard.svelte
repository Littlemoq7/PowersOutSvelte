<script>
  let { text, picture, year, link } = $props();
</script>
<div class="bg-po-surface border border-po-line duration-300 ease-in-out hover:scale-102">
  <a
    href={link}
    target="_blank"
    class="flex flex-col items-center w-80 text-center text-white no-underline"
  >
    <img
      src={picture}
      alt={text}
      class="w-full aspect-square object-cover transition-transform border-b"
    />
    <p class="mt-3 text-base font-normal font-sans">{text}</p>
    <p class="mb-3 text-sm font-light font-sans opacity-80">{year}</p>
  </a>  
</div>

