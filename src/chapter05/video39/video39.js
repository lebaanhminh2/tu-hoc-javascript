console.log("video 39")

const myClass = ["minh", "erik", "hung", "nam", "blabla"]

console.log(myClass, myClass.length)

for (let i = 0; i < myClass.length; i++) {
    console.log("i = ", i, " and value = ", myClass[i])
}

console.log("==========================")

// for-each
myClass.forEach(function (value, index) {
    console.log("value = ", value, " index = ", index)
})

console.log("==========================")

myClass.forEach((value, index) => {
    console.log("value = ", value, " index = ", index)
})

