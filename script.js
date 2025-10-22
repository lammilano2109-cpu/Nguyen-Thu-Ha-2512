function checkPass() {
  const input = document.getElementById("passInput").value.trim();
  const msg = document.getElementById("msg");

  if (input === "2512") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("birthday").classList.remove("hidden");
  } else {
    msg.textContent = "Sai rồi nha 😝";
    msg.style.color = "red";
  }
}
