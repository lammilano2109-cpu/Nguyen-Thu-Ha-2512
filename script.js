function checkPass() {
  const pass = document.getElementById("pass").value;
  if (pass === "2512") {
    document.getElementById("password-box").style.display = "none";
    document.getElementById("birthday-box").style.display = "block";
  } else {
    alert("Sai rồi nha 😜 Thử lại đi người đẹp 💖");
  }
}
