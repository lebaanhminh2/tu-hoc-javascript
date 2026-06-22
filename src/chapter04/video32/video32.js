console.log("video 32");

const sum = (a, b, c) => {
    console.log("run before");
    if (typeof a !== "number") {
        console.log("RUN EMPTY RETURN");
        return "sai định dạng";
    }
    return a + b + c;
    console.log("run after"); // sẽ không được thực thi vì đã return trước đó
}

console.log(sum("hoidanit", 2, 1));

