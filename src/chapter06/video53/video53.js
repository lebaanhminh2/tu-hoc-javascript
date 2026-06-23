console.log("video 53");

//thay đổi css bằng js
//sử dụng classList

const myBtnElement = document.getElementById("myBtn");
const myTextElement = document.getElementById("myText");
const backBtnElement = document.getElementById("backBtn");

myBtnElement.addEventListener("click", () => {
    console.log("click me");
    myTextElement.style.color = "red";
    myTextElement.style.backgroundColor = "green";
    myTextElement.classList.add("hoidanit", "ecic");

})

backBtnElement.addEventListener("click", () => {
    console.log("click me");
    myTextElement.style.color = "black";
    myTextElement.style.backgroundColor = "unset";
    myTextElement.classList.remove("hoidanit", "ecic");

})


