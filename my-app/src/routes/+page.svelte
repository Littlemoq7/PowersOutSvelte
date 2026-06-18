<script>
  import FrontPageBigButton from "$lib/components/FrontPageBigButton.svelte";
  import { fadeInOnScroll } from "$lib/actions/fadeInOnScroll.js";
</script>

<div class="w-full h-[65vh] overflow-hidden relative">
  <div class="w-[90%] max-w-300 flex flex-row justify-between absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
    <FrontPageBigButton text="Music" href="/discography" />
    <FrontPageBigButton text="Members" href="/about" />
    <FrontPageBigButton text="Photos" href="/gallery" />
  </div>
    <div class="bg-black w-full h-full opacity-30 absolute pointer-events-none">
    </div>
    <video autoplay loop muted playsinline class="w-full h-full object-cover -z-50">
      <source src="images/short_band_clips.mp4" type="video/mp4">
    </video>
</div>
<div class="flex-col h-full bg-[#a8d4cf] text-white pt-8 pb-0">
  <div class="flex-col w-[90%] max-w-300 mx-auto bg-[#259185] rounded-t">
    <div class="w-full md:px-10 px-4 py-5 text-center" use:fadeInOnScroll>
      <h2 class="font-semibold text-xl">Hollis, NH band founded in 2021.</h2>
      Plays originals and covers across genres like rock, pop, blues, country, funk, jam band, and more.
      Click the YouTube icon to watch some of our performances, and see the contact page for booking and inquiries.
      <div class="flex justify-center items-center md:gap-12.5 gap-6 p-2.5">
        <a href="https://open.spotify.com/artist/4qEGLVNJT3OfCqBKsRHvcG?si=GoAw_CgARNCr2Pi8hDrmdQ" target="_blank"><img src="images/spotify-logo.png" alt="Spotify Logo" class="max-w-10 max-h-10 opacity-80 m-auto transition-transform duration-200 ease-in-out hover:scale-110"></a>
        <a href="https://music.apple.com/us/artist/powers-out/1637085670" target="_blank"><img src="images/apple-music-icon.png" class="rounded-xl max-w-10 max-h-10 opacity-80 m-auto transition-transform duration-200 ease-in-out hover:scale-110" alt="Apple Music Logo"></a>
        <a href="https://www.youtube.com/@powersoutband" target="_blank"><img src="images/youtube-logo.png" alt="Youtube Logo" class="max-w-10 max-h-10 opacity-80 m-auto transition-transform duration-200 ease-in-out hover:scale-110"></a>
        <a href="https://www.instagram.com/powersoutband/" target="_blank"><img src="images/instagram_icon.png" alt="Instagram Icon" class="max-w-10 max-h-10 opacity-80 m-auto transition-transform duration-200 ease-in-out hover:scale-110"></a>
      </div>
    </div>
    <div class="w-full md:px-10 px-4 py-5" use:fadeInOnScroll>
      <div class="m-auto text-center pb-2">
        <h2 class="font-semibold text-xl">Live Performances</h2>
      </div>
      <div class="flex flex-col md:flex-row justify-evenly gap-4">
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
    <div class="w-full md:px-10 px-4 py-5" use:fadeInOnScroll>
      <div class="m-auto text-center pb-2">
        <h2 class="font-semibold text-xl">Studio Recordings</h2>
      </div>
      <iframe src="https://open.spotify.com/embed/album/5bdC7E9TVlThVvLa6mfOLf" title="Spotify Web Player" frameborder="0" allow="encrypted-media" class="block w-full h-120 mx-auto"></iframe>
    </div>
  </div>
</div>
<div class="text-white text-center bg-[#2A9D8F]">
  Power's Out Records
</div>
