//CHALLENGE 1: REVERSE A STRING
//Return a string in reverse
//ex. reverseString('hello') === 'olleh'

// ' return 'Let\'s Start' '
let word = 'hello'

function reverseString(str)
{
    let result = [];
    for (let i = str.length - 1; i >= 0; i--)
    {
        result.push(str[i])
    }
    return result.join('');
}

//CHALLENGE 2: VALIDATE A PALINDROME
//Return true is palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str)
{
    let compare = '';
    for (let i = str.length - 1; i >= 0; i--)
    {
        compare = str[i] + compare;
    }
    
    
    console.log(compare, str)
    if (compare == str)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}


// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125


intger = 123456789

function reverseInt(int) 
{
    int.reverse();
    return int;
}

console.log(reverseInt(intger));








