<script>
  let submitting = $state(false);
  let result = $state({ status: 'idle', message: '' });

  /** @param {SubmitEvent} event */
  async function handleSubmit(event) {
    event.preventDefault();
    const form = /** @type {HTMLFormElement} */ (event.target);
    submitting = true;
    result = { status: 'idle', message: '' };

    try {
      const formData = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      });
      const data = await response.json();

      if (data.success) {
        result = { status: 'success', message: "Thanks! Your message has been sent, we'll get back to you soon." };
        form.reset();
      } else {
        result = { status: 'error', message: data.message || 'Something went wrong. Please try again.' };
      }
    } catch (err) {
      result = { status: 'error', message: 'Something went wrong. Please check your connection and try again.' };
    } finally {
      submitting = false;
    }
  }
</script>

<div class="pt-20 bg-po-tint text-white min-h-screen">
  <div class="w-full bg-po-surface border-y border-po-line py-6">
    <div class="text-4xl font-bold font-sans text-center w-full">
      <h1>CONTACT</h1>
    </div>
    <div class="mx-auto mt-3 h-1 w-16 rounded-full bg-po-accent"></div>
    <p class="text-center pt-2.5 px-10">Fill in your contact and message below.</p>
  </div>
  <section class="max-w-2xl mx-auto px-5 py-10">
    <form action="https://api.web3forms.com/submit" method="POST" onsubmit={handleSubmit} class="w-full bg-po-surface border border-po-line p-6 sm:p-10 shadow-[0_8px_20px_rgba(0,0,0,0.15)] flex flex-col">
      <input type="hidden" name="access_key" value="f7e26cd2-aaeb-424d-ab4b-6ff2ebc3286e">

      <input type="text" name="name" required placeholder="Name" disabled={submitting} class="block w-full text-base text-gray-800 bg-white p-3.5 mb-5 border border-transparent box-border placeholder:text-gray-400 focus:outline-none focus:border-po-accent focus:ring-2 focus:ring-po-accent/40 transition-shadow disabled:opacity-60">
      <input type="email" name="email" required placeholder="Email" disabled={submitting} class="block w-full text-base text-gray-800 bg-white p-3.5 mb-5 border border-transparent box-border placeholder:text-gray-400 focus:outline-none focus:border-po-accent focus:ring-2 focus:ring-po-accent/40 transition-shadow disabled:opacity-60">
      <textarea name="message" required placeholder="Message" disabled={submitting} class="block w-full text-base text-gray-800 bg-white p-3.5 mb-5 border border-transparent resize-y box-border min-h-37.5 placeholder:text-gray-400 focus:outline-none focus:border-po-accent focus:ring-2 focus:ring-po-accent/40 transition-shadow disabled:opacity-60"></textarea>

      <!-- Honeypot Spam Protection -->
      <input type="checkbox" name="botcheck" class="hidden">

      <!-- Fallback redirect if JavaScript is unavailable -->
      <input type="hidden" name="redirect" value="https://www.powersout.me/contact_thanks.html">

      {#if result.status === 'success'}
        <p role="status" class="text-center mb-5 text-po-accent font-medium">{result.message}</p>
      {:else if result.status === 'error'}
        <p role="alert" class="text-center mb-5 text-red-500 font-medium">{result.message}</p>
      {/if}

      <button type="submit" disabled={submitting} class="block mx-auto mt-2 py-3 px-10 text-lg font-semibold font-display bg-po-accent text-white rounded-full cursor-pointer transition-colors duration-300 hover:bg-po-accent-dark disabled:opacity-60 disabled:cursor-not-allowed">
        {submitting ? 'Sending…' : 'Submit Message'}
      </button>
    </form>
  </section>
</div>
