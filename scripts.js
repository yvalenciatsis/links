window.onload = function() {
  const whatsAppButton = document.querySelector('.whatsapp-button');
  whatsAppButton.addEventListener('click', function() {
    const whatsAppLink = "https://wa.me/qr/RBXWHSNMZZKYI1";
    window.location.href = whatsAppLink;
  });

  const webButton = document.querySelector('.web-button');
  webButton.addEventListener('click', function() {
    const webLink = "https://www.tech-synergy.co/";
    window.location.href = webLink;
  });

  const linkedinButton = document.querySelector('.linkedin-button');
  linkedinButton.addEventListener('click', function() {
    const linkedinLink = "https://www.linkedin.com/company/101111091/admin/feed/posts/";
    window.location.href = linkedinLink;
  });

  const instagramButton = document.querySelector('.instagram-button');
  instagramButton.addEventListener('click', function() {
    const instagramLink = "https://www.instagram.com/techsynergyinnovations/";
    window.location.href = instagramLink;
  });

  const facebookButton = document.querySelector('.facebook-button');
  facebookButton.addEventListener('click', function() {
    const facebookLink = "https://www.facebook.com/profile.php?id=61556304670570";
    window.location.href = facebookLink;
  });
};