//Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
//firstLetter = alphabet[Math.floor(columnNumber/26) - 1]
//secondLetter = alphabet[columnNumber%26 - 1]


var convertToTitle = function(columnNumber) 
{
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let firstLetter = '';
    let secondLetter = '';
    let finalAnswer;

    if (Math.floor(columnNumber/26) > 0)
    {
        firstLetter = alphabet[Math.floor(columnNumber/26) -1];
        
    }

    secondLetter = alphabet[(columnNumber%26) - 1];
    finalAnswer = firstLetter + secondLetter;
    
    return finalAnswer;
}  
console.log(convertToTitle(700));