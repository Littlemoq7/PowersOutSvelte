<div class="w-full h-[65vh] overflow-hidden relative">
    <div class="w-full flex-row absolute top-60 flex justify-between">
        <div class="flex">
        </div>
        <div class="flex">
            <a class="text-3xl font-semibold text-white bg-[#259185] pt-5 pb-5 pr-9 pl-9 rounded-[50px] hover:opacity-70 transition-opacity z-1" href="/discography"aria-label="Music">
                Music
            </a>

        </div>
        <div class="flex">
            <a class="text-3xl font-semibold text-white bg-[#259185] pt-5 pb-5 pr-9 pl-9 rounded-[50px] hover:opacity-70 transition-opacity z-1" href="/about"aria-label="Members">
                Members
            </a>
        </div>
        <div class="flex">
            <a class="text-3xl font-semibold text-white bg-[#259185] pt-5 pb-5 pr-9 pl-9 rounded-[50px] hover:opacity-70 transition-opacity z-1" href="/gallery"aria-label="Photos">
                Photos
            </a>
        </div>
        <div class="flex">
        </div>
    </div>
    <div class="bg-black w-full h-full opacity-30 absolute">
    </div>
    <video autoplay loop muted playsinline class="w-full h-full object-cover">
      <source src="images/short_band_clips.mp4" type="video/mp4">
    </video>
</div>
<div class="flex-col h-300 bg-[#a8d4cf] text-white pt-4"> 
  <div class="text-center bg-[#259185] w-2/3 m-auto rounded-4xl p-2">
    <h2 class="font-semibold text-xl">Hollis, NH band founded in 2021.</h2>
    Plays originals and covers across genres like rock, pop, blues, country, funk, jam band, and more.
    Click the YouTube icon to watch some of our performances, and see the contact page for booking and inquiries.
    <div class="links">
      <a href="https://open.spotify.com/artist/4qEGLVNJT3OfCqBKsRHvcG?si=GoAw_CgARNCr2Pi8hDrmdQ" target="_blank"><img src="images/spotify-logo.png" alt="Spotify Logo"></a>
      <a href="https://music.apple.com/us/artist/powers-out/1637085670" target="_blank"><img src="images/apple-music-icon.png" class="rounded-xl" alt="Apple Music Logo"></a>
      <a href="https://www.youtube.com/@powersoutband" target="_blank"><img src="images/youtube-logo.png" alt="Youtube Logo"></a>
      <a href="https://www.instagram.com/powersoutband/" target="_blank"><img src="images/instagram_icon.png" alt="Instagram Icon"></a>
    </div>
  </div>
  <div class="bg-[#259185] rounded-4xl my-4 p-4 w-[90%] mx-auto">
    <div class="m-auto text-center pb-2">
      <h2 class="font-semibold text-xl">Live Performances</h2>
    </div>
    <div class="flex justify-evenly">
      <iframe
        class="w-2/5"
        src="https://www.youtube.com/watch?v=0dMOQbHaTFQ"
        title="YouTube video 1"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <iframe
        class="w-2/5"
        src="https://www.youtube.com/watch?v=7ck34b_bklE"
        title="YouTube video 2"
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>

<style>
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 10px
  }

  .links img {
    max-width: 40px; 
    max-height: 40px;
    opacity: 0.8;
    margin: auto;
    transition: transform 0.2s ease-in-out;
  }

  .links img:hover {
    transform: scale(1.1);
  }
</style>
