//Given a sorted array of distinct integers and a target value, return the index if the target is found.
//If not, return the index where it would be if it were inserted in order.

nums = [1, 3, 5, 6];

//For loop
//If nums[i] == target, return [i]
//Conditional: if (nums[i] is > target) return [i - 1]


//nvm mine sucks doesnt work//

var searchInsert = function(nums, target) 
{
    for (i = nums.length - 1; i > 0; i--)
    {
        if (nums[i] == target)
        {
            return [i];
        }
        if (nums[i] < target)
        {
            break;
        }
        if (nums[i] > target)
        {
            return 0;
        }
    }
    return nums.length;
};

console.log(searchInsert(nums, 2));

//Coding David solved cleaner:

var searchInsert2 = function(nums, target)
{
    for (let i = 0; i < nums.length; i++)
    {
        if (nums[i] >= target)
        {
            return i;
        }
    }
    return nums.length;
}

