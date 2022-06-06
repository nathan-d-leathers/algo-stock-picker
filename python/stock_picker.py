def picker(prices):
    profit_chances = []
    day_combos = []
    prices_two = prices.copy()
    answer = [prices[1] - prices[0]]
    for x in prices:
        profit = prices[1] - prices[0]
        prices_two.pop(0)
        for y in prices_two:
            value = int(y) - int(x)
            if int(value) > int(profit):
                profit = value
                answer = [x, y]
        profit_chances.append(profit)
        day_combos.append(answer)
    biggest_return = max(profit_chances)
    index_holder = profit_chances.index(biggest_return)
    buy_sell = day_combos[int(index_holder)]
    buy = prices.index(int(buy_sell[0]))
    sell = prices.index(int(buy_sell[1]))
    return [buy,sell]
