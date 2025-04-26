function solution(number, limit, power) {
    let answer = 0;

    for (let i = 1; i <= number; i++) {
        let numberOfFactors = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                numberOfFactors++; // j는 약수
                if (j !== i / j) { 
                    numberOfFactors++; // (i / j)도 약수 (j와 다르면 추가)
                }
            }
        }

        if (numberOfFactors <= limit) {
            answer += numberOfFactors;
        } else {
            answer += power;
        }
    }

    return answer;
}
