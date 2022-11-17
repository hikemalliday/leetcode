//Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

//you could divde by 26 and Math.floor. Add an extra A on the front answer (ex, 2 = AAA)
// 27 would be... AA
// 27 divded by 26 = 1


//Divide columnNumber by 26 to get extraA count
//Column number % 26 to get letter
//concatenate amount of extraA's to front of letter

/*var convertToTitle = function(columnNumber) 
{
    let extraA = 0;
    let frontTag = '';
    let counter = 0;
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    //Divide columnNumber by 26 to determine extra A count
    extraA = (Math.floor(columnNumber / 26));
    //Get modulo to determine "counter"
    counter = columnNumber % 26;
    //conditional for extraA
    console.log(extraA)
    if (extraA !== 0)
    {
        for (i = 0; i < extraA; i++)
        {
            frontTag = frontTag +'A'
        }
        return [`${frontTag}${letters[counter - 1]}`]
    } 
    else
    {
    return letters[counter - 1]
    }
};



console.log(convertToTitle(500));*/


//SOLVE IT AGAIN FOR FUN

//168. Excel Sheet Column Title

//Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
//A thru Z is 26 characters. Starting on AA, it is 27. Therefor, I need to work in multiples of 26.
//Divide columnNumber by 26, use Math.floor to determine how many letters are added to the front
//If Math.floor(columnNumber / 0) == 0, then output = alphabet[columnNumber - 1]
//extraLetter equals == 0 (if extraLetter == 0, do nothing);
//If Math.floor(columnNumber / 0) == 1, then output = extraLetter + alphabet[columnNumber - 1]
//extraLetter equals == 1 (extraLetter == alphabet[extraLetter - 1])
//What happens if extra letter equals 27? Well I dont know how to do that so lets just do max of columnNumber 701


const convertToTitle = function(columnNumber) 
{
    let extraLetter;
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    extraLetter = Math.floor(columnNumber / 26);
    modulo = columnNumber % 26;

    if (extraLetter == 0)
    {
        return alphabet[columnNumber - 1]
    }

    extraLetter = alphabet[extraLetter - 1];
    let result = alphabet[modulo - 1];

    let final = extraLetter + result;
    return final;
};

console.log(convertToTitle(702));

