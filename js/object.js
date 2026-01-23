let person ={
    "name": "Jane Doe",
    "age": 28,
    "address": "123 New York",
    "is student": true
}
console.log(person)
console.log(typeof(person)) // object

// accessing values
console.log(person.name)
console.log(person.age) //25
console.log(person.address)


// bracket notation allow it when have spaces in key
console.log(person["is student"])

//adding values - bracket notation
person["job"] = "developer"

//dot notation
person.country = "usa"
console.log(person)

// updating values
person.age = 29
console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))