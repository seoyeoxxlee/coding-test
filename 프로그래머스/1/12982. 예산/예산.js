function solution(d, budget) {
    d = d.sort((a, b) => a - b);
    let count = 0;
    
    for (let i=0; i<d.length; i++) {
        if (budget >= d[i]) {
            budget -= d[i];
            count++;
        } else {
            break;
        }
    }
    return count;
}