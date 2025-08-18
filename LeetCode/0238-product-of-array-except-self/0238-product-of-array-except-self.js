var productExceptSelf = function(nums) {
    const answer = [];
    answer[0] = 1;

    if (nums.length === 0) return [];

    // left side
    for (let i=1; i<nums.length; i++) {
        answer[i] = answer[i-1] * nums[i-1];
    }
    // right side
    let right = 1;
    for (let i=nums.length-1; i>=0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }
    return answer;
};
