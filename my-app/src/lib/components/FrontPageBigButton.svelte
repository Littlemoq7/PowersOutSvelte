<script>
  let { text, href } = $props();
</script>

<div class="flex">
  <a class="lg:text-2xl md:text-2xl text-xl font-semibold text-white bg-[#259185]/70 hover:bg-[#259185]
    lg:pt-5 lg:pb-5 lg:pr-9 lg:pl-9 md:pt-4 md:pb-4 md:pr-7 md:pl-7 pt-3 pb-3 pr-5 pl-5
    rounded-[50px] transition-colors z-1" href={href} aria-label="Music">
    { text }
  </a>
</div>