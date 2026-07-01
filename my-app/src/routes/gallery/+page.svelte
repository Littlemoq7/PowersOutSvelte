<script>
  import { fadeInOnLoad } from "$lib/actions/fadeInOnLoad.js";

  // Photos live in static/images/home_images/ as resized WebP (~1600px, q80).
  // Full-resolution originals are kept in my-app/photo-originals/ (not deployed).
  // Absolute paths so they resolve correctly regardless of the current route.
  // width/height are the real pixel dimensions — they reserve aspect-ratio space
  // so the masonry layout doesn't jump as images load in.
  const images = [
    { src: "/images/home_images/full_band1.webp", alt: "Power's Out full band", w: 1600, h: 1200 },
    { src: "/images/home_images/full_band2.webp", alt: "Power's Out full band", w: 1600, h: 908 },
    { src: "/images/home_images/basement.webp", alt: "Band in the basement", w: 1600, h: 906 },
    { src: "/images/home_images/guitar_night_og.webp", alt: "Guitar at night", w: 1600, h: 1067 },
    { src: "/images/home_images/picnic_full.webp", alt: "Band picnic", w: 1600, h: 1200 },
    { src: "/images/home_images/picnic1.webp", alt: "Picnic", w: 1600, h: 1200 },
    { src: "/images/home_images/picnic_group.webp", alt: "Picnic group", w: 1600, h: 1200 },
    { src: "/images/home_images/july_fourth.webp", alt: "Fourth of July", w: 1600, h: 1320 },
    { src: "/images/home_images/moqmill1.webp", alt: "Moq and Mill", w: 1200, h: 1600 },
    { src: "/images/home_images/moqmill2.webp", alt: "Moq and Mill", w: 1200, h: 1600 },
    { src: "/images/home_images/millmoq_katherin1.webp", alt: "Mill, Moq and Katherin", w: 1600, h: 1067 },
    { src: "/images/home_images/millmoq_katherin2.webp", alt: "Mill, Moq and Katherin", w: 1600, h: 1067 },
    { src: "/images/home_images/millmoq_katherin3.webp", alt: "Mill, Moq and Katherin", w: 1600, h: 1067 },
    { src: "/images/home_images/millmoq_rezz_group.webp", alt: "Group with Rezz", w: 1200, h: 1600 },
    { src: "/images/home_images/moq_katherin.webp", alt: "Moq and Katherin", w: 1600, h: 1067 },
    { src: "/images/home_images/katherin.webp", alt: "Katherin", w: 1067, h: 1600 },
    { src: "/images/home_images/katherin_and_rezz.webp", alt: "Katherin and Rezz", w: 1200, h: 1600 },
    { src: "/images/home_images/rezzy.webp", alt: "Rezz", w: 1600, h: 1067 },
    { src: "/images/home_images/connor.webp", alt: "Connor", w: 1600, h: 1067 },
    { src: "/images/home_images/connor_and_meghan.webp", alt: "Connor and Meghan", w: 1200, h: 1600 }
  ];
</script>

<div class="pt-20 bg-[#a8d4cf] text-white min-h-screen">
  <div class="w-[90%] max-w-300 m-auto bg-[#259185] p-4 pt-0 mt-10 rounded-t">
    <h1 class="text-white text-3xl font-bold w-full text-center py-6">
      GALLERY
    </h1>
    <div class="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {#each images as image}
        <img
          src={image.src}
          alt={image.alt}
          width={image.w}
          height={image.h}
          loading="lazy"
          decoding="async"
          use:fadeInOnLoad
          class="mb-4 w-full h-auto rounded-xl break-inside-avoid transition-transform duration-200 ease-in-out hover:scale-101"
        />
      {/each}
    </div>
  </div>
</div>
