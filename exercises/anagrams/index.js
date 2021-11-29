// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


/*
Tips:
- use RegEx to remove spaces and exclamation marks from a string --> 
let word = "HI THERE!!!"
word.replace(/[^\w]/g, "");


*/


// ---- 1st Solution ----
/*
function anagrams(stringA, stringB) {
    // Remove spaces and exclamation marks, make strings lowercase
    let trimmedA = stringA.replace(/[^\w]/g, "").toLowerCase();
    let trimmedB = stringB.replace(/[^\w]/g, "").toLowerCase();

    // Create character maps like in maxchar
    let charMapA = {};
    let charMapB = {};

    for(let char of trimmedA) {
        if(!charMapA[char]) {
            charMapA[char] = 1
        } else {
            charMapA[char] += 1
        }
    }

    for(let char of trimmedB) {
        if(!charMapB[char]) {
            charMapB[char] = 1
        } else {
            charMapB[char] += 1
        }
    }

    // Compare the two character maps
    let keysA = Object.keys(charMapA);
    let keysB = Object.keys(charMapB);

    // If they don't have the same amount of characters, then it's not an anagram
    if(keysA.length !== keysB.length) {
        return false;
    } 

    // Just iterating through one object and comparing the values with the other object
    for(let char in charMapA) {
        if(charMapA[char] !== charMapB[char]) {
            return false;
        }
    }
    

    return true;
}
*/

function anagrams(stringA, stringB) {
    // Remove spaces and exclamation marks, make strings lowercase
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    // This will sort the string alphabetically, so that you can compare them: if they are equal they are anagrams
    let sortedA = stringA.split("").sort().join("");
    let sortedB = stringB.split("").sort().join("");

    return sortedA === sortedB;
}


module.exports = anagrams;
