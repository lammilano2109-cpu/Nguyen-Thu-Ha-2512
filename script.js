function checkPass() {
    const pass = document.getElementById("password").value;
    if (pass === "2512") { // 👉 Anh có thể đổi mật khẩu ở đây
        document.getElementById("password-section").style.display = "none";
        document.getElementById("birthday-section").style.display = "block";
    } else {
        alert("Sai rồi nha 😜 Thử lại đi người đẹp 💖");
    }
}
