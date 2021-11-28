// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// ---- 1st solution ----
/* 
function chunk(array, size) {
    let chunked = [];

    for (element of array) {
        let lastEl = chunked[chunked.length - 1];

        if (!lastEl || lastEl.length === size) {
            chunked.push([element]);
        } else {
            lastEl.push(element);
        }
    }
    return chunked
}
*/



// ---- 2nd solution ----
function chunk(array, size) {
    // Create an array that will contain the chunks
    let chunked = [];
    let index = 0;
    while (index < array.length) {
        // this basicall goes first(0, index + size)
        chunked.push(array.slice(index, index + size));
        // then this becomes size and so on
        index += size
    }
    return chunked;
}


module.exports = chunk;
