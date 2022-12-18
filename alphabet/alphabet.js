//Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
// Define an alphabet array
// firstLetter = alphabet[Math.floor(columnNumber/26) - 1]
// secondLetter = alphabet[(columnNumber % 26) - 1]


var convertToTitle = function(columnNumber) 
{
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let firstLetter = '';
    let secondLetter = '';

    if (columnNumber > 27)
    {
        firstLetter = alphabet[Math.floor(columnNumber/26) - 1]
    }

    secondLetter = alphabet[(columnNumber % 26) - 1]
    let finalAnswer = firstLetter + secondLetter;
    return finalAnswer;
}   
console.log(convertToTitle(700))