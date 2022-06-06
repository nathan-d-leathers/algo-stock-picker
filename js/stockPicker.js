exports.picker = function(prices) {
    let profitChances = []
    let dayCombos = []
    let value = [prices[1] - prices[0]]
    let pricesTwo;
    let profit = 0;
    let answer = [prices[1],prices[0]]
    pricesTwo = prices.slice(0)
    
    for (let i = 0; i<prices.length; i++) {
      pricesTwo.shift()
      for (let j = 0; j<pricesTwo.length; j++) {
        profit = pricesTwo[j] - prices[i];
        if (profit > value) {
          value = profit;
          answer = [prices[i],pricesTwo[j]]
        }
      } 
      profitChances.push(value);
      dayCombos.push(answer);
    }
    let biggestReturn = Math.max(...profitChances)
    let indexHolder = profitChances.indexOf(biggestReturn)
    let buySell = dayCombos[(indexHolder)]
    let buy = prices.indexOf(buySell[0])
    let sell = prices.indexOf(buySell[1])
    return [buy,sell]
  }

