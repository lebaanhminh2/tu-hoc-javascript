console.log("Lab 02");

const diemToan = 9
const diemVan = 8
const diemAnh = 7

console.log(`
diemToan: ${diemToan}
diemVan: ${diemVan}
diemAnh: ${diemAnh}`);

const diemTB = (diemToan, diemVan, diemAnh) => {
    let TB = (diemToan + diemVan + diemAnh) / 3;
    return TB;
}

const TB = diemTB(diemToan, diemVan, diemAnh);
console.log("Điểm trung bình:", TB);

if (TB >= 9) {
    console.log("Xếp loại: Xuất sắc");
}
else if (TB >= 8 && TB < 9) {
    console.log("Xếp loại: Giỏi");
}
else if (TB >= 7 && TB < 8) {
    console.log("Xếp loại: Khá");
}
else {
    console.log("Xếp loại: Trung bình");
}
