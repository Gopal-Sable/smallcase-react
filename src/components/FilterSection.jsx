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
        setFilters((prev) => {
            let newfilter = {};
            if (
                feild === "subscription" ||
                feild === "investmentAmount" ||
                feild === "newLaunch"
            ) {
                newfilter = {
                    ...prev,
                    [feild]: value === null ? [] : [value],
                };
            } else if (
                feild === "volatility" ||
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
            <Filter title={filtersConfigs[0].title}>
                <div className={filtersConfigs[0].classes}>
                    {filtersConfigs[0].filtersOptions.map(
                        ({ displayValue, value }) => {
                            return (
                                <Button
                                    key={displayValue}
                                    name={displayValue}
                                    handleClick={() =>
                                        changeFilter(
                                            filtersConfigs[0].filter,
                                            value
                                        )
                                    }
                                    active={
                                        filters.subscription.includes(value) ||
                                        (value === null &&
                                            filters.subscription.length === 0)
                                    }
                                />
                            );
                        }
                    )}
                </div>
            </Filter>
            <Filter title={filtersConfigs[1].title}>
                <div className={filtersConfigs[1].classes}>
                    {filtersConfigs[1].filtersOptions.map(
                        ({ displayValue, value }) => {
                            return (
                                <RadioButton
                                    key={displayValue}
                                    name={displayValue}
                                    handleClick={() =>
                                        changeFilter(
                                            filtersConfigs[1].filter,
                                            value
                                        )
                                    }
                                    isChecked={
                                        filters.investmentAmount.includes(
                                            value
                                        ) ||
                                        (value === null &&
                                            filters.investmentAmount.length ===
                                                0)
                                    }
                                />
                            );
                        }
                    )}
                </div>
            </Filter>
            <Filter title={filtersConfigs[2].title}>
                <div className={filtersConfigs[2].classes}>
                    {filtersConfigs[2].filtersOptions.map(
                        ({ displayValue, value }) => {
                            return (
                                <Button
                                    key={displayValue}
                                    name={displayValue}
                                    handleClick={() =>
                                        changeFilter(
                                            filtersConfigs[2].filter,
                                            value
                                        )
                                    }
                                    active={filters.volatility?.includes(value)}
                                    border={true}
                                />
                            );
                        }
                    )}
                </div>
            </Filter>
            <Filter title={filtersConfigs[3].title}>
                <div className={filtersConfigs[3].classes}>
                    {filtersConfigs[3].filtersOptions.map(
                        ({ displayValue }) => {
                            return (
                                <CheckBox
                                    key={displayValue}
                                    name={displayValue}
                                    handleClick={() =>
                                        filters.newLaunch.length === 0
                                            ? changeFilter("newLaunch", true)
                                            : changeFilter("newLaunch", null)
                                    }
                                    checked={filters.newLaunch.length !== 0}
                                />
                            );
                        }
                    )}
                </div>
            </Filter>
            <Filter title="Investment Strategy">
                <div>
                    {investStrategyList.map(({ key, displayName }) => {
                        return (
                            <CheckBox
                                key={key}
                                handleClick={() =>
                                    changeFilter("investementStrategy", key)
                                }
                                name={displayName}
                                checked={filters.investementStrategy.includes(
                                    key
                                )}
                            />
                        );
                    })}
                </div>
            </Filter>
        </aside>
    );
};

export default FilterSection;
