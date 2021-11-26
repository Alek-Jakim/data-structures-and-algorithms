// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// ---- 1st Solution ----
// function palindrome(str) {
//     let revStr = str.split("").reverse().join("");
//     return  str === revStr;
// }



// ---- 2nd Solution ----
// NOTE: This is not an optimal solution because we are doing more comparisons and operations than necessary (see diagram 2/12)
function palindrome(str) {
     return str.split("").every((char, index, array) => {
        return char === array[array.length - 1 - index];
    })
}

module.exports = palindrome;
