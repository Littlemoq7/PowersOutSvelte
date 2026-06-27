<script>
  let { text, href } = $props();
</script>

<a
  class="font-display block text-center text-2xl lg:text-3xl font-semibold text-white
    bg-[#259185]/70 hover:bg-[#259185]
    py-4 px-7 rounded-[50px] transition-colors max-sm:w-full"
  href={href}
>
  {text}
</a>
