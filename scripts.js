window.onload = function () {
  const whatsAppButton = document.querySelector(".whatsapp-button");
  whatsAppButton.addEventListener("click", function () {
    const whatsAppLink =
      "https://wa.me/573042830114?text=Quiero%20informaci%C3%B3n%20sobre%20lo%20que%20ofrece%20Tech-Synergy%20Innovations%20S.A.S.";
    window.location.href = whatsAppLink;
  });

  const webButton = document.querySelector(".web-button");
  webButton.addEventListener("click", function () {
    const webLink = "https://www.tech-synergy.co/";
    window.location.href = webLink;
  });

  const linkedinButton = document.querySelector(".linkedin-button");
  linkedinButton.addEventListener("click", function () {
    const linkedinLink =
      "https://www.linkedin.com/company/101111091/admin/feed/posts/";
    window.location.href = linkedinLink;
  });

  const instagramButton = document.querySelector(".instagram-button");
  instagramButton.addEventListener("click", function () {
    const instagramLink = "https://www.instagram.com/techsynergyinnovations/";
    window.location.href = instagramLink;
  });

  const facebookButton = document.querySelector(".facebook-button");
  facebookButton.addEventListener("click", function () {
    const facebookLink =
      "https://www.facebook.com/profile.php?id=61556304670570";
    window.location.href = facebookLink;
  });
};
