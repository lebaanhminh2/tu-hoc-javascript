console.log("video 29");

for (let i = 0; i <= 5; i++) {
    console.log("i = ", i);
    if (i === 3) {
        break; // dừng vòng lặp ngay lập tức khi i bằng 3
    }
}

for (let i = 0; i <= 5; i++) {

    if (i === 3) {
        continue; // bỏ qua lần lặp này, tiếp tục vòng lặp tiếp theo
    }

    console.log("i = ", i);
}
