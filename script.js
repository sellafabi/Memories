function openGallery(type) {
  window.location.href = `gallery.html?type=${type}`;
}

const galleries = {
  jollibee: {
    title: "Jollibee",
    images: [
      "images/assets/Jollibee L.jpg",
      "images/assets/Jollibee P (2).jpg",
      "images/assets/Jollibee P (3).jpg",
      "images/assets/Jollibee P.jpg"
    ]
  },
  mcdo: {
    title: "McDo",
    images: [
      "images/assets/McDo L (3).jpg",
      "images/assets/McDo L (4).jpg",
      "images/assets/McDo L (5).jpg",
      "images/assets/McDo L (6).jpg",
      "images/assets/McDo L.jpg",
      "images/assets/McDo P (2).jpg",
      "images/assets/McDo P (3).jpg",
      "images/assets/McDo P (4).jpg",
      "images/assets/McDo P.jpg"
    ]
  },
  christmas: {
    title: "Christmas Party 2025",
    images: [
      "images/assets/ChirstmasParty2025 DazenG L (2).jpg",
      "images/assets/ChirstmasParty2025 DazenG L (3).jpg",
      "images/assets/ChirstmasParty2025 DazenG L (4).jpg",
      "images/assets/ChirstmasParty2025 DazenG L (5).jpg",
      "images/assets/ChirstmasParty2025 DazenG L.jpg",
      "images/assets/ChirstmasParty2025 PG L (2).jpg",
      "images/assets/ChirstmasParty2025 PG L.jpg",
      "images/assets/ChirstmasParty2025 DazenG P (2).jpg",
      "images/assets/ChirstmasParty2025 DazenG P (3).jpg",
      "images/assets/ChirstmasParty2025 DazenG P (4).jpg",
      "images/assets/ChirstmasParty2025 DazenG P (5).jpg",
      "images/assets/ChirstmasParty2025 DazenG P (6).jpg",
      "images/assets/ChirstmasParty2025 DazenG P (7).jpg",
      "images/assets/ChirstmasParty2025 DazenG P (8).jpg",
      "images/assets/ChirstmasParty2025 DazenG P.jpg"
    ]
  }
};

if (window.location.search) {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  const data = galleries[type];
  document.getElementById("title").textContent = data.title;

  const galleryDiv = document.querySelector(".gallery");

  data.images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    galleryDiv.appendChild(image);
  });
}
