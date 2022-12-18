//Given an integer array nums sorted in non-decreasing order, 
//remove the duplicates in-place such that each unique element appears only once. 
//The relative order of the elements should be kept the same.

//Since it is impossible to change the length of the array in some languages, 
//you must instead have the result be placed in the first part of the array nums.
//More formally, if there are k elements after removing the duplicates, then the first k elements of nums 
//should hold the final result. It does not matter what you leave beyond the first k elements.

nums1 = [1,1,2];
nums2 = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function(nums) 
{   //Define an empty stack
    let stack = [];
    //Loop over array, if item does not exist, then push it into stack
    for (let i = 0; i < nums.length; i++)
    {
        if (stack.indexOf(nums[i]) == -1)
        {
            stack.push(nums[i])
        }
    }    
    return stack;
}

console.log(removeDuplicates(nums2))