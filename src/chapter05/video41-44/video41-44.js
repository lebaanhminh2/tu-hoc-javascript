
console.log("====================")
console.log("video 41")
console.log("====================")


const ages = [10, 20, 30, 25, 12, 19];

const agesGreatThan18 = ages.filter((value, index) => {
    return value > 18;
})

console.log(" original: ", ages);
console.log(" agesGreatThan18: ", agesGreatThan18);


console.log("====================")
console.log("video 42")
console.log("====================")


const sv1 = {
    score: 10,
    name: "hoidanit",
    address: {
        city: "hanoi",
        country: "vietnam"
    }
}

const sv2 = {
    score: 4,
    name: "eric",
    address: {
        city: "hanoi",
        country: "vietnam"
    }
}

const sinhvien = [sv1, sv2]

console.log("sinhvien: ", sinhvien)


console.log("====================")
console.log("video 43")
console.log("====================")

const person = {
    name1: "hoidanit",
    age: 25
}

console.log("age: ", person.age); //cách này hay dùng
console.log("name: ", person["name1"]);

//thêm thông tin cho biến object:

person.address = "hanoi"
person["language"] = "vietnamese"

console.log("person after: ", person);

//xóa thông tin trong biến object

delete person.name1
console.log("person after delete: ", person)


console.log("====================")
console.log("video 44") // lặp object với for..in và for...of
console.log("====================")


const sv1_44 = {
    username: "hoidanit",
    score: 9.6
}

const sv2_44 = {
    username: "minhlee",
    score: 8
}

const sv3_44 = {
    username: "blabla",
    score: 4
}

const sinhvien_44 = [sv1_44, sv2_44, sv3_44];
console.log(">>> check sinhvien: ", sinhvien_44)

sinhvien_44.forEach((item, index) => {
    console.log(">>> index = ", index, " name =", item.username)
})

console.log("====================")
//cách này hay dùng: for...in

const person_44 = {
    email: "hoidanit@gmail.com",
    age: 25,
    address: "vietnam"
}

for (let key in person_44) {
    console.log(key, person_44[key]);
}


console.log("====================")
//for...of ít dùng hơn do khá khó

for (let value of Object.values(person_44)) {
    console.log(value);
}

console.log("====================")

for (let [key, value] of Object.entries(person_44)) {
    console.log(value);
}