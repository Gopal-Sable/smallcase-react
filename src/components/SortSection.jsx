import React, { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const TIME_PERIODS = [
    { label: "1M", value: "monthly", displayValue: "1M Returns" },
    { label: "6M", value: "halfyearly", displayValue: "6M Returns" },
    { label: "1Y", value: "yearly", displayValue: "1Y CAGR" },
    { label: "3Y", value: "threeYear", displayValue: "3Y CAGR" },
    { label: "5Y", value: "fiveYear", displayValue: "5Y CAGR" },
];

const SORT_OPTIONS = [
    { label: "Popularity", value: "popularity" },
    { label: "Minimum Amount", value: "minimumAmount" },
    { label: "Recently Rebalanced", value: "rebalanced" },
];

const SortSection = ({ sortBy, setSortBy }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSorting = (sortType) => {
        setSortBy((prev) => ({ ...prev, sortType }));
    };

    const handleOrder = (orderBy) => {
        setSortBy((prev) => ({ ...prev, orderBy }));
    };

    // Find the selected sorting option
    const selectedOption =
        SORT_OPTIONS.find(({ value }) => value === sortBy?.sortType) ||
        TIME_PERIODS.find(({ value }) => value === sortBy?.sortType) ||
        null;

    // Determine sort order label
    const sortOrder = sortBy?.orderBy === "High-Low" ? "(H → L)" : "(L → H)";

    // const result = selectedOption ? `${sortOrder}` : "";
    return (
        <div className="w-274 flex mx-auto my-5 justify-between border-b ">
            <div className="flex gap-6 border-gray-200 pb-2">
                <a href="#" className="text-gray-500 hover:text-black">
                    Collections
                </a>
                <a href="#" className="text-blue-600 font-semibold ">
                    All smallcases
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                    Managers
                </a>
            </div>
            <div className="flex">
                <div className="relative mx-2 flex items-center border-b border-gray-400 ">
                    <button
                        // onFocus={() => setIsDropdownOpen(true)}
                        // onBlur={() => setIsDropdownOpen(false)}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="bg-white text-gray-700 px-3 py-1 flex items-center gap-2"
                    >
                        <span>Sort by</span>
                        <span className="font-semibold w-42">
                            {selectedOption ? selectedOption?.displayValue || selectedOption.label : "Sort By"}
                            {TIME_PERIODS.find(
                                ({ value }) => value === sortBy.sortType
                            )
                                ? " "+sortOrder
                                : ""}
                        </span>
                        <FaChevronDown
                            fontSize="12px"
                            className={isDropdownOpen ? "rotate-180" : ""}
                        />
                    </button>
                    {isDropdownOpen && (
                        <ul
                            className={`absolute right-0 top-12 mt-1 bg-white rounded shadow-md z-10 p-2 w-48`}
                        >
                            {SORT_OPTIONS.map((option) => (
                                <li
                                    key={option.value}
                                    onClick={() => handleSorting(option.value)}
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
                                <p className="text-gray-600 text-sm">
                                    Time period
                                </p>
                                <div className="flex mt-2 border overflow-hidden rounded">
                                    {TIME_PERIODS.map((time) => (
                                        <button
                                            key={time.value}
                                            className={`p-1 text-sm overflow-hidden font-semibold ${
                                                sortBy.sortType === time.value
                                                    ? "text-blue-600 bg-blue-100"
                                                    : "text-gray-600 hover:bg-gray-200"
                                            } cursor-pointer w-full`}
                                            onClick={() =>
                                                handleSorting(time.value)
                                            }
                                        >
                                            {time.label}
                                        </button>
                                    ))}
                                </div>
                                {TIME_PERIODS.find(
                                    ({ value }) => value == sortBy.sortType
                                ) && (
                                    <>
                                        <p className="text-gray-600 mt-3 text-sm">
                                            Order by
                                        </p>
                                        <div className="flex mt-1 border overflow-hidden rounded font-semibold">
                                            <button
                                                className={`p-1 text-sm overflow-hidden ${
                                                    sortBy.orderBy ===
                                                    "High-Low"
                                                        ? "text-blue-600 bg-blue-100"
                                                        : "text-gray-600 hover:bg-gray-200"
                                                } cursor-pointer w-full`}
                                                onClick={() =>
                                                    handleOrder("High-Low")
                                                }
                                            >
                                                High - Low
                                            </button>
                                            <button
                                                className={`p-1 text-sm overflow-hidden ${
                                                    sortBy.orderBy ===
                                                    "Low-High"
                                                        ? "text-blue-600 bg-blue-100"
                                                        : "text-gray-600 hover:bg-gray-200"
                                                } cursor-pointer w-full`}
                                                onClick={() =>
                                                    handleOrder("Low-High")
                                                }
                                            >
                                                Low - High
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </ul>
                    )}
                </div>
                <div className="relative mx-2 flex items-center border-b border-gray-400 w-64">
                    <FaSearch className="absolute left-2 text-gray-400" />
                    <input
                        id="search"
                        type="text"
                        placeholder="smallcase, manager or a stock..."
                        className="pl-8 py-1 w-full outline-none text-gray-600"
                    />
                </div>
            </div>
        </div>
    );
};

export default SortSection;
