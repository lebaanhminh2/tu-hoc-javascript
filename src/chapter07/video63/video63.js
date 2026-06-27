console.log("video 63")


//fetch => raw data (kiểu dữ liệu là Response) => dùng .json => kiểu dữ liệu dạng object

const temp = fetch("http://localhost:8000/users");

temp
    .then(res => res.json())
    .then(data => console.log(data));