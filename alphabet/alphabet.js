//Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

//Need to determine if an 'extraLetter' is required. This is done by: Math.floor(columnNumber/26). If answer is 0, then no extraLetter is required.
//if '0', secondLetter = alphabet[columnNumber];

//if >= 1, extraLetter = alphabet[]
//  secondLetter = columnNumber % 26

// finalAnswer = extraLetter + secondLetter;


var convertToTitle = function(columnNumber) 
{
  
}  
console.log(convertToTitle(700));