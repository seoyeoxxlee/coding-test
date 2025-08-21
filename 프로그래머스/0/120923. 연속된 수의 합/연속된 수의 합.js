function solution(num, total) {
    var answer = [];
    let n = 0;
    for (let i=0; i<num; i++) {
        n += i;
    }
    // 시작값 x
    let x  = (total - n) / num;
    console.log(x);
    
    while (answer.length !== num) {
        answer.push(x);
        x++;
    }
    return answer;
}