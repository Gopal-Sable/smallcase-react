import React from "react";
import { FaChevronDown } from "react-icons/fa";
const TIME_PERIODS=["1M","6M","1Y","3Y","5Y"]

const SortSection = ({ sortBy, setSortBy }) => {
    //  sortType popularity  minimumAmount rebalnced monthly halfyearly yearly threeYear fiveYear
    // orderBy "High-Low" ,"Low-High"
    const handleSorting = (sortType) => {
        setSortBy((prev) => ({ ...prev, sortType }));
    };
    const handleOrder = (orderBy) => {
        setSortBy((prev) => ({ ...prev, orderBy }));
    };
    return (
        <div className="flex mx-auto my-5 flex-col w-258">

<div className="dropdown dropdown-center">
              <div
                tabIndex={0}
                role="button"
                className="btn border-0 bg-white border-b border-black rounded-none text-left"
              >
                <span className="text-gray-400 font-light text-md mr-2">
                  Sort by
                </span>
                <span className="text-gray-600 font-light w-20">
                  Popularity
                </span>
                <span className="ml-16">
                  <FaChevronDown color="gray" fontSize="12px" />
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-md"
              >
                <li>
                  <div className="flex justify-between">
                    <label htmlFor="popularity" className="text-gray-600">
                      Popularity
                    </label>
                    <input type="radio" name="filter" id="popularity" />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <label htmlFor="minimum-amount" className="text-gray-600">
                      Minimum Amount
                    </label>
                    <input type="radio" name="filter" id="minimum-amount" />
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <label
                      htmlFor="recently-rebalanced"
                      className="text-gray-600"
                    >
                      Recently Rebalanced
                    </label>
                    <input
                      type="radio"
                      name="filter"
                      id="recently-rebalanced"
                    />
                  </div>
                </li>

                <div className="mt-4 ml-3 w-44">
                  <p className="mb-1 text-gray-600">Returns</p>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">Time period</p>

                    <div className="border border-gray-300 rounded flex my-1">
                      {TIME_PERIODS.map((btn) => (
                        <button key={btn} className="p-1 hover:bg-gray-100 cursor-pointer text-center w-full text-gray-400 font-semibold text-sm">
                          {btn}
                        </button>
                      ))}
                    </div>

                    <div className="my-3">
                      <p className="text-sm text-gray-500">Order by</p>
                      <div className="flex border border-gray-300 rounded mt-1">
                        <button className="p-1 hover:bg-gray-100 cursor-pointer text-center w-full text-gray-400 text-sm">
                          High - Low
                        </button>
                        <button className="p-1 hover:bg-gray-100 cursor-pointer text-center w-full text-gray-400 text-sm">
                          Low - High
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>



            <h1 className="text-2xl font-semibold my-2">Discover</h1>
            <div className="flex border-b gray-400">
                <div className="">
                    <a href="">
                        <h4 className="">Collections</h4>
                    </a>
                </div>
                <div className="">
                    <a href="">
                        <h4 className="RouteTab__tab_element__3sbHa inline-block font-regular text-16 text-normal RouteTab__tab_active__1JHps">
                            All smallcases
                        </h4>
                    </a>
                </div>
                <div className="RouteTab__tab__25-kK">
                    <a href="">
                        <h4 className="RouteTab__tab_element__3sbHa inline-block font-regular text-16 text-normal">
                            Managers
                        </h4>
                    </a>
                </div>
                <div className="clearfix">
                    <div>
                        <p>Sort by:</p>
                        <div>
                            <div>
                                <label htmlFor="">Popularity</label>
                                <input
                                    type="radio"
                                    onChange={() => handleSorting("popularity")}
                                    checked={sortBy.sortType === "popularity"}
                                    name=""
                                    id=""
                                />
                            </div>
                            <div>
                                <label htmlFor="">Minnimum Amount</label>
                                <input
                                    type="radio"
                                    name=""
                                    onChange={() =>
                                        handleSorting("minimumAmount")
                                    }
                                    checked={
                                        sortBy.sortType === "minimumAmount"
                                    }
                                    id=""
                                />
                            </div>
                            <div>
                                <label htmlFor="">Recently rebalanced</label>
                                <input
                                    type="radio"
                                    onChange={() => handleSorting("rebalnced")}
                                    checked={sortBy.sortType === "rebalnced"}
                                    name=""
                                    id=""
                                />
                            </div>
                            <div>
                                <label htmlFor="">Returns</label>
                                <div>
                                    <span>Time period</span>
                                    <div>
                                        <button onClick={()=>handleSorting("monthly")}>1M</button>
                                        <button onClick={()=>handleSorting("halfyearly")}>6M</button>
                                        <button onClick={()=>handleSorting("yearly")}>1Y</button>
                                        <button onClick={()=>handleSorting("threeYear")}>3Y</button>
                                        <button onClick={()=>handleSorting("fiveYear")}>5Y</button>
                                    </div>
                                </div>
                                <div>
                                    <span>Order by</span>
                                    <div>
                                        <button onClick={()=>handleOrder("High-Low")}>High - Low</button>
                                        <button onClick={()=>handleOrder("Low-High")}>Low - High</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SortSection;
