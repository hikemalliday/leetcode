//Given a sorted array of distinct integers and a target value, return the index if the target is found.
//If not, return the index where it would be if it were inserted in order.



nums = [1, 3, 5, 6];

var searchInsert = function(nums, target) 
{ //Start out with a for loop:
   for (let i = 0; i < nums.length; i++)
   {
        if (nums[i] === target)
        {
            return i;
        }
        if (nums[i] > target)
        {
            return i;
        }
        if (target > nums[nums.length - 1])
        {
            return nums.length;
        }
   }

};
console.log(searchInsert(nums, 8));
