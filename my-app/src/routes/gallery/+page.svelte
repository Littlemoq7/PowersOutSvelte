<script>
  // Photos live in static/images/home_images/ as resized WebP (~1600px, q80).
  // Full-resolution originals are kept in my-app/photo-originals/.
  // Absolute paths so they resolve correctly regardless of the current route.
  // width/height are the real pixel dimensions; the justified-rows layout below
  // uses their aspect ratio to size each image so rows fill the width edge-to-edge
  // while keeping the images in reading order (row by row, top to bottom).
  const images = [
    { src: "/images/home_images/band_nxt.webp", alt: "Power's Out at NXT", w: 1024, h: 768 },
    { src: "/images/home_images/band_wide_nxt.webp", alt: "Power's Out at NXT", w: 1600, h: 1200 },
    { src: "/images/home_images/band_blockparty.webp", alt: "Power's Out at the block party", w: 1024, h: 768 },
    { src: "/images/home_images/band_blockparty2.webp", alt: "Power's Out at the block party", w: 1182, h: 665 },
    { src: "/images/home_images/andrew_elliott_nxt.webp", alt: "Andrew and Elliott at NXT", w: 1200, h: 1600 },
    { src: "/images/home_images/katherin_connor_nxt.webp", alt: "Katherin and Connor at NXT", w: 768, h: 1024 },
    { src: "/images/home_images/full_band1.webp", alt: "Power's Out full band", w: 1600, h: 1200 },
    { src: "/images/home_images/full_band2.webp", alt: "Power's Out full band", w: 1600, h: 908 },
    { src: "/images/home_images/basement.webp", alt: "Band in the basement", w: 1600, h: 906 },
    { src: "/images/home_images/millmoq_katherin3.webp", alt: "Mill, Moq and Katherin", w: 1600, h: 1067 },
    { src: "/images/home_images/picnic_full.webp", alt: "Band picnic", w: 1600, h: 1200 },
    { src: "/images/home_images/picnic1.webp", alt: "Picnic", w: 1600, h: 1200 },
    { src: "/images/home_images/picnic_group.webp", alt: "Picnic group", w: 1600, h: 1200 },
    { src: "/images/home_images/july_fourth.webp", alt: "Fourth of July", w: 1600, h: 1320 },
    { src: "/images/home_images/moqmill1.webp", alt: "Moq and Mill", w: 1200, h: 1600 },
    { src: "/images/home_images/moqmill2.webp", alt: "Moq and Mill", w: 1200, h: 1600 },
    { src: "/images/home_images/millmoq_katherin1.webp", alt: "Mill, Moq and Katherin", w: 1600, h: 1067 },
    { src: "/images/home_images/millmoq_katherin2.webp", alt: "Mill, Moq and Katherin", w: 1600, h: 1067 },
    { src: "/images/home_images/millmoq_rezz_group.webp", alt: "Group with Rezz", w: 1200, h: 1600 },
    { src: "/images/home_images/moq_katherin.webp", alt: "Moq and Katherin", w: 1600, h: 1067 },
    { src: "/images/home_images/katherin.webp", alt: "Katherin", w: 1067, h: 1600 },
    { src: "/images/home_images/katherin_and_rezz.webp", alt: "Katherin and Rezz", w: 1200, h: 1600 },
    { src: "/images/home_images/rezzy.webp", alt: "Rezz", w: 1600, h: 1067 },
    { src: "/images/home_images/connor.webp", alt: "Connor", w: 1600, h: 1067 },
    { src: "/images/home_images/connor_and_meghan.webp", alt: "Connor and Meghan", w: 1200, h: 1600 },
    { src: "/images/home_images/guitar_night_og.webp", alt: "Guitar at night", w: 1600, h: 1067 },
  ];

  // Gap between images, in px (matches the Tailwind gap-4 used on the rows).
  const GAP = 16;

  // Measured width of the gallery column; drives how many images fit per row.
  // Falls back to a desktop-ish width for the first (server) render.
  let containerWidth = $state(0);

  // Pack images into rows in reading order. Each image is added to the current
  // row until, at the target height, the row would overflow the container; then
  // the row's height is solved so it fills the width exactly (edge-to-edge).
  // The final partial row keeps the target height and is left-aligned.
  /**
   * @param {typeof images} imgs
   * @param {number} width
   * @param {number} targetH
   */
  function buildRows(imgs, width, targetH) {
    const rows = [];
    /** @type {{ img: (typeof images)[number], index: number, ar: number }[]} */
    let row = [];
    let arSum = 0; // sum of aspect ratios (w/h) in the current row
    imgs.forEach((img, index) => {
      const ar = img.w / img.h;
      row.push({ img, index, ar });
      arSum += ar;
      const gaps = (row.length - 1) * GAP;
      if (arSum * targetH + gaps >= width) {
        rows.push({ height: (width - gaps) / arSum, stretch: true, items: row });
        row = [];
        arSum = 0;
      }
    });
    if (row.length) {
      const gaps = (row.length - 1) * GAP;
      if (arSum * targetH + gaps > width) {
        rows.push({ height: (width - gaps) / arSum, stretch: true, items: row });
      } else {
        rows.push({ height: targetH, stretch: false, items: row });
      }
    }
    return rows;
  }

  const rows = $derived.by(() => {
    const width = containerWidth || 1200;
    const targetH = width < 640 ? 300 : 400;
    return buildRows(images, width, targetH);
  });

  // Index of the lightbox image currently being viewed, or null when closed
  let selectedIndex = $state(/** @type {number | null} */ (null));

  /** @param {number} i */
  function open(i) {
    selectedIndex = i;
  }

  function close() {
    selectedIndex = null;
  }

  function prev() {
    if (selectedIndex === null) return;
    selectedIndex = (selectedIndex - 1 + images.length) % images.length;
  }

  function next() {
    if (selectedIndex === null) return;
    selectedIndex = (selectedIndex + 1) % images.length;
  }

  /** @param {KeyboardEvent} e */
  function onKeydown(e) {
    if (selectedIndex === null) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") prev();
    else if (e.key === "ArrowRight") next();
  }

  // Lock background scroll while the viewer is open
  $effect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = selectedIndex === null ? "" : "hidden";
    return () => (document.body.style.overflow = "");
  });
