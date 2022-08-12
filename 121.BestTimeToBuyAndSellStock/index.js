import { setupNumberArray } from "../common/argumentBuilders.js";

function setupArguments(arrayString) {
    const numbers = setupNumberArray(arrayString);
    return maxProfit(numbers);
}

function maxProfit(prices) {
    let bestProfit = 0;
    
    let buyIndex = null;
    let sellIndex = null;

    for(let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];

        if(buyIndex === null || currentPrice < prices[buyIndex]) {
            buyIndex = i;
            sellIndex = null;
            continue;
        }

        if(buyIndex !== null && (sellIndex === null || currentPrice > prices[sellIndex])) {
            sellIndex = i;
            const potentialProfit = prices[sellIndex] - prices[buyIndex];
            
            if(bestProfit < potentialProfit) {
                bestProfit = potentialProfit;
            }
        }
    }

    return bestProfit;
}

export default setupArguments;