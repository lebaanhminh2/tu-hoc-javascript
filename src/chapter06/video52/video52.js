console.log("video 52");

//thay đổi nội dung html

const myBtn = document.getElementById("myBtn");

const myText = document.getElementById("myText");

console.log(myBtn, myText);

myBtn.addEventListener("click", () => {
    console.log("you click on button")
    myText.innerHTML = "<em>Đừng bấm nữa bố đấm m đấy</em>";
})

const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {
    console.log("you click on button back");
    myText.innerText = "video 52";
})