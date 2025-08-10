function solution(n) {
    // n = 5
    // isPrime = [f, f, t, t, t, t];
    
    const isPrime = Array(n+1).fill(true); // false(= 소수 아님)인 걸 다 지우고, ture의 개수만 반환.
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수 아님.
    
    for (let i=2; i*i <=n; i++) { // i*i <=n      n=36 (1, 36), (2, 18)..., (3, 12)... (6, 6) -> (12, 3),
        if (isPrime[i]) {
            for (let j = i*i; j<=n; j += i) { // j= i*i => 이 전에 더 작은 소수에서 false로 지워졌기 때문에 -> 중복 방지
                //  i = 5, 5, 10, 15, 20...
                isPrime[j] = false;
            }
        }
    }
    return isPrime.filter(Boolean).length;
}