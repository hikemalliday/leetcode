/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
-Open brackets must be closed by the same type of brackets.
-Open brackets must be closed in the correct order.
-Every close bracket has a corresponding open bracket of the same type. */

//if starting from beggining, bracket must be right facing
//if starting for end, bracket must be left facing


var isValid = function(s) 
{ 
    let compareArray = [];
    for (let i = 0; i < s.length; i++)
    {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[')
        {
            compareArray.push(s[i])
        }
    }
};