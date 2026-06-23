console.log("video 40")

const scores = [10, 8, 3, 7, 5]

scores.forEach((element, index) => {
    console.log("index = ", index, " value = ", element)

})

console.log("================================")

const scoresx2 = scores.map((element, index) => {
    console.log("index = ", index, " value = ", element)
    return element * 2;
})

console.log("================================")

console.log("scores = ", scores)
console.log("scoresx2 = ", scoresx2)