</script>

<svelte:window onkeydown={onKeydown} />

<div class="pt-20 bg-po-tint text-white min-h-screen">
  <div class="w-full bg-po-surface border-y border-po-line">
    <h1 class="text-white text-4xl font-bold w-full text-center pt-6">
      GALLERY
    </h1>
    <div class="mx-auto mt-3 mb-6 h-1 w-16 rounded-full bg-po-accent"></div>
  </div>
  <div class="max-w-7xl m-auto p-4">
    <div class="flex flex-col gap-4" bind:clientWidth={containerWidth}>
      {#each rows as row}
        <div class="flex gap-4" style="height: {row.height}px">
          {#each row.items as item (item.index)}
            <button
              type="button"
              onclick={() => open(item.index)}
              aria-label="View {item.img.alt}"
              class="block h-full cursor-pointer"
              style={row.stretch
                ? `flex: ${item.ar} 1 0; min-width: 0;`
                : `flex: 0 0 auto; width: ${item.ar * row.height}px;`}
            >
              <img
                src={item.img.src}
                alt={item.img.alt}
                width={item.img.w}
                height={item.img.h}
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover transition-all duration-200 ease-in-out hover:scale-103 border border-po-line/50"
              />
            </button>
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>

{#if selectedIndex !== null}
  <!-- Lightbox overlay, offset below the fixed h-20 (80px) nav bar so the
       image centers in the visible area and never slides under the nav.
       Clicking the dimmed backdrop closes the viewer. -->
  <div
    class="fixed top-20 right-0 bottom-0 left-0 z-50 flex flex-col items-center justify-center bg-black/70 p-4"
    onclick={(e) => {
      if (e.target === e.currentTarget) close();
    }}
    role="presentation"
  >
    <img
      src={images[selectedIndex].src}
      alt={images[selectedIndex].alt}
      class="max-w-[92vw] max-h-[72vh] object-contain shadow-2xl"
    />

    <div class="mt-6 flex items-center gap-8">
      <button
        type="button"
        onclick={prev}
        aria-label="Previous image"
        class="flex h-14 w-14 items-center justify-center rounded-full bg-po-surface text-3xl leading-none text-white shadow-lg transition duration-150 hover:scale-110 hover:bg-po-accent"
      >
        &#8249;
      </button>
      <button
        type="button"
        onclick={next}
        aria-label="Next image"
        class="flex h-14 w-14 items-center justify-center rounded-full bg-po-surface text-3xl leading-none text-white shadow-lg transition duration-150 hover:scale-110 hover:bg-po-accent"
      >
        &#8250;
      </button>
    </div>
  </div>
{/if}
