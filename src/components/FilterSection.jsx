import React from "react";

const FilterSection = ({
    filters,
    setFilters,
    investStrategyList,
    clearAllfilters,
}) => {
    const changeFilter = (feild, value) => {
        setFilters((prev) => {
            let newfilter = {};
            if (feild === "subscription" || feild === "investmentAmount") {
                newfilter = {
                    ...prev,
                    [feild]: value === null ? [] : [value],
                };
            } else if (
                feild === "volitility" ||
                feild === "investementStrategy"
            ) {
                newfilter = {
                    ...prev,
                    [feild]: prev[feild].includes(value)
                        ? prev[feild].filter((portfolio) => portfolio !== value)
                        : [...prev[feild], value],
                };
            }
            return newfilter;
        });
    };
    return (
        <aside className="text-gray-600 py-2 px-3 w-58">
            <div className="border-b flex justify-between">
                <div className="flex my-2">
                    <p className="mr-2">Filter</p>
                    <span className="px-2 rounded-md bg-gray-200 h-fit">
                        {Object.keys(filters).reduce((sum, data) => {
                            return sum + filters[data].length;
                        }, 0)}
                    </span>
                </div>
                <button
                    className="text-blue-600 font-semibold text-sm hover:text-blue-500 cursor-pointer"
                    onClick={clearAllfilters}
                >
                    Clear All
                </button>
            </div>
            <div className=" font-semibold my-2 py-2">
                <h2>Subscription Type</h2>
                <div className="text-sm flex justify-between my-1 text-wrap">
                    <button
                        className={`border rounded-l-md p-2 ${
                            filters.subscription.length === 0
                                ? "border-blue-400"
                                : ""
                        }`}
                        onClick={() => {
                            changeFilter("subscription", null);
                        }}
                    >
                        Show all
                    </button>
                    <button
                        className={`border-y p-2 ${
                            filters.subscription.includes("free access")
                                ? "border-blue-400"
                                : ""
                        }`}
                        onClick={() =>
                            changeFilter("subscription", "free access")
                        }
                    >
                        Free access
                    </button>
                    <button
                        className={`border p-2 rounded-r-md ${
                            filters.subscription.includes("fee based")
                                ? "border-blue-400"
                                : ""
                        }`}
                        onClick={() =>
                            changeFilter("subscription", "fee based")
                        }
                    >
                        Fee based
                    </button>
                </div>
            </div>
            <div className="my-2 py-2">
                <h2 className="font-semibold">Investment Amount</h2>
                <div className="text-sm my-1 text-wrap">
                    <div className="my-1">
                        <input
                            type="radio"
                            name="invest-amount"
                            id="Any"
                            checked={filters.investmentAmount.length === 0}
                            onChange={() =>
                                changeFilter("investmentAmount", null)
                            }
                        />
                        <label className="ml-2" htmlFor="Any">
                            Any
                        </label>
                    </div>
                    <div className="my-1">
                        <input
                            type="radio"
                            name="invest-amount"
                            id="5000"
                            checked={filters.investmentAmount.includes(5000)}
                            onChange={() =>
                                changeFilter("investmentAmount", 5000)
                            }
                        />
                        <label className="ml-2" htmlFor="5000">
                            Under ₹ 5000
                        </label>
                    </div>
                    <div className="my-1">
                        <input
                            type="radio"
                            name="invest-amount"
                            id="25000"
                            checked={filters.investmentAmount.includes(25000)}
                            onChange={() =>
                                changeFilter("investmentAmount", 25000)
                            }
                        />
                        <label className="ml-2" htmlFor="25000">
                            Under ₹ 25000
                        </label>
                    </div>
                    <div className="my-1">
                        <input
                            type="radio"
                            name="invest-amount"
                            id="50000"
                            checked={filters.investmentAmount.includes(50000)}
                            onChange={() =>
                                changeFilter("investmentAmount", 50000)
                            }
                        />
                        <label className="ml-2" htmlFor="50000">
                            Under ₹ 50000
                        </label>
                    </div>
                </div>
            </div>
            <div className=" my-2 py-2">
                <h2 className="font-semibold">Volatility</h2>
                <div className="flex justify-between">
                    <button
                        className={`border rounded-sm p-2.5 ${
                            filters.volitility.includes("Low Volatility")
                                ? "border-blue-500"
                                : "border-gray-400 "
                        }`}
                        onClick={() =>
                            changeFilter("volitility", "Low Volatility")
                        }
                    >
                        Low
                    </button>
                    <button
                        className={`border rounded-sm p-2.5 ${
                            filters.volitility.includes("Medium Volatility")
                                ? "border-blue-500"
                                : "border-gray-400 "
                        }`}
                        onClick={() =>
                            changeFilter("volitility", "Medium Volatility")
                        }
                    >
                        Medium
                    </button>
                    <button
                        className={` border rounded-sm p-2.5 ${
                            filters.volitility.includes("High Volatility")
                                ? "border-blue-500"
                                : "border-gray-400 "
                        }`}
                        onClick={() =>
                            changeFilter("volitility", "High Volatility")
                        }
                    >
                        High
                    </button>
                </div>
            </div>
            <div className="my-2 py-2">
                <h2 className="font-semibold">Launch Date</h2>
                <div className="my-1">
                    <input type="checkbox" name="new-launch" id="new-launch" />
                    <label className="ml-2" htmlFor="new-launch">
                        Include new smallcases
                    </label>
                </div>
            </div>
            <div className="my-2 py-2">
                <h2 className="font-semibold">Investment Strategy</h2>
                <div>
                    {
                        investStrategyList.map(({ key, displayName }) => {
                            return (
                                <div key={key} className="my-1">
                                    <input
                                        type="checkbox"
                                        name={key}
                                        id={key}
                                        checked={filters.investementStrategy.includes(
                                            key
                                        )}
                                        onChange={() =>
                                            changeFilter(
                                                "investementStrategy",
                                                key
                                            )
                                        }
                                    />
                                    <label className="ml-2" htmlFor={key}>
                                        {displayName}
                                    </label>
                                </div>
                            );
                        })

                        // })
                    }
                </div>
            </div>
        </aside>
    );
};

export default FilterSection;
