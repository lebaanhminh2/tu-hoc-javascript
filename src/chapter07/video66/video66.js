console.log("Video 66");
//chiều dài phát triển của công nghệ: 

//callback

//promise
fetch("http://localhost:8000/users")
    .then(res => res.json())
    .then(data => console.log("fetch promise: ", data))

//async await

const fetchData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    console.log("fetch async await", data);
}

fetchData()