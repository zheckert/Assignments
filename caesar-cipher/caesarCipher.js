// create an array from the alphabet. That way, each letter will have a corresponding index Number.
// loop through the input value given by the user with a for loop.
// get the numeric value of each number in the string.
// add the shift number. In the case of numbers towards the end of the alphabet that loop, I'm not sure what to do yet.
// push them to an array. turn the array to a string. then .join("")
// return the new letters of the alphabet.

//double check how to use spread instead of .join(""")?

var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

let arr = [];
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

hailCaesar = () => {
    for (let i = 0; i < input.length; i++){
        let newNums = alphabet.indexOf((input[i])) + shift 
        console.log(newNums)
        if(newNums >= 26){
           arr.push(newNums - 26)
        
        }else{
            arr.push(newNums)
            
        }
        // let final = arr.push(newNums)
        // charCodeAt(i)
        // console.log(final.join(""))
        // return final.join("")
        console.log(arr.join(""))
        console.log(alphabet.indexOf([arr]))
    }
    
}
console.log(hailCaesar())


