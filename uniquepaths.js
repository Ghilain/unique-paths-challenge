/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    
    // generate map
    const cachemap = Array.from({length: m}, e => Array(n));
    cachemap[m-1][n-1] = 1;
    
    function cellCalc(x, y) {
        // if not in chache then calc
        if (!cachemap[x][y]) {
            cachemap[x][y] = 
                // if out of map then + 0
                (x < m - 1 ? cellCalc(x + 1, y) : 0) + 
                (y < n - 1 ? cellCalc(x, y + 1) : 0);
        }
        return cachemap[x][y];
    }
    
    return cellCalc(0, 0);
};