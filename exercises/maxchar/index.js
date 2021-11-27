/*--- Directions
Given a string, return the character that is most
commonly used in the string.
--- Examples
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"
*/

/*
Similar problems:
What is the most common character in the string?
Does string A have the same characters as string B (is it an anagram)?
Does the given string have any repeated characters in it?
*/


/*
    Tips:
    - For the problems above, one good way is to turn the string into an object where the keys are the characters and the values are the number of times the character has been found (see diagram 2/4)
*/


// ---- My Solution ----
/*
function maxChar(str) {
    let chars = {};
    let mostCommonChar;

    for (let char of str) {
        // If the character hasn't been seen before, assign it a value of 1
        if (!chars[char]) {
            chars[char] = 1;
        }
        // If the character has been seen before, increment the value
        else {
            chars[char] += 1;
        }
    }

    // Turn the values into an array and find the largest value inside the array with Math.max(arr)
    let largestCount = Math.max(...Object.values(chars))

    for (let char in chars) {
        if (chars[char] === largestCount) {
            mostCommonChar = char
        }
    }

    return mostCommonChar;
}
*/



// ---- Better Solution ----
function maxChar(str) {
    const charMap = {};
    let biggestValue = 0;
    let maxChar = "";

    // Iterate through the string and create key value pairs - Very useful
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }


    // Iterate through the newly created object and check if the current iteration of the value is the greatest
    for (let value in charMap) {
        if (charMap[value] > biggestValue) {
            biggestValue = charMap[value];
            maxChar = value
        }
    }

    return maxChar;
}



module.exports = maxChar;
