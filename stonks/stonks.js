prices1 = [7,1,5,3,6,4];


var maxProfit = function(prices) 
{
    let buy = prices[0];
    let sell = 0;

    for (let i = 0; i < prices.length; i++)
    {
        if (prices[i] < buy)
        { 
            buy = prices[i]
            console.log(buy)
        }
    }
    for (let i = buy; i < prices.length; i++)
    {
        console.log(buy)
        if (prices[i] > sell)
        {
            sell = prices[i]
        }
    }
    return [i];
};

console.log(maxProfit(prices1));
