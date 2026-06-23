console.log("video 55");

//Local Storage

const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");

const prev = document.getElementById("prev");
const prevName = localStorage.getItem("hoidanit");
if (prevName) {
    prev.innerHTML = `<b>${prevName}</b>`
}

btn.addEventListener("click", () => {
    console.log(input.value);
    localStorage.setItem("hoidanit", input.value)
    document.getElementById("message").innerHTML = `<b>${input.value}</b>`
})
