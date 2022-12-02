 const moduloPractice = function (num)
 {  //Define an empty array:
     var digits = [];

     while (num > 0) 
     {  //Modulo % 10 leaves the final number remaning
        digits.unshift(num % 10);
        console.log("digits: " + digits);
        num = Math.floor(num / 10);
        console.log("num: " + num);
    }
    return digits;
};


console.log(moduloPractice(123456));
console.log(123456 % 100);





