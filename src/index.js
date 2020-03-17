
// You should implement your task here.

module.exports = function towelSort(matrix) {
    return (
        (matrix && matrix.map((arr, i) => {
                    return i % 2 == 0 ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
                }).reduce((res, arr) => res.concat(...arr), [])) ||[]
    );
};
