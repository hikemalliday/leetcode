//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
//Return the linked list sorted as well.

//Remove the duplicates from the array



let a = [1, 2, 5, 2, 1, 8];

const deleteDuplicates = function(array)
{
  let b = [];
  for (let i = 0; i < array.length; i++)
  {
    if (b.indexOf(array[i]) == -1)
    b.push(array[i]);
  }
  return b;
}

console.log(deleteDuplicates(a));
