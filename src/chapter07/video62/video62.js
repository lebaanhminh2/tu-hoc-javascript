console.log("video 62")

//Promise - Lời hứa từ tương lai

const myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            //return
            resolve("hoidanit")
        }, 5000)
    })
}
console.log("1");
myPromise().then((data) => {
    console.log(data);
    console.log("3");
});


