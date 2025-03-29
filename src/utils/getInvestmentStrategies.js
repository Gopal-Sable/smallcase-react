export const getInvestmentStartegies = (data) => {
    let investStrategyList = data.reduce((res, investmentStrategy) => {
        investmentStrategy.info.investmentStrategy.forEach((strategy) => {
            if (!res[strategy.key]) {
                res[strategy.key] = strategy;
            }
        });
        return res;
    }, {});
    return Object.values(investStrategyList).sort((a, b) => {
        const nameA = a.key.toUpperCase(); 
        const nameB = b.key.toUpperCase(); 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });
};
