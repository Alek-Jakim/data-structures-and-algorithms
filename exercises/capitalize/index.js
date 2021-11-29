// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// ---- My Solution ----
/** 
function capitalize(str) {
    return str.split(" ").map((word) => {
        let firstLetter = word.substring(0, 1).toUpperCase();
        let capitalizedWord = firstLetter + word.substring(1);
        return capitalizedWord;
    }).join(" ");
};
*/


// ---- 1st Solution ----
/*
function capitalize(str) {
    let words = [];

    for(let word of str.split(" ")) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(" ");
};
*/

// ---- 2nd Solution ----
function capitalize(str) {
    let result = "";

    for(let i = 0; i < str.length; i++) {
        if(str[i - 1] === " " || i === 0) {
            let capitalLetter = str[i].toUpperCase();
            result += capitalLetter;
        } else {
            result += str[i];
        }
    };

    return result;
};


module.exports = capitalize;
