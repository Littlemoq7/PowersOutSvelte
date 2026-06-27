<script>
  import MemberBioCard from "$lib/components/MemberBioCard.svelte";

</script>

<div class="pt-20 bg-[#a8d4cf] text-white">
  <div class="w-[90%] max-w-300 mx-auto bg-[#259185]">
    <div class="text-3xl font-bold font-sans text-center w-full text-nowrap py-6">
      <h1>ABOUT</h1>
    </div>
    <div class="md:px-20 px-10 pb-6 text-center mx-auto max-w-250">
      Power's Out is a Hollis, NH band that has been playing together since high school. They blend a range of styles 
      like rock, jam-band, funk, and blues into a modern sound in both their covers and original music.
    </div>
    <div class="text-3xl text-center w-full text-nowrap py-2" >
      Meet the Band
    </div>
    <MemberBioCard 
      name="Connor Moquin"
      picture="images/connor_pic.webp"
      igLink="https://www.instagram.com/littlemoq7"
      instrument="Guitar"
      bio="Connor has been playing guitar since he was very young. Taught to play as a kid by his father, he has since worked to become proficient in various styles, including rock, blues, pop, jazz, metal, and more. He currently attends Boston College and is majoring in Mathematics and Computer Science."
    />
    <MemberBioCard 
      name="Katherin Jokinen"
      picture="images/katherin_pic.webp"
      igLink="https://www.instagram.com/katherinjokinen"
      instrument="Vocals"
      bio="Katherin has been singing for as long as she can remember. It's not hard to find pictures and videos of her as a toddler holding up a microphone and singing her heart out. Her favorite genres to cover are pop, rock, and blues. Her songwriting and originals with the band, however, seem to trend more pop/rock."
    />
    <MemberBioCard 
      name="Elliott Miller"
      picture="images/elliott_pic.webp"
      igLink="https://www.instagram.com/ellm.nop/"
      instrument="Bass"
      bio="Elliott has been playing bass since the start of high school. He enjoys playing funk and rock, but is willing to try out almost any genre. Studying Computer Science at Purdue University, he spends his time on the weekends in a Grateful Dead cover band."
    />

    <MemberBioCard 
      name="Meghan Warren"
      picture="images/meghan_bio.webp"
      igLink="https://www.instagram.com/meghanwarre/"
      instrument="Piano"
      bio="Meghan has over a decade of experience playing piano and keyboards in classical, jazz, and rock music. She is committed to Northeastern University for architecture."
    />

    <MemberBioCard 
      name="Andrew Rezzarday"
      picture="images/andrew_pic.webp"
      igLink="https://www.instagram.com/andrew_rezzy/"
      instrument="Drums"
      bio="Andrew Rezzarday has played the drums since middle school. Being in a band as well as playing for the Hollis Brookline jazz band has broadened his style and brought a great appreciation for music through playing. He is currently attending Nashua Community College as a business major."
    />
  </div>
</div>
