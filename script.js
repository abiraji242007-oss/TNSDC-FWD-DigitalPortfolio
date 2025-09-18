// Contact Form Submission Alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from reloading page
  let name = document.getElementById("name").value;
  alert("Thank you, " + name + "! Your message has been sent successfully.");
  document.getElementById("contactForm").reset();
});