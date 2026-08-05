function knightMoves([x, y], [a, b]) {
    if (a < 0 || a > 7  || b < 0 || b > 7 || x < 0 || x > 7 || y < 0 || y > 7) {
        throw new Error("All coordinates must be valid.");
    }
    let path = [[currentRow, currentCol]];
    let currentRow = y;
    let currentCol = x;
    let targetRow = a;
    let targetCol = b;
    let queue = [];
    const moves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];


}
