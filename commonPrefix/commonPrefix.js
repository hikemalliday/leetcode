// Find the common substring / prefix

let strs = ["flow","flower","flight"];

var longestCommonPrefix = function(strs) 
{  // Define 'prefix' as strs[0]
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++)
    {
        if (strs.indexOf(prefix) !== 0)
        {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix;
    
    
};

console.log(longestCommonPrefix(strs))