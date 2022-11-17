//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
//Return the linked list sorted as well.

//For loop over array to find duplicates
//Push duplicates into empty array
//Return original array

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


/*let a = [1, 2, 5, 2, 1, 8];
a.sort();
console.log(a);*/