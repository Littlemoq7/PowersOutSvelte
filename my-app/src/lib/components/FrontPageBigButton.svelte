<script>
  let { text, href } = $props();
</script>

<a
  class="font-display block text-center text-xl lg:text-2xl font-semibold text-white
    bg-[#259185]/70 hover:bg-[#259185]
    py-3 px-6 rounded-[50px] transition-colors max-sm:w-full"
  href={href}
>
  {text}
</a>
