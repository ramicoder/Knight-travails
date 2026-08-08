const rowDelta = [2, 2, 1, -1, -2, -2, -1, 1];
const colDelta = [1, -1, -2, -2, -1, 1, 2, 2];

let parent = {};
function knightMoves([x, y], [a, b]) {
    let target = [a, b];
    let visited = [];
    let queue = [[x, y]];

    visited.push([x, y]);

    while (queue.length > 0) {
        let current = queue.shift();

        if (current[0] === target[0] && current[1] === target[1]) {
            break;
        }
        for (let i = 0; i < 8; i++) {
            let newRow = current[0] + rowDelta[i];
            let newCol = current[1] + colDelta[i];

            if (isValid(newRow, newCol) && !(visited.find(vertex => vertex[0] === newRow && vertex[1] === newCol))) {
                queue.push([newRow, newCol]);
                visited.push([newRow, newCol]);
                parent[`${newRow},${newCol}`] = current;
            }
        }
    }
        let current = target;
        let path = [];
        while (parent[`${current[0]},${current[1]}`]) {
            path.push(current);
            current = parent[`${current[0]},${current[1]}`];
        }
        if (path.length > 0) path.push([x, y]);
        return path.reverse();

}

function isValid(row, col) {
    return row >= 0 && row <= 7 && col >= 0 && col <= 7;
}
let path = knightMoves([0,0], [1,7]);

console.log(path);
console.log(`Knight moved ${path.length - 1} times!`)