console.log("video 38")

const names = ["hoidanit", "minh", "blabla", "nam"]

//index = 0; arr[index]
console.log(names[3]);
console.log(names[0]);
console.log(names[2]);

names[2] = "update name";
console.log("before", names);

names.push(true, 123)
names.unshift(null)
console.log("after", names)

names.pop()
names.shift()
console.log("after delete", names)




