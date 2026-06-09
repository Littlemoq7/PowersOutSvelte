<script>
  let { text, picture, year, link } = $props();
</script>

<a
  href={link}
  target="_blank"
  class="flex flex-col items-center w-80 text-center text-white no-underline"
>
  <img
    src={picture}
    alt={text}
    class="w-full aspect-square object-cover rounded shadow-lg
    transition-transform duration-200 ease-in-out hover:scale-105"
  />
  <p class="mt-3 text-base font-normal font-sans">{text}</p>
  <p class="text-sm font-light font-sans opacity-80">{year}</p>
</a>
