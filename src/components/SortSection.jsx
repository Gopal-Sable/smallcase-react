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
    // { label: "Returns", value: "returns" },
];

const SortSection = ({ sortBy, setSortBy }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSorting = (sortType) => {
        setSortBy((prev) => ({ ...prev, sortType }));
    };

    const handleOrder = (orderBy) => {
        setSortBy((prev) => ({ ...prev, orderBy }));
    };

    return (
        <div className="w-250 flex mx-auto my-5 justify-between">
            <div className="flex gap-6 border-b border-gray-300 pb-2">
                <a href="#" className="text-gray-500 hover:text-black">
                    Collections
                </a>
                <a
                    href="#"
                    className="text-black font-semibold border-b-2 border-black"
                >
                    All smallcases
                </a>
                <a href="#" className="text-gray-500 hover:text-black">
                    Managers
                </a>
            </div>
            <div className="flex">
                <div className="relative">
                    <button
                        // onFocus={() => setIsDropdownOpen(true)}
                        // onBlur={() => setIsDropdownOpen(false)}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="bg-white text-gray-700 border-b border-gray-400 px-3 py-1 flex items-center gap-2"
                    >
                        <span>Sort by</span>
                        <span className="font-semibold">{sortBy.sortType}</span>
                        <FaChevronDown
                            fontSize="12px"
                            className={isDropdownOpen ? "rotate-180" : ""}
                        />
                    </button>

                    <ul
                        className={`absolute ${
                            isDropdownOpen ? "" : "hidden"
                        } right-0 mt-1 bg-white rounded shadow-md z-10 p-2 w-48`}
                    >
                        {SORT_OPTIONS.map((option) => (
                            <li
                                key={option.value}
                                onClick={() => handleSorting(option.value)}
                                className="p-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                            >
                                {option.label}
                            </li>
                        ))}
                        <div className="border-t mt-2 pt-2">
                            <p className="text-gray-600">Time period</p>
                            <div className="flex gap-2 mt-2">
                                {TIME_PERIODS.map((time) => (
                                    <button
                                        key={time.value}
                                        className="p-1 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer border rounded"
                                        onClick={() =>
                                            handleSorting(time.value)
                                        }
                                    >
                                        {time.label}
                                    </button>
                                ))}
                            </div>
                            <p className="text-gray-600 mt-3">Order by</p>
                            <div className="flex gap-2 mt-1">
                                <button
                                    className="p-1 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer border rounded w-full"
                                    onClick={() => handleOrder("High-Low")}
                                >
                                    High - Low
                                </button>
                                <button
                                    className="p-1 text-sm text-gray-600 hover:bg-gray-100 cursor-pointer border rounded w-full"
                                    onClick={() => handleOrder("Low-High")}
                                >
                                    Low - High
                                </button>
                            </div>
                        </div>
                    </ul>
                </div>
                {/* </div> */}
                <div className="relative flex items-center border-b border-gray-400 w-64">
                    <FaSearch className="absolute left-2 text-gray-400" />
                    <input
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
