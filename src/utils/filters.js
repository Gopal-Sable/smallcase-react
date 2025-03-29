export const subscriptionFilter = (data, filterFeild) => {
    if (filterFeild === "free access") {
        return data.filter((portfolio) => !portfolio.flags.private);
    } else if (filterFeild === "fee based") {
        return data.filter((portfolio) => portfolio.flags.private);
    } else {
        return data;
    }
};

export const investmentAmount = (data, amount) => {
    if (!amount) {
        return data;
    }
    return data.filter((portfolio) => portfolio.stats.minInvestAmount < amount);
};

export const volitility = (data, risk) => {
    return data.filter(
        (portfolio) => portfolio.stats.ratios.riskLabel === risk
    );
};

export const investementStrategy = (data, strategy) => {
    return data.filter((portfolio) => {
        // return (
        //     portfolio.info.investmentStrategy.find(({ key }) => {
        //         key === strategy;
        //     }) !== undefined
        // );
       
            return portfolio.info.investmentStrategy.find(({ key }) => key === strategy);
       
        
    });
};

export const combinedFilter = (data, filters) => {
    let filterData = data;
    if (filters.subscription) {
        filterData = subscriptionFilter(filterData, filters.subscription);
    }
    if (filters.investmentAmount) {
        filterData = investmentAmount(filterData, filters.investmentAmount);
    }
    if (filters.volitility) {
        filterData = volitility(filterData, filters.volitility);
    }
    if (filters.investementStrategy) {
        filterData = investementStrategy(
            filterData,
            filters.investementStrategy
        );
    }
    return filterData;
};
