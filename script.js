// 1. Auto Fill Date
document.addEventListener("DOMContentLoaded", () => {
  const dateElem = document.getElementById("currentDate");
  const today = new Date().toLocaleDateString();
  if (dateElem) {
    dateElem.textContent = today;
  }
});

// 2. Dark Mode Toggle
document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 3. Copy Email to Clipboard
document.getElementById("emailCopy").addEventListener("click", () => {
  const email = "kumargourabbarik06@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    document.getElementById("copyMsg").textContent = "Email copied!";
    setTimeout(() => {
      document.getElementById("copyMsg").textContent = "";
    }, 2000);
  });
});

// 4. LinkedIn Alert
document.getElementById("linkedinLink").addEventListener("click", () => {
  alert("Redirecting to LinkedIn profile of Kumar Gourab Barik.");
});
