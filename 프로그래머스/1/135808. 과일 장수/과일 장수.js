function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let answer = 0;
    
    if (score.length < m) return 0;
    
    for (let i=m-1; i<score.length; i+=m) {
        answer += score[i] * m;
    }
    return answer;
}

