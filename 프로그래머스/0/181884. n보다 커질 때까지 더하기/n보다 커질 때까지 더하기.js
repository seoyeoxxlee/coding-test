function solution(numbers, n) {
    sum = 0;
    for (num of numbers) {
        sum += num;
        if (sum > n) {
            return sum;
        }
    }
}