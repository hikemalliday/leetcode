//You are given the heads of two sorted linked lists list1 and list2.

//Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

//Return the head of the merged linked list.

list1 = [1,2,4];
list2 = [1,3,4];

let mergeTwoLists = function(list1, list2)
{ 
    let merger = [...list1, ...list2]
    return merger;
    
}

console.log(mergeTwoLists(list1, list2));