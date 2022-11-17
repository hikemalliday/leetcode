/// unsolved


let digits1 = [1,2,3];
let digits2 = [1,4,1];
let digits3 = [1,9,9];
let digits4 = [9];
var plusOne = function(digits) 
{
    for (let i = digits.length; i >= 0; i--)
    {
        if (digits[i] === 9)
        {
            digits[i] = 0;    
        }
        if (digits[i] !== 0)
        {
            digits[i] = digits[i] + 1;
        }
         if (digits[i] === 9 && i === 0)
         {
             
             digits.unshift(1);
        }
    }
    return digits;
};

console.log(plusOne(digits4));