function solution(nums) {
    const numSet = new Set(nums);
    const maxNum = nums.length / 2;
    return Math.min(numSet.size, maxNum);
}