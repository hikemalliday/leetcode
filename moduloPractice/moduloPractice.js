 const moduloPractice = function (num)
 {
     var digits = [];
     while (num > 0) 
     {
        digits.unshift(num % 10);
        console.log("digits: " + digits);
        num = Math.floor(num / 10);
        console.log("num: " + num);
    }
    return digits;
};


console.log(moduloPractice(123456));





