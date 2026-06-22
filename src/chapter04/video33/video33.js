console.log("video 33");

// phạm vi toàn cục
let globalVar = "Tôi là biến toàn cục";

function show() {
    console.log(globalVar); // Truy cập được
}
show();
console.log(globalVar); // Truy cập được

// phạm vi hàm
function sayHi() {
    let name = "hoidanit";
    console.log("Hi " + name);
}

sayHi();
console.log(name1); // ❌ Lỗi: name is not defined

//phạm vi khối

function sayHi() {
    let name = "hoidanit";
    console.log("Hi " + name);

    if (true) {
        let x = 10;
        const y = 20;
        console.log(x, y); // ✅ Truy cập được
    }

    console.log(x); // ❌ Lỗi: x is not defined
}

sayHi();
console.log(name1);
