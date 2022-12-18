//Given an array that represents an integer, return that integer + 1, but also represented as an array.

// Start a reverse 'for' loop
// If [i] == 9, [i] = 0
// If [i] !== 9, [i]++. return 'array'

array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array2 = [9, 9, 9, 9, 9, 9, 9, 9, 9];
array3 = [1, 2, 5];
array4 = [2, 9, 9];
array5 = [1, 8, 8];
array6 = [9, 9, 9, 9, 9, 9]

const plusOne = function(array)
{  
   for (let i = array.length -1; i >= 0; i--)
   {
        console.log(array)
        if (array[i] === 9)
        {
            array[i] = 0
            
        }
        if (array[i] !== 9 && array[i] !== 0)
        {
            array[i]++
            return array;
        }
   }    
   array.unshift(1)
   return array;
}

console.log(plusOne(array6));

       