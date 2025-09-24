function solution(n) {
    for (let i=1; i<=1000; i++) {
        if (n / i === i && n % i === 0) {
            return 1;
        }
    }
    return 2;
}