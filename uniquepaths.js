/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    
    // generate map
    const cachemap = Array.from({length: m}, e => Array(n));
    cachemap[m-1][n-1] = 1;
    
};