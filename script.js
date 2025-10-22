function checkPass() {
  const passInput = document.getElementById("passInput").value;
  const message = document.getElementById("message");
  const content = document.getElementById("content");

  const password = "2512"; // 👉 Pass Anh có thể đổi ở đây nha

  if (passInput === password) {
    document.querySelector(".container").style.display = "none";
    content.classList.remove("hidden");
  } else {
    message.textContent = "Sai rồi nè 😝";
    message.style.color = "red";
  }
}
