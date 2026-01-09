<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
  <title>Power's Out</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="header.css">
  <link rel="stylesheet" href="contact.css">
</head>
<body>
  <!-- Banner Section -->

  <header>
    <div class="banner">
      <h1 id="header-title">Power's Out</h1>
    </div>
    <nav class="navbar">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="discography.html">Discography</a></li>
        <li><a href="bio.html">Bio</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </nav>
  </header>
  
  <section>
    <p id="form-description">Fill in your contact and message below: </p>
    <form action="https://api.web3forms.com/submit" method="POST">

      <!-- Replace with your Access Key -->
      <input type="hidden" name="access_key" value="f7e26cd2-aaeb-424d-ab4b-6ff2ebc3286e">
  
      <!-- Form Inputs. Each input must have a name="" attribute -->
      <input type="text" name="name" required placeholder="Subject">
      <input type="email" name="email" required placeholder="Email">
      <textarea name="message" required placeholder="Message"></textarea>
  
      <!-- Honeypot Spam Protection -->
      <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
  
      <!-- Custom Confirmation / Success Page -->
      <input type="hidden" name="redirect" value="https://www.powersout.me/contact_thanks.html">
  
      <button type="submit">Submit Form</button>
  </form>
  </section>
  <p class="footer-text">Power's Out Records</p>
</body>
</html>