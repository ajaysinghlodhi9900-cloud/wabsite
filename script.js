// Dark Mode
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Contact Form
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  msg.textContent = "Message sent successfully!";
  msg.style.color = "green";
  form.reset();
});
