export const getInvestmentStartegies = (data) => {
    let investStrategyList = data.reduce((res, investmentStrategy) => {
        investmentStrategy.info.investmentStrategy.forEach((strategy) => {
            if (!res[strategy.key]) {
                res[strategy.key] = strategy;
            }
        });
        return res;
    }, {});
    return Object.values(investStrategyList);
};
