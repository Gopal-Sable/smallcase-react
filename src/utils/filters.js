import filter from "daisyui/components/filter";

export const subscriptionFilter = (data, filterFeild) => {
    if (filterFeild.includes("free access")) {
        return data.filter((portfolio) => !portfolio.flags.private);
    } else if (filterFeild.includes("fee based")) {
        return data.filter((portfolio) => portfolio.flags.private);
    } else {
        return data;
    }
};

export const investmentAmount = (data, amount) => {
    if (amount.length === 0) {
        return data;
    }
    return data.filter(
        (portfolio) => portfolio.stats.minInvestAmount < amount[0]
    );
};

export const volatility = (data, risk) => {
    if (risk.length === 0) {
        return data;
    }
    return data.filter((portfolio) =>
        risk.includes(portfolio.stats.ratios.riskLabel)
    );
};

export const investementStrategy = (data, strategy) => {
    return strategy.length === 0
        ? data
        : data.filter((portfolio) => {
              return (
                  portfolio.info.investmentStrategy.find(({ key }) =>
                      strategy.includes(key)
                  ) !== undefined
              );
          });
};

const newLaunch = (data, filter) => {
    if (filter.length === 0) {
        return data;
    }

    return data.filter((portfolio) => {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

        return new Date(portfolio.info.nameAttributes.createdAt).getFullYear >= oneYearAgo;
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
    if (filters.volatility) {
        filterData = volatility(filterData, filters.volatility);
    }
    if (filters.investementStrategy) {
        filterData = investementStrategy(
            filterData,
            filters.investementStrategy
        );
    }
    if (filter.newLaunch) {
        filterData = newLaunch(filterData, filter.newLaunch);
    }
    return filterData;
};
