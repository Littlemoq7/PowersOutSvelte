<script>
  let { name, picture, igLink, instrument, bio } = $props();
</script>

<div class="flex justify-evenly items-center p-4 gap-5">
  <a href={igLink} target="_blank" class="block max-w-1/3">
    <img src={picture} alt={name} class="rounded-4xl p-5 w-full shadow-[2px_2px_5px_1px_rgba(0,0,0,0.4)] transition-transform 
      duration-200 ease-in-out hover:scale-101 hover:shadow-[2px_2px_5px_3px_rgba(0,0,0,0.4)] bg-[#2A9D8F]">
  </a>
  <div class="flex-col items-center text-center w-2/5">
    <div class="bg-[#2A9D8F] rounded-xl py-2.5 px-4">
      <h2 class="text-3xl">{name}</h2>
      <h3 class="text-xl py-2.5">{instrument}</h3>
      <p>{bio}</p>
    </div>
  </div>
</div>