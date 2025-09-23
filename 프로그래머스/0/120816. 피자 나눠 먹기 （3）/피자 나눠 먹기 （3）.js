function solution(slice, n) {
    for (let i=1; i<100; i++) {
        const pieces = slice * i;
        if (pieces >= n) return i;
    }
}