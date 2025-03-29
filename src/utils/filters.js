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

export const volitility = (data, risk) => {
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
