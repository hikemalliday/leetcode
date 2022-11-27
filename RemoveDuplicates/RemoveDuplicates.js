//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
//Return the linked list sorted as well.

//For loop over array to find duplicates
//Push duplicates into empty array
//Return original array
/*

input = [1, 1, 2];

const deleteDuplicates = function(head)
{
    let duplicates = [];
    for (let i = 0; i < head.length; i++)
    {
       for (let j = head.length - 1; j > 0; j--)
        {
            if (head[i] == head[j])
            {
                duplicates.push(head[i])
                console.log(duplicates)
                
            }
        }
    }
    return duplicates;
};

console.log(deleteDuplicates(input));
*/


/*let a = [1, 2, 5, 2, 1, 8];
a.sort();
console.log(a);*/

//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
//Return the linked list sorted as well.





//Create empty array to dump things into / compare to. Go over each item in the array and see if it exists in the array.
//If item does not exist in the new stack, then push it in there. If it DOES exist, then do nothing.

/*
let a = [1, 2, 5, 2, 1, 8];


const deleteDuplicates = function(array)
{
    //Obviously we need to create an empty array to dump into
    let b = [];
    //Start a for loop
    for (let i = 0; i < array.length; i++)
    {   //Compare the array elements to the empty array. If they do NOT exist in the empty array (meaning -1), then you push them into the empty array. Simple as that! <3
        if(b.indexOf(array[i]) == -1)
        {
            b.push(array[i])
        }
    }
    //Return the new array! Its just so easy...
    return b;
};

console.log(deleteDuplicates(a));
*/


//Remove the duplicates from the array

//First we need to create an empty array inside the function

let a = [1, 2, 5, 2, 1, 8];

const deleteDuplicates = function(array)
{
  
}

console.log(deleteDuplicates(a));
