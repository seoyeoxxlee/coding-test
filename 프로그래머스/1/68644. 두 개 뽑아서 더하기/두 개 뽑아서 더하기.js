function solution(numbers) {
    const available = [];
    
    for (let i=0; i<numbers.length-1; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            available.push(numbers[i] + numbers[j]);
        }
    }
    const answer = [...new Set(available)];
    return answer.sort((a, b) => a - b);
}