//125. Valid Palindrome
//A phrase is a palindrome if, after converting all uppercase letters into lowercase 
//letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
//Alphanumeric characters include letters and numbers.

//Given a string s, return true if it is a palindrome, or false otherwise.

//Start by using split() to remove all unwanted chars that arent letters, and to compress the words into a single 'blob'
//After string is split into a 'blob,' save it to a variable then reverse it with the reverse() method, or with the push() method.
//Save reversed or pushed string as a new variable.
//Compare first variable with second variable. If truthy, return TRUE;

// s = s.replace(/[^a-z0-9]/gi,"")

Input: s = "A man, a plan, a canal: Panama"

const isPalindrome = function(s) 
{
    let newString = ' '
    for (let i = s.length - 1; i > 0; i--)
    {
        newString.push(s[i])
    }
    console.log(newString)
};


console.log(isPalindrome(s));