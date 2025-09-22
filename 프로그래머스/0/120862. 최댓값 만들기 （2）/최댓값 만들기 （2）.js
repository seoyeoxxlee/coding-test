function solution(numbers) {
    numbers.sort((a, b) => a - b);
    const n = numbers.length;
    
    const candidate1 = numbers[n-1] * numbers[n-2];
    const candidate2 = numbers[0] * numbers[1];
    
    return Math.max(candidate1, candidate2);
}