console.log("lab 04");

const username = document.getElementById("username");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    if (username.value === "hoidanit@gmail.com" && password.value === "123456") {
        username.style.borderColor = "";
        password.style.borderColor = "";
        alert("Đăng nhập thành công!");
        window.open("lab04login.html", "_blank");
        //hoặc viết như này để mở ngay tại tap đó:
        // window.location.href = "lab04login.html"

    }
    else {
        username.style.borderColor = "red";
        password.style.borderColor = "red";
        alert("Tài khoản hoặc mật khẩu sai");
    }
})