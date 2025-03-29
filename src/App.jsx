import "./App.css";
import smallCaseData from "./assets/smallcases.json";
import FilterSection from "./components/FilterSection";
import Navbar from "./components/Navbar";
import SmallCaseList from "./components/SmallCaseList";
import { combinedFilter } from "./utils/filters";
import { useState } from "react";
import { getInvestmentStartegies } from "./utils/getInvestmentStrategies";
import SortSection from "./components/SortSection";
import { sortData } from "./utils/sortData";

let initialFilters = {
    subscription: [],
    investmentAmount: [],
    volitility: [],
    investementStrategy: [],
    newLaunch: [],
};
let initialSorting = {
    //  sortType popularity  minimumAmount monthly halfyearly yearly threeYear fiveYear
    // orderBy "High-Low" ,"Low-High"
    sortType: "popularity",
    orderBy: "High-Low",
};

function App() {
    const [filters, setFilters] = useState(initialFilters);
    const [sortBy, setSortBy] = useState(initialSorting);
    let filterData = combinedFilter(smallCaseData.data, filters);
    let investStrategyList = getInvestmentStartegies(smallCaseData.data);
    let sortedData = sortData(filterData, sortBy);

    const clearAllfilters = () => {
        setFilters(initialFilters);
    };
    return (
        <>
            <Navbar />
            <SortSection sortBy={sortBy} setSortBy={setSortBy} />
            <div className="flex mt-4 justify-center">
                <FilterSection
                    filters={filters}
                    setFilters={setFilters}
                    investStrategyList={investStrategyList}
                    clearAllfilters={clearAllfilters}
                />
                <SmallCaseList smallCaseData={sortedData} sortBy={sortBy} />
            </div>
        </>
    );
}

export default App;
