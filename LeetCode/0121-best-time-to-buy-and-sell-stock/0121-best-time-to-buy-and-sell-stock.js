var maxProfit = function(prices) {
    let lowestBuy = Infinity;
    let maxProfit = 0;

    for (const p of prices) {
        if (p < lowestBuy) lowestBuy = p;
        else maxProfit = Math.max(maxProfit, p-lowestBuy);
    }
    return maxProfit;
};
