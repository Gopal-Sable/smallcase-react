import "./App.css";
import FilterSection from "./components/FilterSection";
import Navbar from "./components/Navbar";
import SmallCaseList from "./components/SmallCaseList";
import { combinedFilter } from "./utils/filters";
import { useEffect, useState } from "react";
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
    sortType: "popularity",
    orderBy: "High-Low",
};

function App() {
    const [filters, setFilters] = useState(initialFilters);
    const [sortBy, setSortBy] = useState(initialSorting);
    const [smallCaseData, setSmallCaseData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch("./smallcases.json");
                if (!res.ok) throw new Error("Failed to fetch data");
                const data = await res.json();
                setSmallCaseData(data);
            } catch (error) {
                setIsError(error.message);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, []);

    //Showing loading and errors
    // if (isLoading) return <p className="text-center mt-5">Loading...</p>;
    if (isError)
        return <p className="text-center mt-5 text-red-500">{isError}</p>;

    // smallCaseData.data exists before processing
    const filterData = smallCaseData?.data
        ? combinedFilter(smallCaseData.data, filters)
        : [];
    const investStrategyList = smallCaseData?.data
        ? getInvestmentStartegies(smallCaseData.data)
        : [];
    const sortedData = sortData(filterData, sortBy);

    const clearAllfilters = () => {
        setFilters(initialFilters);
    };

    return (
        <>
            <Navbar />
            <SortSection sortBy={sortBy} setSortBy={setSortBy} />
            <div className="w-fit mx-auto"></div>
            <div className="flex mt-4 justify-center">
                <FilterSection
                    filters={filters}
                    setFilters={setFilters}
                    investStrategyList={investStrategyList}
                    clearAllfilters={clearAllfilters}
                />
                {isLoading ? (
                    <div className="flex mx-2 w-218 p-4 justify-center items-center text-2xl ">
                        Loading.......
                    </div>
                ) : (
                    <SmallCaseList smallCaseData={sortedData} sortBy={sortBy} />
                )}
            </div>
        </>
    );
}

export default App;
