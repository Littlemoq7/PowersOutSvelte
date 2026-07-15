<script>
  let { name, picture, igLink, instrument, bio, width, height } = $props();
</script>

<div class="flex flex-col md:flex-row items-center gap-6 max-w-4xl w-[95%] mx-auto bg-po-surface border border-white p-4">
  <a href={igLink} target="_blank" class="block w-full md:w-2/5 md:shrink-0">
    <img src={picture} alt={name} width={width} height={height} class="p-5 w-full h-auto transition-transform
      duration-200 ease-in-out hover:scale-101 bg-po border-white border">
  </a>
  <div class="w-full md:flex-1 text-center px-4 py-8">
    <h2 class="text-3xl">{name}</h2>
    <h3 class="text-xl py-2.5">{instrument}</h3>
    <p>{bio}</p>
  </div>
</div>