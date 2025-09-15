function solution(n) {
    const arr = n.toString().split("").map(Number);
    let sum = 0;
    
    for (let n of arr) {
        sum += n;
    }
    return sum;
}