// script.js

const artworks = [
  { id: 1, title: "Preview 1", image: "WhatsApp Image 2025-07-19 at 07.46.24.jpeg" },
  { id: 2, title: "Preview 2", image: "WhatsApp Image 2025-07-19 at 07.41.28.jpeg" },
  { id: 3, title: "Preview 3", image: "WhatsApp Image 2025-07-19 at 07.40.57.jpeg" }
];

const gallery = document.getElementById("gallery");

artworks.forEach((art, index) => {
  const item = document.createElement("div");
  item.className = "gallery-item";

  const ratingId = `rating-${index}`;

  item.innerHTML = `
    <img src="${art.image}" alt="${art.title}" />
    <h4>${art.title}</h4>
    <div class="stars" id="${ratingId}">
      ${[1, 2, 3, 4, 5].map(i => `<span data-val="${i}">&#9733;</span>`).join("")}
    </div>
    <p class="rating-label">Belum ada rating</p>
  `;

  gallery.appendChild(item);

  const stars = item.querySelectorAll(".stars span");
  const label = item.querySelector(".rating-label");

  stars.forEach(star => {
    star.addEventListener("click", () => {
      const val = parseInt(star.dataset.val);
      stars.forEach(s => {
        s.classList.toggle("active", parseInt(s.dataset.val) <= val);
      });
      label.textContent = `Rating: ${val}/5`;
    });
  });
});

// Buat objek audio dari file
const clickSound = new Audio("sounds/click.mp3");

// Ambil semua bintang
const stars = document.querySelectorAll(".star");

// Saat bintang diklik, mainkan suara
stars.forEach(star => {
  star.addEventListener("click", () => {
    clickSound.currentTime = 0; // mulai dari awal
    clickSound.play(); // mainkan suara
  });
});

const form = document.getElementById("commentForm");
const commentList = document.getElementById("commentList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("username").value;
  const text = document.getElementById("commentText").value;

    if (name === "" || text === "") {
    alert("Nama dan komentar tidak boleh kosong!");
    return;
  }

  const div = document.createElement("div");
  div.className = "comment";
  div.innerHTML = `<strong>${name}</strong><br>${text}`;
  
  commentList.prepend(div);
  
  form.reset();
});
