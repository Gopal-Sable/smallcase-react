import Filter from "./Filter";
import React from "react";
import Button from "./Button";
import RadioButton from "./RadioButton";
import CheckBox from "./CheckBox";
import { filtersConfigs } from "../utils/constantsAndUrl";

const FilterSection = ({
    filters,
    setFilters,
    investStrategyList,
    clearAllfilters,
}) => {
    const changeFilter = (feild, value) => {
        setFilters((prev) => ({
            ...prev,
            [feild]:
                feild === "subscription" ||
                feild === "investmentAmount" ||
                feild === "newLaunch"
                    ? value === null
                        ? []
                        : [value]
                    : prev[feild].includes(value)
                    ? prev[feild].filter((p) => p !== value)
                    : [...prev[feild], value],
        }));
    };

    const getFilterComponent = (feild) => {
        let component = {
            subscription: Button,
            investmentAmount: RadioButton,
            volatility: Button,
            newLaunch: CheckBox,
        };
        return component[feild];
    };

    return (
        <aside className="text-gray-600 py-2 px-3 w-58">
            <div className="border-b flex justify-between">
                <div className="flex my-2">
                    <p className="mr-2">Filter</p>
                    <span className="px-2 rounded-md bg-gray-200 h-fit">
                        {Object.keys(filters).reduce(
                            (s, d) => s + filters[d].length,
                            0
                        )}
                    </span>
                </div>
                <button
                    className="text-blue-600 font-semibold text-sm hover:text-blue-500 cursor-pointer"
                    onClick={clearAllfilters}
                >
                    Clear All
                </button>
            </div>

            {filtersConfigs.map(
                ({ title, filter: feild, classes, filtersOptions }) => {
                    const Component = getFilterComponent(feild);
                    return (
                        <Filter key={title} title={title}>
                            <div className={classes}>
                                {filtersOptions.map(
                                    ({ displayValue, value }) => (
                                        <Component
                                            key={displayValue}
                                            name={displayValue}
                                            handleClick={() =>
                                                feild === "newLaunch"
                                                    ? filters.newLaunch.length === 0
                                                        ? changeFilter(feild,true)
                                                        : changeFilter(feild,null)
                                                    : changeFilter(feild, value)
                                            }
                                            active={
                                                feild !== "newLaunch" &&
                                                (filters[feild].includes(value) ||
                                                (value === null && filters[feild].length === 0))
                                            }
                                            isChecked={
                                                feild === "newLaunch"
                                                    ? filters.newLaunch.length !== 0
                                                    : filters[feild].includes(value)
                                            }
                                            border={feild === "volatility"}
                                        />
                                    )
                                )}
                            </div>
                        </Filter>
                    );
                }
            )}

            <Filter title="Investment Strategy">
                <div>
                    {investStrategyList.map(({ key, displayName }) => (
                        <CheckBox
                            key={key}
                            handleClick={() =>
                                changeFilter("investementStrategy", key)
                            }
                            name={displayName}
                            checked={filters.investementStrategy.includes(key)}
                        />
                    ))}
                </div>
            </Filter>
        </aside>
    );
};

export default FilterSection;
