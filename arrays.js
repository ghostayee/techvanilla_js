let numbers = [1,2,3,4,5,6,7,8,9,10,"eleven", false]
console.log(numbers)
console.log(typeof(numbers))

// accessing  the data in array
console.log(numbers[5])
console.log(numbers.at(5))
console.log(numbers.at(-1))

//updating and modify data

numbers[0] = "one"
console.log(numbers)
console.log(numbers.length)

// slice a portion
let numbers2 = numbers.slice(3,6)
console.log(numbers2)