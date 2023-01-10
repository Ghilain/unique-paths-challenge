/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    
    // generate map
    const cachemap = Array.from({length: m}, e => Array(n));
    cachemap[m-1][n-1] = 1;
    
    function cellFind(x, y) {
        // if not in chache then calc
        if (!cachemap[x][y]) {
            cachemap[x][y] = 
                // if out of map then + 0
                (x < m - 1 ? cellFind(x + 1, y) : 0) + 
                (y < n - 1 ? cellFind(x, y + 1) : 0);
        }
        return cachemap[x][y];
    }
    
    return cellFind(0, 0);
};