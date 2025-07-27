// Simple script to highlight active nav link
// Nav link active handler
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// Form submission handler (frontend only)
const form = document.getElementById('enquiryForm');
const message = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    message.classList.remove('hidden');
    form.reset();
    setTimeout(() => {
      message.classList.add('hidden');
    }, 4000);
  });
}

// Logout confirmation handler
document.getElementById("logoutBtn").addEventListener("click", function () {
    const confirmed = confirm("Are you sure you want to logout?");
    if (confirmed) {
        window.location.href = "goodbye.html";
    }
});



