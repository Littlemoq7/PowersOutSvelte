<script>
  import FrontPageBigButton from "$lib/components/FrontPageBigButton.svelte";
  import { fadeInOnScroll } from "$lib/actions/fadeInOnScroll.js";
  const socials = [
  {
    link: 'https://open.spotify.com/artist/4qEGLVNJT3OfCqBKsRHvcG',
    viewBox: '0 0 496 512',
    path: 'M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8Z M406.6 231.1c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3zm-31 76.2c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm-26.9 65.6c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4z'
  },
  {
    link: 'https://music.apple.com/us/artist/powers-out/1637085670',
    viewBox: '0 0 448 512',
    path: 'M350.1 27c-1.566.144-15.48 2.61-17.154 2.952l-192.6 38.862-.072.018c-5.022 1.062-8.964 2.844-12.006 5.4-3.672 3.078-5.706 7.434-6.48 12.51-.162 1.08-.432 3.276-.432 6.516 0 0 0 196.776 0 241.056 0 5.634-.45 11.106-4.266 15.768-3.816 4.662-8.532 6.066-14.058 7.182-4.194.846-8.388 1.692-12.582 2.538-15.912 3.204-26.262 5.382-35.64 9.018-8.964 3.474-15.678 7.902-21.024 13.518-10.602 11.106-14.904 26.172-13.428 40.284 1.26 12.042 6.678 23.562 15.984 32.076 6.282 5.76 14.13 10.134 23.382 11.988 9.594 1.926 19.818 1.26 34.758-1.764 7.956-1.602 15.408-4.104 22.5-8.298 7.02-4.14 13.032-9.666 17.73-16.398 4.716-6.75 7.758-14.256 9.432-22.23 1.728-8.226 2.142-15.66 2.142-23.868l0-209.07c0-11.196 3.168-14.148 12.204-16.344 0 0 160.092-32.292 167.562-33.75 10.422-1.998 15.336.972 15.336 11.898l0 142.722c0 5.652-.054 11.376-3.906 16.056-3.816 4.662-8.532 6.066-14.058 7.182-4.194.846-8.388 1.692-12.582 2.538-15.912 3.204-26.262 5.382-35.64 9.018-8.964 3.474-15.678 7.902-21.024 13.518-10.602 11.106-15.282 26.172-13.806 40.284 1.26 12.042 7.056 23.562 16.362 32.076 6.282 5.76 14.13 10.008 23.382 11.88 9.594 1.926 19.818 1.242 34.758-1.764 7.956-1.602 15.408-3.996 22.5-8.19 7.02-4.14 13.032-9.666 17.73-16.398 4.716-6.75 7.758-14.256 9.432-22.23 1.728-8.226 1.8-15.66 1.8-23.868V44.028C366.372 32.94 360.522 26.1 350.1 27z'
  },
  {
    link: 'https://www.youtube.com/@powersoutband',
    viewBox: '0 0 512 512',
    path: 'M211.4 222.92 326.0241 290.0062 211.4 357.08V357.08ZM468.3741 182.7225C463.2386 163.5344 448.1581 148.4553 428.9701 143.3189 394.2273 134 254.846 134 254.846 134 254.846 134 115.4666 134 80.7224 143.3189 61.5344 148.4553 46.4553 163.5344 41.3189 182.7225 32 217.4666 32 290 32 290 32 290 32 362.5338 41.3189 397.2781 46.4553 416.4661 61.5344 431.545 80.7224 436.6806 115.4666 446 254.846 446 254.846 446 254.846 446 394.2273 446 428.9701 436.6806 448.1581 431.545 463.2386 416.4661 468.3741 397.2781 477.6936 362.5338 477.6936 290 477.6936 290 477.6936 290 477.6561 217.4666 468.3741 182.7225Z'
  },
  {
    link: 'https://www.instagram.com/powersoutband/',
    viewBox: '0 0 512 512',
    path: 'M264.016 72c-52.144 0-58.688.228-79.168 1.16-20.44.936-34.392 4.172-46.6 8.92-12.628 4.904-23.34 11.464-34.012 22.14-10.68 10.672-17.24 21.384-22.16 34.008-4.76 12.212-8 26.168-8.92 46.6C72.24 205.308 72 211.856 72 264s.232 58.668 1.16 79.148c.94 20.44 4.176 34.392 8.92 46.6 4.908 12.628 11.468 23.34 22.144 34.012 10.668 10.68 21.38 17.256 34 22.16 12.216 4.748 26.172 7.984 46.608 8.92 20.48.932 27.02 1.16 79.16 1.16 52.148 0 58.672-.228 79.152-1.16 20.44-.936 34.408-4.172 46.624-8.92 12.624-4.904 23.32-11.48 33.988-22.16 10.68-10.672 17.24-21.384 22.16-34.008 4.72-12.212 7.96-26.168 8.92-46.6.92-20.48 1.16-27.008 1.16-79.152 0-52.144-.24-58.688-1.16-79.168-.96-20.44-4.2-34.392-8.92-46.6-4.92-12.628-11.48-23.34-22.16-34.012-10.68-10.68-21.36-17.24-34-22.14-12.24-4.748-26.2-7.984-46.64-8.92-20.48-.932-27-1.16-79.16-1.16zm-17.224 34.6c5.112-.008 10.816 0 17.224 0 51.264 0 57.34.184 77.584 1.104 18.72.856 28.88 3.984 35.648 6.612 8.96 3.48 15.348 7.64 22.064 14.36 6.72 6.72 10.88 13.12 14.368 22.08 2.628 6.76 5.76 16.92 6.612 35.64.92 20.24 1.12 26.32 1.12 77.56s-.2 57.32-1.12 77.56c-.856 18.72-3.984 28.88-6.612 35.64-3.48 8.96-7.648 15.34-14.368 22.056-6.72 6.72-13.1 10.88-22.064 14.36-6.76 2.64-16.928 5.76-35.648 6.616-20.24.92-26.32 1.12-77.584 1.12-51.268 0-57.344-.2-77.584-1.12-18.72-.864-28.88-3.992-35.652-6.62-8.96-3.48-15.36-7.64-22.08-14.36-6.72-6.72-10.88-13.104-14.368-22.068-2.628-6.76-5.76-16.92-6.612-35.64-.92-20.24-1.104-26.32-1.104-77.592s.184-57.32 1.104-77.56c.856-18.72 3.984-28.88 6.612-35.648 3.48-8.96 7.648-15.36 14.368-22.08 6.72-6.72 13.12-10.88 22.08-14.368 6.768-2.64 16.932-5.76 35.652-6.62 17.712-.8 24.576-1.04 60.36-1.08zm119.712 31.88c-12.72 0-23.04 10.308-23.04 23.032 0 12.72 10.32 23.04 23.04 23.04 12.72 0 23.04-10.32 23.04-23.04 0-12.72-10.32-23.04-23.04-23.04zm-102.488 26.92c-54.452 0-98.6 44.148-98.6 98.6 0 54.452 44.148 98.58 98.6 98.58C318.468 362.58 362.6 318.452 362.6 264S318.464 165.4 264.012 165.4zm0 34.6c35.344 0 64 28.652 64 64 0 35.344-28.656 64-64 64-35.348 0-64-28.656-64-64 0-35.348 28.652-64 64-64z'
  }
];
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
<div class="flex-col h-full bg-[#a8d4cf] text-white pt-10 pb-0">
  <div class="flex-col w-[90%] max-w-300 mx-auto bg-[#259185] rounded-t">
    <div class="w-full md:px-12 px-4 py-4 text-center text-white">
      <div class="inline-flex items-center gap-2.5 mb-4">
        <span class="w-5 h-0.5 bg-white/55"></span>
        <span class="font-display text-xs tracking-[0.22em] uppercase text-white/85">Hollis, NH &middot; Since 2021</span>
        <span class="w-5 h-0.5 bg-white/55"></span>
      </div>

      <h2 class="font-display font-bold text-2xl md:text-3xl tracking-tight uppercase mb-5">
        Originals, covers &amp; jams
      </h2>

      <p class="text-base md:text-lg leading-relaxed text-white/90 max-w-xl mx-auto mb-7">
        Playing originals and covers, rock, pop, blues, country, funk, jam band, and more. 
        Click the YouTube icon to watch some of our performances, and see the contact page for booking &amp; inquiries.
      </p>

      <div class="border-b border-white/20 pb-8">
        <div class="font-display text-xs tracking-[0.2em] uppercase text-white/65 mb-4">Listen &amp; follow</div>
        <div class="flex justify-center gap-4">
          {#each socials as { link, path, viewBox }}
            <a
              aria-label=social-media-link
              href={link}
              target="_blank"
              rel="noopener"
              class="group flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border border-white/20
                    transition-all duration-200 hover:-translate-y-1 hover:bg-white"
            >
              <svg viewBox={viewBox} class="w-7 h-7 fill-white transition-colors group-hover:fill-[#259185]">
                <path d={path} />
              </svg>
            </a>
          {/each}
        </div>
      </div>
    </div>
    <div class="w-full md:px-10 px-4 py-8">
      <div class="m-auto text-center pb-4">
        <h2 class="font-semibold text-xl">Live Performances</h2>
      </div>
      <div class="flex flex-col lg:flex-row justify-evenly gap-6" use:fadeInOnScroll>
        <div class="flex-1">
          <iframe
            class="aspect-video rounded"
            src="https://www.youtube.com/embed/0dMOQbHaTFQ"
            title="YouTube video 1"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>          
        </div>
        <div class="flex-1">
          <iframe
            class="aspect-video rounded"
            src="https://www.youtube.com/embed/7ck34b_bklE"
            title="YouTube video 2"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>          
        </div>
      </div>
    </div>
    <div class="w-full md:px-10 px-4 py-8">
      <div class="m-auto text-center pb-4">
        <h2 class="font-semibold text-xl">Studio Recordings</h2>
      </div>
      <div class="flex flex-col lg:flex-row gap-6" use:fadeInOnScroll>
        <iframe src="https://open.spotify.com/embed/album/5bdC7E9TVlThVvLa6mfOLf" title="Spotify Web Player" frameborder="0" allow="encrypted-media" class="block w-full h-120 mx-auto"></iframe>
        <iframe src="https://open.spotify.com/embed/album/3IHaBNiFiySaTuXeBg12i5" title="Spotify Web Player" frameborder="0" allow="encrypted-media" class="block w-full min-h-88 mx-auto"></iframe>        
      </div>
    </div>
  </div>
</div>
