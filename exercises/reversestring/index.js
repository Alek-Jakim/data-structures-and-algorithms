// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ---- 1st Solution ---- 

// function reverse(str) {
//     return str.split("").reverse().join("");
// };


// ---- 2nd Solution - variant a ----

// function reverse(str) {
//     let reversedString = ""
//     if(str) {
//         for(let i = str.length -1; i >= 0; i--) {
//             reversedString += str[i]
//         }
//     }
//     return reversedString
// };

// ---- 2nd Solution - variant b ----

// function reverse(str) {
//     let reversed = ""
//     if(str) {
//         for(let char of str) {
//             // First is H, then the second character + the H character makes oH and so on
//             reversed = char + reversed
//         }
//     }
//     return reversed;
// } 

// ---- 3rd Solution ----


function reverse(str) {
    return str.split("").reduce((reversed, character) => {
        return character + reversed;
    });
};

module.exports = reverse;
