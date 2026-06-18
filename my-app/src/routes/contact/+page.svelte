<div class="bg-[#a8d4cf] min-h-screen pt-20 flex flex-col">
  <section class="flex flex-col justify-center items-center px-5 min-h-[60vh] flex-1 box-border w-[90%]  max-w-300 mx-auto bg-[#259185]">
    <h1 class="text-white text-3xl font-bold font-sans w-full text-center py-6">CONTACT THE BAND</h1>
    <div class="w-4/5 mx-auto">
      <p class="text-xl text-white text-center pt-2.5 pb-3.75">Fill in your contact and message below: </p>
      <form action="https://api.web3forms.com/submit" method="POST" class="bg-white p-6.25 sm:p-10 max-w-150 w-full rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex flex-col mx-auto">
        <div>
          <!-- Replace with your Access Key -->
          <input type="hidden" name="access_key" value="f7e26cd2-aaeb-424d-ab4b-6ff2ebc3286e">

          <!-- Form Inputs. Each input must have a name="" attribute -->
          <input type="text" name="name" required placeholder="Subject" class="block w-full text-base p-3.5 mb-5 border border-[#ccc] rounded-md resize-y font-[inherit] box-border">
          <input type="email" name="email" required placeholder="Email" class="block w-full text-base p-3.5 mb-5 border border-[#ccc] rounded-md resize-y font-[inherit] box-border">
          <textarea name="message" required placeholder="Message" class="block w-full text-base p-3.5 mb-5 border border-[#ccc] rounded-md resize-y font-[inherit] box-border min-h-37.5"></textarea>

          <!-- Honeypot Spam Protection -->
          <input type="checkbox" name="botcheck" class="hidden">

          <!-- Custom Confirmation / Success Page -->
          <input type="hidden" name="redirect" value="https://www.powersout.me/contact_thanks.html">
          <div></div>
          <button type="submit" class="block mx-auto p-3.5 text-base bg-[#333] text-white border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-[#555]">Submit Message</button>
        </div>
      </form>
    </div>
  </section>
</div>
<div class="text-white text-center bg-[#2A9D8F]">
  Power's Out Records
</div>
