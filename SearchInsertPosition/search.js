//Given a sorted array of distinct integers and a target value, return the index if the target is found.
//If not, return the index where it would be if it were inserted in order.

// If target <= nums[i], return [i]

nums = [1, 3, 5, 6];

var searchInsert = function(nums, target) 
{ 
    for (let i = 0; i < nums.length; i++)
    {
        if (target <= nums[i])
        {
            return [i]
        }
    }
    return nums.length - 1
};
console.log(searchInsert(nums, 2));
