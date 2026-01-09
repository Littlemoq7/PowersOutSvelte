<script>
    let { text, picture, type} = $props();
  </script>
  
  <div class="flex w-fit items-center p-4 gap-5 ">
    <a href="" target="_blank" class="block  text-xl font-normal font-sans">
      <img src={picture} alt={text} class="rounded-xl p-5 pb-0 w-full h-full transition-transform duration-200 ease-in-out hover:scale-101">
        {text} {type}
    </a>
  </div>