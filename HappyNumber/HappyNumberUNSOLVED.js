//202. Happy Number

//Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

let n = 81;

/*const isHappy = function(n) 
{
    let numArray = [];
    let number = n.toString();
    let total;
    number = number.split('');
    total = (number[0] * number[0]) + (number[1] * number[1]);
    console.log(total)
    
    while (total !== 0 || total !== 1)
    {
        total = (number[0] * number[0]) + (number[1] * number[1]);
        total = total.toString();
        total = total.split('');
    }
    
    if (total == 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}*/


const isHappy = function(n) 
{
    let soon = new Set()
    while (n !== 1)
    {
        sum = 0
        while(n > 0)
        {
            sum += (n%10) * (n%10);
            n = Math.floor(n/10);
        }
        if(seen.has(sum))
        {
            return false;
        }
        else
        {
            seen.add(sum)
            n = sum;
        }
    }
    return true;
}

console.log(Math.floor(68 / 10));

// https://www.youtube.com/watch?v=5nDKeS4v268&t=129s&ab_channel=devalex (i just copied his solution)