import "./App.css";
import smallCaseData from "./assets/smallcases.json";
import FilterSection from "./components/FilterSection";
import Navbar from "./components/Navbar";
import SmallCaseList from "./components/SmallCaseList";
import { combinedFilter, subscriptionFilter } from "./utils/filters";
import { useState } from "react";
import { getInvestmentStartegies } from "./utils/getInvestmentStrategies";



function App() {
    const [filters, setFilters] = useState({});
    let filterData = combinedFilter(smallCaseData.data, filters);
    let investStrategyList = getInvestmentStartegies(smallCaseData.data);
console.log(investStrategyList);


    return (
        <>
            <Navbar />
            <div className="flex mt-4 justify-center">
                <FilterSection
                    filters={filters}
                    setFilters={setFilters}
                    investStrategyList={investStrategyList}
                />
                <SmallCaseList smallCaseData={filterData} />
            </div>
        </>
    );
}

export default App;
