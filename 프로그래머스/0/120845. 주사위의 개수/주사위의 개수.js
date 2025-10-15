function solution(box, n) {
    let answer = 1;
    for (let b of box) {
        answer *= Math.floor(b / n);
    }
    return answer;
}