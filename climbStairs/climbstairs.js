//You are climbing a staircase. It takes n steps to reach the top.

//Each time you can either climb 1 or 2 steps. In how many distinct ways 
//can you climb to the top?

var maxProfit = function(prices) 
{
    let buy = 0;
    let sell = 0;

    for (let i = 0; i < prices.length; i++)
    {
        if (prices[i] < buy)
        { 
            buy = prices[i]
        }
    }
    for (let i = buy; i < prices.length; i++)
    {
        if (prices[i] > sell)
        {
            sell = prices[i]
        }
    }
};