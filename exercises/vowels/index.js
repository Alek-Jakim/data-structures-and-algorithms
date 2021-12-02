// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// My solution
/*
function vowels(str) {
    let vowelArr = str.match(/[aeiou]/gi);
    return !vowelArr ? 0 : vowelArr.length;
};
*/


// ---- Alternate Solution ----
function vowels(str) {
    let count = 0;
    let vowelChars = ["a", "e", "i", "o", "u"];
    for(let char of str.toLowerCase()) {
        if(vowelChars.includes(char)) {
            count += 1;
        }
    }

    return count;
}

module.exports = vowels;
