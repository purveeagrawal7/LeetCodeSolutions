var maxSubArray = function(nums) {
    var maxSum= Number.NEGATIVE_INFINITY;
    var sum = Number.NEGATIVE_INFINITY;
    if(nums.length == 1){
        return nums[0];
    }
    for(let i =0; i<nums.length;i++){
        sum = sum+nums[i];
        if(sum < nums[i]){
            sum = nums[i]
        }
        if(sum > maxSum){
            maxSum = sum;
        }
    }
    return maxSum;
};
