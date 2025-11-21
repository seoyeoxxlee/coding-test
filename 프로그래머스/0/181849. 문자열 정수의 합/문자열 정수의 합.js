function solution(num_str) {
    return [...num_str].reduce((sum, digit) => sum + Number(digit), 0);
}