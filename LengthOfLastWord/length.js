//Given a string s consisting of words and spaces, return the length of the last word in the string.
// Start a reverse 'for' loop
// If first character is '', keep looping and don't 'count'
// When letter is reached, start 'count' until '' is reached
// return 'count'

// Takeaway: '' !== ' ' (empty string does not equal 'space')


const string1 = "Hello World"
const string2 = "   fly me   to   the moon  "
const string3 = "luffy is still joyboy"

const lengthOfLastWord = function(s) 
{ 
   let counter = 0
   for (let i = s.length; i > 0; i--)
   {
    
    if (s[i] !== ' ')
    {
        counter++;
    }
    
    if (s[i] == ' ' && counter > 0)
    {
        return counter
    }
    
   }  
};

console.log(lengthOfLastWord(string1));