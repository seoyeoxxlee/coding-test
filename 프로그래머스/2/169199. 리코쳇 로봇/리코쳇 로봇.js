function solution(board) {
    const h = board.length;
    const w = board[0].length;
    const visited = Array.from({ length: h }, () => Array(w).fill(false));

    let start, goal;

    // R과 G 위치 찾기
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (board[i][j] === 'R') start = [i, j];
            if (board[i][j] === 'G') goal = [i, j];
        }
    }

    const dirs = [
        [-1, 0], // 위
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [0, 1]   // 오른쪽
    ];

    const queue = [[...start, 0]];
    visited[start[0]][start[1]] = true;

    while (queue.length) {
        const [x, y, count] = queue.shift();

        if (x === goal[0] && y === goal[1]) return count;

        for (const [dx, dy] of dirs) {
            let nx = x;
            let ny = y;

            // 벽이나 장애물(D) 만나기 전까지 이동
            while (true) {
                const tx = nx + dx;
                const ty = ny + dy;

                if (
                    tx >= 0 && tx < h &&
                    ty >= 0 && ty < w &&
                    board[tx][ty] !== 'D'
                ) {
                    nx = tx;
                    ny = ty;
                } else {
                    break;
                }
            }

            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx, ny, count + 1]);
            }
        }
    }

    return -1; // 도달 불가능
}
