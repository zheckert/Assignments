// const name = "John"

// function runForLoop(pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log(`pet name: ${name}`)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log(`man name: ${name}`)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map((carrot) => {
//         return { type: "carrot", name: carrot }
//     })
// }

// function mapVegetables(arr) {
//     return arr.map(carrot => ({ type: "carrot", name: carrot }))
// }

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(person => person.friendly)  
// }

// let doMathSum = (a, b) => a + b

// let produceProduct = (a, b) => a * b

// let firstName = "Jane"
// let lastName = "Doe"
// let age = "100"

// function printString(firstName, lastName, age){
//     return (`Hi, ${firstName} ${lastName}! How does it feel to be ${age}?`)
// }

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
// Below is my solution. The rest is practice as I broke things down.
//  function filterForDogs(arr) {
//      return arr.filter(animal => animal.type === "dog")
//  }

//  function filterForDogs(arr) {
//     return arr.filter(animal => {if (animal.type === "dog") {return true} else {return false}})
// }

//  function filterForDogs(arr) {
//     return arr.filter(animal => {
//         if (animal.type === "dog") {
//             return true
//         } else {
//             return false
//         }
//     })
// }

function welcomeTo(place, name){
    return `Hi, ${name}! \nWelcome to ${place}. \nI hope you enjoy your stay. Please ask the president of ${place} if you need anything.`
}

console.log(welcomeTo("Hell", "Zach"))