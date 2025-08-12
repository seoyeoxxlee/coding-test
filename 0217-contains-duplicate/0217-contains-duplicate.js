var containsDuplicate = function(nums) {
    const mySet = new Set(nums);
    return nums.length === mySet.size ? false : true;
};