<script>
  // Photos live in static/images/home_images/ as resized WebP (~1600px, q80).
  // Full-resolution originals are kept in my-app/photo-originals/ (not deployed).
  // Absolute paths so they resolve correctly regardless of the current route.
  const images = [
    { src: "/images/home_images/full_band1.webp", alt: "Power's Out full band" },
    { src: "/images/home_images/full_band2.webp", alt: "Power's Out full band" },
    { src: "/images/home_images/basement.webp", alt: "Band in the basement" },
    { src: "/images/home_images/guitar_night_og.webp", alt: "Guitar at night" },
    { src: "/images/home_images/picnic_full.webp", alt: "Band picnic" },
    { src: "/images/home_images/picnic1.webp", alt: "Picnic" },
    { src: "/images/home_images/picnic_group.webp", alt: "Picnic group" },
    { src: "/images/home_images/july_fourth.webp", alt: "Fourth of July" },
    { src: "/images/home_images/moqmill1.webp", alt: "Moq and Mill" },
    { src: "/images/home_images/moqmill2.webp", alt: "Moq and Mill" },
    { src: "/images/home_images/millmoq_katherin1.webp", alt: "Mill, Moq and Katherin" },
    { src: "/images/home_images/millmoq_katherin2.webp", alt: "Mill, Moq and Katherin" },
    { src: "/images/home_images/millmoq_katherin3.webp", alt: "Mill, Moq and Katherin" },
    { src: "/images/home_images/millmoq_rezz_group.webp", alt: "Group with Rezz" },
    { src: "/images/home_images/moq_katherin.webp", alt: "Moq and Katherin" },
    { src: "/images/home_images/katherin.webp", alt: "Katherin" },
    { src: "/images/home_images/katherin_and_rezz.webp", alt: "Katherin and Rezz" },
    { src: "/images/home_images/rezzy.webp", alt: "Rezz" },
    { src: "/images/home_images/connor.webp", alt: "Connor" },
    { src: "/images/home_images/connor_and_meghan.webp", alt: "Connor and Meghan" }
  ];
</script>

<div class="pt-20 bg-[#a8d4cf] text-white min-h-screen">
  <div class="max-w-300 m-auto bg-[#259185] p-4 pt-0">
    <h1 class="text-white text-3xl font-bold font-sans w-full text-center py-6">
      GALLERY
    </h1>
    <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {#each images as image}
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          class="mb-4 w-full rounded-xl break-inside-avoid transition-transform duration-200 ease-in-out hover:scale-101"
        />
      {/each}
    </div>
  </div>
</div>
<div class="text-white text-center bg-[#a8d4cf] py-2">
  Power's Out Records
</div>
