// Smooth scroll ke section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Form Kontak kirim ke Formspree
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  fetch("https://formspree.io/f/xeokjbae", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  })
    .then(response => {
      if (response.ok) {
        alert("Pesan berhasil dikirim!");
        document.getElementById("contact-form").reset();
      } else {
        alert("Gagal mengirim pesan.");
      }
    })
    .catch(error => {
      console.error(error);
      alert("Terjadi kesalahan.");
    });
});

// Navbar berubah saat scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
});
