/**
 * Example of space complexity O(n^2)
 */

function createMatrix(n) {
    const matrix = [];
    for(let i = 0; i< n; i++){
        matrix[i] = [];
        for(let j = 0; j< n; j++){
            matrix[i][j] = i + j + 1;
        }
    }
    return matrix;
}

console.log(createMatrix(1));
console.log(createMatrix(3));