function maxPriceReached (n: number, priceChange: number []) {
    let max = 0;
    let currentPrice = 0;

    for (let index = 0; index < priceChange.length; index++) {
        currentPrice = currentPrice + priceChange[index];
        if (max < currentPrice) {
            max = currentPrice;
        }
    }
    if (max === 0) {
        max = -1;
    }
    return max;
}

console.log(maxPriceReached(7, [0, 2, 6, 7, -29, 4, -5, 6, 7, 19, -33, 99]));