const nums = new Array(10).fill().map((value, index) =>index);

console.time("while loop")
let i = 0
while (i < nums.length) {
    console.log(nums[i])
    i++
}
console.timeEnd("while loop")


console.time('Regular for loop')
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i])
}
console.timeEnd('Regular for loop')


console.time("for of")
for (const num of nums) {
    console.log(num)
}
console.timeEnd("for of")


console.time("forEach")
nums.forEach(num => console.log(num))
console.timeEnd("forEach")