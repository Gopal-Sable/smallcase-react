import React, { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import SortModal from "./SortModal";

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
                            {selectedOption
                                ? selectedOption?.displayValue ||
                                  selectedOption.label
                                : "Sort By"}
                            {TIME_PERIODS.find(
                                ({ value }) => value === sortBy.sortType
                            )
                                ? " " + sortOrder
                                : ""}
                        </span>
                        <FaChevronDown
                            fontSize="12px"
                            className={isDropdownOpen ? "rotate-180" : ""}
                        />
                    </button>
                    {isDropdownOpen && (
                        <SortModal
                            sortBy={sortBy}
                            handleClick={handleSorting}
                            handleOrder={handleOrder}
                            SORT_OPTIONS={SORT_OPTIONS}
                            TIME_PERIODS={TIME_PERIODS}
                        />
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
