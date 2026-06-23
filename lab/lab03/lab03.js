console.log("Lab 03");

const sp1 = {
    name: "tất",
    price: 10,
    instock: true,
}

const sp2 = {
    name: "quần",
    price: 100,
    instock: false,
}

const sp3 = {
    name: "áo phông",
    price: 120,
    instock: true,
}

const sp4 = {
    name: "áo khoác",
    price: 300,
    instock: true,
}

const sp5 = {
    name: "mũ",
    price: 50,
    instock: false,
}

//1. In ra tên của sản phẩm đầu tiên.

console.log(sp1.name);

console.log("================================")

//2. Thay đổi giá sản phẩm thứ hai thành 150 và in ra danh sách tất cả sản phẩm

sp2.price = 150;
const sanpham = [sp1, sp2, sp3, sp4, sp5];
console.log(sanpham);

console.log("================================")

//3. Thêm một sản phẩm mới vào cuối mảng và in ra danh sách tất cả sản phẩm

const sp6 = {
    name: "giày",
    price: 200,
    instock: true,
}

sanpham.push(sp6);
console.log(sanpham);

console.log("================================")

4//Xoá sản phẩm cuối cùng ra khỏi danh sách và in ra danh sách tất cả sản phẩm

sanpham.pop(); // xóa phần tử ở cuối mảng
// nếu xóa phần tử ở đầu mảng thì sanpham.shift()

console.log(sanpham);

console.log("================================")

//5 Dùng forEach( ) để in ra tất cả tên sản phẩm

sanpham.forEach((value) => {
    console.log("tên sản phẩm: ", value.name)
})

console.log("================================")

//6. Dùng map( ) để tạo mảng mới chứa giá sản phẩm

const price = sanpham.map((value) => {
    console.log("giá sản phẩm: ", value.price)
})

console.log("================================")

//7. Dùng filter( ) để lấy các sp còn hàng

const spconhang = sanpham.filter((value) => {
    return value.instock === true;
})
console.log(spconhang);

console.log("================================")

//8. Dùng for...in để duyệt qua thuộc tính của sản phẩm đầu tiên

for (let key in sp1) {
    console.log(key, sp1[key]);
}




