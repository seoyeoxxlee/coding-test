function solution(my_string, n) {
    let answer = "";
    for (const s of my_string) {
        for (let i=0; i<n; i++) {
            answer += s;
        }
    }
    return answer;
}