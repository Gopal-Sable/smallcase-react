export const sortByPopularity = (data, sortBy = "") => {
    return data.sort((a, b) => {
        const rankA = a.brokerMeta.flags.popular.rank;
        const rankB = b.brokerMeta.flags.popular.rank;

        return rankA - rankB;
    });
};

export const sortByMinimumAmount = (data, sortBy = "") => {
    return data.sort(
        (a, b) => a.stats.minInvestAmount - b.stats.minInvestAmount
    );
};

export const sortByRebalnced = (data) => {
    return data.sort((a, b) => {
        const rebalanceA = new Date(a.info.lastRebalanced);
        const rebalanceB = new Date(b.info.lastRebalanced);
        return rebalanceB - rebalanceA;
    });
};

export const sortByReturns = (data, sortBy) => {
    return data.sort((a, b) => {
        const returnsOfA = a.stats.returns[sortBy.sortType];
        const returnsOfb = b.stats.returns[sortBy.sortType];
        if (returnsOfA > returnsOfb) {
            return sortBy.orderBy === "High-Low" ? -1 : 1;
        }
        if (returnsOfA < returnsOfb) {
            return sortBy.orderBy === "High-Low" ? 1 : -1;
        }
        return 0;
    });
};

export const sortData = (data, sortBy) => {
    switch (sortBy.sortType) {
        case "popularity":
            return sortByPopularity(data);
        case "minimumAmount":
            return sortByMinimumAmount(data);
        case "rebalanced":
            return sortByRebalnced(data);
        default:
            return sortByReturns(data, sortBy);
    }
};
