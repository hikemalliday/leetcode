//Return the indexis of the two numbers in the array that equal the target

array = [1, 2, 3];
target = 5;

const twoSum = function(nums, target)
{
    for (let i = 0; i < nums.length; i++)
    {
        for (let j = 1; j < nums.length; j++)
        {
            if (nums[i] + nums[j] == target)
            {
                return [i, j]
            }
        }
    }
}   

console.log(twoSum(array, target));
