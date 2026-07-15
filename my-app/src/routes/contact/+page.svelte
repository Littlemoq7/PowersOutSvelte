<div class="pt-20 bg-po-tint text-white min-h-screen">
  <div class="w-full bg-po-surface border-y border-po-line py-6">
    <div class="text-4xl font-bold font-sans text-center w-full">
      <h1>CONTACT</h1>
    </div>
    <p class="text-center pt-2.5 px-10">Fill in your contact and message below.</p>
  </div>
  <section class="max-w-2xl mx-auto px-5 py-10">
    <form action="https://api.web3forms.com/submit" method="POST" class="w-full bg-po-surface border border-po-line p-6 sm:p-10 shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex flex-col">
      <!-- Replace with your Access Key -->
      <input type="hidden" name="access_key" value="f7e26cd2-aaeb-424d-ab4b-6ff2ebc3286e">

      <!-- Form Inputs. Each input must have a name="" attribute -->
      <input type="text" name="name" required placeholder="Name" class="block w-full text-base text-gray-800 bg-white p-3.5 mb-5 border border-transparent box-border placeholder:text-gray-400 focus:outline-none focus:border-po-deep focus:ring-2 focus:ring-po-deep/40 transition-shadow">
      <input type="email" name="email" required placeholder="Email" class="block w-full text-base text-gray-800 bg-white p-3.5 mb-5 border border-transparent box-border placeholder:text-gray-400 focus:outline-none focus:border-po-deep focus:ring-2 focus:ring-po-deep/40 transition-shadow">
      <textarea name="message" required placeholder="Message" class="block w-full text-base text-gray-800 bg-white p-3.5 mb-5 border border-transparent resize-y box-border min-h-37.5 placeholder:text-gray-400 focus:outline-none focus:border-po-deep focus:ring-2 focus:ring-po-deep/40 transition-shadow"></textarea>

      <!-- Honeypot Spam Protection -->
      <input type="checkbox" name="botcheck" class="hidden">

      <!-- Custom Confirmation / Success Page -->
      <input type="hidden" name="redirect" value="https://www.powersout.me/contact_thanks.html">

      <button type="submit" class="block mx-auto mt-2 py-3 px-10 text-lg font-semibold font-display bg-white text-po-surface rounded-full cursor-pointer transition-colors duration-300 hover:bg-po-tint hover:text-po-deep">Submit Message</button>
    </form>
  </section>
</div>
