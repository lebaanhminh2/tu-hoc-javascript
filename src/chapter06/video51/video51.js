console.log("video 51");

//Lắng nghe event với addEventListener
//dấu () có nghĩa là thực thi

const element = document.getElementById("hoidanitButton");

const handleClickBtn = () => {
    console.log("you click a button");
}

element.addEventListener("click", handleClickBtn);

console.log(element);