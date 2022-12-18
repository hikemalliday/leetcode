//Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times. 
//You may assume that the majority element always exists in the array.

// Create a hashTable to tally up the number counts


let nums1 = [3,2,3];
let nums2 = [2,2,1,1,1,2,2];

var majorityElement = function(nums) 
{ 
  let hashTable = {}
  // Iterate through the array
  for (let num of nums)
  {
    hashTable[num] = hashTable[num] + 1 || 1
  }
  
  for (let key of nums)
  {
    if (hashTable[key] > nums.length / 2)
    {
        return [key]
    }
  }
};

console.log(majorityElement(nums2));


 