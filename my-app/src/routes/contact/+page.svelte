<div class="bg-[#a8d4cf] h-300">
  <section>
  <div class="w-full h-20"></div>
  <div class="w-4/5 mx-auto">
    <p class="text-xl text-white" id="form-description">Fill in your contact and message below: </p>
    <form action="https://api.web3forms.com/submit" method="POST">
      <div>
        <!-- Replace with your Access Key -->
        <input type="hidden" name="access_key" value="f7e26cd2-aaeb-424d-ab4b-6ff2ebc3286e">

        <!-- Form Inputs. Each input must have a name="" attribute -->
        <input class="w-2/3 bg-white" type="text" name="name" required placeholder="Subject">
        <input class="w-2/3 bg-white" type="email" name="email" required placeholder="Email">
        <textarea class="w-2/3 bg-white" name="message" required placeholder="Message"></textarea>

        <!-- Honeypot Spam Protection -->
        <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

        <!-- Custom Confirmation / Success Page -->
        <input type="hidden" name="redirect" value="https://www.powersout.me/contact_thanks.html">
        <div></div>
        <button class="w-50 bg-white" type="submit">Submit Form</button>
      </div>
    </form>    
  </div>
  </section>
</div>
<p class="footer-text">Power's Out Records</p>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;
    min-height: 60vh;
    box-sizing: border-box;
  }

  #form-description {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 15px;
  }
  
  form {
    background-color: #ffffff;
    padding: 40px;
    max-width: 600px;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    font-size: 16px;
    padding: 14px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    resize: vertical;
    font-family: inherit;
    box-sizing: border-box;
  }
  
  textarea {
    min-height: 150px;
  }
  
  button[type="submit"] {
    padding: 14px;
    font-size: 16px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #555;
  }
  
  .hidden {
    display: none;
  }
  
  @media (max-width: 640px) {
    form {
      padding: 25px;
    }
  }
</style>