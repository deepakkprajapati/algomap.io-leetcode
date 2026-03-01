/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Time:    O(Nlog(n))
 * Space:   O(N)
 */
var func = function(matrix) {
    if(!matrix.length) return matrix;
    let s = matrix.length;
    //------------- better (gemini) approach
    
    //------------ my approach
    let res = create2DArray(s, s);
    for (let i = 0; i < s; i++) {
        for (let j = 0, m = s - 1; j < s; j++, m--) {
            // copying bottom left(going upwards) to top left(going normwal)
            // The element from the bottom of the current column becomes 
            // the element at the start of the current row.
            res[i][j] = matrix[m][i];
        }
    }
    // create 2d array with 0
    function create2DArray(rows, columns) {
        // Creates an array of 'rows' length, each containing an array of 'columns' length
        // return Array.from({ length: rows }, () => new Array(columns).fill(0));
        let array = [];
        for (let i = 0; i < rows; i++) {
            array[i] = [];
            for (let j = 0; j < columns; j++) array[i][j] = 0; // Initialize with zeros}
        }return array;
    }
    // Copy the rotated result back into the original matrix reference
    for (let i = 0; i < res.length; i++) {
        matrix[i] = res[i];
    }
    return matrix
};
/**
 * Local testing
 */
function test() {
    console.log(func( [[1,2,3],[4,5,6],[7,8,9]] )+" correct is "+ [[7,4,1],[8,5,2],[9,6,3]] );     
    console.log(func( [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]] )+" correct is "+ [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]] );         
}
test();