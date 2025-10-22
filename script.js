function checkPassword() {
  const pass = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (pass === "2512") {
    message.innerHTML = "💖 Chúc mừng! Anh đã mở được điều bí mật 💖";
    message.style.color = "#ff5a79";
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=5qap5aO4i9A"; // Link bí mật
    }, 2000);
  } else {
    message.innerHTML = "❌ Sai mật khẩu rồi nha, nhập lại đi 💋";
    message.style.color = "red";
  }
}
