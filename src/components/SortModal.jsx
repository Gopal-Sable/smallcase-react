import React from "react";

const SortModal = ({
    sortBy,
    handleClick,
    handleOrder,
    SORT_OPTIONS,
    TIME_PERIODS,
}) => {
    return (
        <ul
            className={`absolute right-0 top-12 mt-1 bg-white rounded shadow-md z-10 p-2 w-48`}
        >
            {SORT_OPTIONS.map((option) => (
                <li
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                    className={`p-2 cursor-pointer ${
                        sortBy.sortType === option.value
                            ? "text-blue-600"
                            : "text-gray-700  hover:bg-gray-100"
                    }`}
                >
                    {option.label}
                </li>
            ))}
            <div className="mt-1 p-2 pt-1">
                <h1>Returns</h1>
                <p className="text-gray-600 text-sm">Time period</p>
                <div className="flex mt-2 border overflow-hidden rounded">
                    {TIME_PERIODS.map((time) => (
                        <button
                            key={time.value}
                            className={`p-1 text-sm overflow-hidden font-semibold ${
                                sortBy.sortType === time.value
                                    ? "text-blue-600 bg-blue-100"
                                    : "text-gray-600 hover:bg-gray-200"
                            } cursor-pointer w-full`}
                            onClick={() => handleClick(time.value)}
                        >
                            {time.label}
                        </button>
                    ))}
                </div>
                {TIME_PERIODS.find(({ value }) => value == sortBy.sortType) && (
                    <>
                        <p className="text-gray-600 mt-3 text-sm">Order by</p>
                        <div className="flex mt-1 border overflow-hidden rounded font-semibold">
                            <button
                                className={`p-1 text-sm overflow-hidden ${
                                    sortBy.orderBy === "High-Low"
                                        ? "text-blue-600 bg-blue-100"
                                        : "text-gray-600 hover:bg-gray-200"
                                } cursor-pointer w-full`}
                                onClick={() => handleOrder("High-Low")}
                            >
                                High - Low
                            </button>
                            <button
                                className={`p-1 text-sm overflow-hidden ${
                                    sortBy.orderBy === "Low-High"
                                        ? "text-blue-600 bg-blue-100"
                                        : "text-gray-600 hover:bg-gray-200"
                                } cursor-pointer w-full`}
                                onClick={() => handleOrder("Low-High")}
                            >
                                Low - High
                            </button>
                        </div>
                    </>
                )}
            </div>
        </ul>
    );
};

export default SortModal;
