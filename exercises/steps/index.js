// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// ---- My Solution ----
/*
function steps(n) {
    // You can search for whitespace using \s, which is a lowercase s. let whiteSpace = /\s/;
    
    // First you make the one hashtag with n - 1 spaces, so the string is always the length of n
    let firstStep = "#";
    let spaces = " ".repeat(n - 1);
    firstStep += spaces;

    // This was tricky; The replace() method returns a new string so the original string is left unchanged.

    for(let i = 0; i < firstStep.length; i++) {
        console.log(firstStep.replace(firstStep[i], "#"));
        firstStep = firstStep.replace(firstStep[i], "#");
    }
}
*/

// ---- 1st solution ----
/*
function steps(n) {
    // See diagram 3/9

    
    // From 0 to n (iterate through rows)
    //     create an empty string, stair
    //     from 0 to n (iterate through columns (nested for loop basically))
    //         IF the current collumn =< current row, add a "#" to stair
    //         ELSE add a space to the stair
    //     console.log(stair) inside the first for loop
    
    

    for(let row = 0; row < n; row++) {
        let stair = "";

        for(let col = 0; col < n; col++) {
            if(col <= row) {
                stair += "#"
            } else {
                stair += " ";
            }
        }
        console.log(stair);
    }
}
*/


/* Recursion Tips:
- Figure out the bare minimum pieces of information to represent your problem
- Give reasonable defaults to the bare minimum pieces of info
- Check the base case. Is there any work left to do ? If not, return;
- Do some work. Call the function again, making sure the arguments have changed in some fashion
*/


// ---- 2nd Solution -> Recursion ----
function steps(n, row = 0, stair = "") {
    /*
    if(row === n) then we have hit the end of our problem
    if the stair string has a length of n, then we are at the end of a row
    if the length of the stair is less than or equal to the row number we're working on, we add a #, otherwise add a space
    */
    if(n === row) {
        return;
    }

    if(n === stair.length) {
        console.log(stair);
        // No need to add an empty string as the third argument, it's already declared above
        return steps(n, row += 1);
    }

    if(stair.length <= row) {
        stair += "#"
    } else {
        stair += " ";
    }
    steps(n, row, stair);
}


module.exports = steps;
