// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



/*---- My solution ----
function reverseInt(n) {
    // If it is 0, it should return 0
    if (n === 0) {
        return n;
    }
    // Initialize another variable
    let reversedInt;
    if (n) {
        reversedInt = n.toString().split("").reverse().join("");
        reversedInt = parseInt(reversedInt);
    }

    if (n < 0) {
        reversedInt = -Math.abs(reversedInt);
    }
    return reversedInt
}
*/




// ---- The solution ----
function reverseInt(n) {
    //Turn into a string and then reverse it
    let reversed = n
        .toString()
        .split("")
        .reverse()
        .join("");

    //Turn back into an integer
    reversed = parseInt(reversed);

    //Math.sign returns -1 for negative, 1 for positive and 0 for 0
    return Math.sign(n) === 0 ? n : Math.sign(n) < 0 ? -Math.abs(reversed) : reversed
}


module.exports = reverseInt;
