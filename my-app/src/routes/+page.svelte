<script>
  import FrontPageBigButton from "$lib/components/FrontPageBigButton.svelte";
  import { socials } from "$lib/socials";

  /* waveform tiled along the bottom of the intro panel, bars are laid out in 
    userSpaceOnUse pixels so they keep a constant size at any viewport width */
  const WAVE_HEIGHT = 72;
  const BAR_PITCH = 7;
  const BAR_WIDTH = 3;
  const BAR_COUNT = 96;
  const WAVE_TILE = BAR_COUNT * BAR_PITCH;

  const waveBars = Array.from({ length: BAR_COUNT }, (_, i) => {
    const wobble =
      Math.sin(i * 0.37) * 0.45 +
      Math.sin(i * 0.91 + 1.7) * 0.3 +
      Math.sin(i * 2.13 + 0.6) * 0.25;
    const height = Math.min(
      WAVE_HEIGHT,
      Math.max(5, Math.round(WAVE_HEIGHT * (0.14 + 0.4 * (wobble + 1))))
    );
    return { x: i * BAR_PITCH, height, accent: height > WAVE_HEIGHT * 0.8 };
  });
</script>

<!-- hero -->
<div class="w-full h-[65vh] overflow-hidden relative">
  <!-- wordmark over the video -->
  <div class="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 class="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-wide drop-shadow-lg">
      Power's Out
    </h1>
    <p class="mt-3 max-w-xl text-md md:text-lg text-white/90 drop-shadow-md">
      Est. in Hollis, NH
      <br>
      rock, pop, jam band
    </p>
    <div class="mt-8 max-sm:w-64 flex flex-row max-sm:flex-col items-center justify-center gap-4">
      <FrontPageBigButton text="Music" href="/discography" />
      <FrontPageBigButton text="Members" href="/about" />
      <FrontPageBigButton text="Photos" href="/gallery" />
    </div>
  </div>
  <div class="bg-black w-full h-full opacity-40 absolute pointer-events-none">
  </div>
  <video autoplay loop muted playsinline class="w-full h-full object-cover -z-50">
    <source src="images/short_band_clips.mp4" type="video/mp4">
  </video>
</div>

<!-- main page -->
<div class="flex-col h-full bg-po-tint text-white">
  <div class="relative isolate overflow-hidden w-full md:px-12 px-4 pb-10 p-8 text-center text-white bg-po-surface border-b border-po-line">
    <!-- flat graphic banding: broad teal-lightening bands, hard stops -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10
             bg-[repeating-linear-gradient(30deg,#ffffff14_0_240px,transparent_240px_480px)]"
    ></div>

    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      class="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-18 w-full"
    >
      <defs>
        <pattern id="po-waveform" width={WAVE_TILE} height={WAVE_HEIGHT} patternUnits="userSpaceOnUse">
          {#each waveBars as { x, height, accent }}
            <rect
              {x}
              y={WAVE_HEIGHT - height}
              width={BAR_WIDTH}
              {height}
              rx={BAR_WIDTH / 2}
              fill={accent ? 'var(--color-po-accent)' : '#ffffff'}
              opacity={accent ? 0.34 : 0.1}
            />
          {/each}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#po-waveform)" />
    </svg>

    <div class="inline-flex items-center gap-2.5 mb-4">
      <span class="w-5 h-0.5 bg-po-accent"></span>
      <span class="font-display text-xs tracking-[0.22em] uppercase text-white/85">Hollis, NH &middot; Since 2021</span>
      <span class="w-5 h-0.5 bg-po-accent"></span>
    </div>

    <h2 class="font-display font-bold text-2xl md:text-4xl tracking-tight uppercase mb-4">
      Originals, covers, jams, and more
    </h2>
    <div class="mx-auto mb-6 h-1 w-16 rounded-full bg-po-accent"></div>

    <p class="text-base md:text-lg leading-relaxed text-white/90 max-w-xl mx-auto mb-7">
      Playing originals and covers, rock, pop, blues, funk, jam band, and whatever else you may need. 
      Click the YouTube icon to watch some of our performances, and see the contact page for booking &amp; inquiries.
    </p>

    <div class="pb-8">
      <div class="font-display text-xs tracking-[0.2em] uppercase text-white/65 mb-4">Listen &amp; follow</div>
      <div class="flex justify-center gap-4">
        {#each socials as { link, path, viewBox }}
          <a
            aria-label=social-media-link
            href={link}
            target="_blank"
            rel="noopener"
            class="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border border-po-line/30
                  transition-all duration-200 hover:-translate-y-1 hover:bg-po-accent hover:border-po-accent"
          >
            <svg viewBox={viewBox} class="w-7 h-7 fill-white transition-colors group-hover:fill-white">
              <path d={path} />
            </svg>
          </a>
        {/each}
      </div>
    </div>
  </div>
  <div class="flex flex-col max-w-7xl w-[95%] mx-auto gap-12 py-12">
    <div class="w-full md:px-10 p-4 py-6 bg-po-surface border border-po-line">
      <div class="m-auto text-center pb-4">
        <h2 class="font-semibold text-xl">Live Performances</h2>
        <div class="mx-auto mt-2 h-1 w-12 rounded-full bg-po-accent"></div>
      </div>
      <div class="flex flex-col lg:flex-row justify-evenly gap-6">
        <div class="flex-1 border border-po-line/50">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/0dMOQbHaTFQ"
            title="YouTube video 1"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>          
        </div>
        <div class="flex-1 border border-po-line/50">
          <iframe
            class="w-full aspect-video"
            src="https://www.youtube.com/embed/7ck34b_bklE"
            title="YouTube video 2"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>          
        </div>
      </div>
    </div>
    <div class="w-full md:px-10 px-4 py-6 bg-po-surface border border-po-line">
      <div class="m-auto text-center pb-4">
        <h2 class="font-semibold text-xl">Studio Recordings</h2>
        <div class="mx-auto mt-2 h-1 w-12 rounded-full bg-po-accent"></div>
      </div>
      <div class="flex flex-col lg:flex-row gap-6 *:border *:border-po-line/50 *:rounded-xl">
        <iframe src="https://open.spotify.com/embed/album/5bdC7E9TVlThVvLa6mfOLf" title="Spotify Web Player" frameborder="0" allow="encrypted-media" class="block w-full h-120"></iframe>
        <iframe src="https://open.spotify.com/embed/album/3IHaBNiFiySaTuXeBg12i5" title="Spotify Web Player" frameborder="0" allow="encrypted-media" class="block w-full h-120"></iframe>
      </div>
    </div>
  </div>
</div>
