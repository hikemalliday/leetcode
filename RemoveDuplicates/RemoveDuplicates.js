//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
//Return the linked list sorted as well.
//Remove the duplicates from the array

// Create an empty array


let a = [1, 2, 5, 2, 1, 8];

const deleteDuplicates = function(array)
{
  let newArray = []
  for (let i = 0; i < array.length; i++)
  {
    if (newArray.indexOf(array[i]) == -1)
    {
        newArray.push(array[i])
    }
  }
  return newArray;
}

console.log(deleteDuplicates(a));
