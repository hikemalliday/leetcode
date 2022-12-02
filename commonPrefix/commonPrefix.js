//

let strs = ["flower","flow","flight"];

var longestCommonPrefix = function(strs) 
{   // Define our prefix and start a loop:
   let prefix = strs[0];
   
   for (let i = 1; i < strs.length; i++)
    {
            while (strs[i].indexOf(prefix) !== 0)
            {
                prefix = prefix.substring(0, prefix.length - 1)
            }
    }
    return prefix;

};

console.log(longestCommonPrefix(strs))