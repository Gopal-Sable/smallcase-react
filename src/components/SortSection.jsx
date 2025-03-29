import React from "react";

const SortSection = ({sortBy,setSortBy}) => {
    const handleSorting=()=>{

    }
    return (
        <div className="flex mx-auto my-5 flex-col w-258">
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
                                <input type="radio" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Minnimum Amount</label>
                                <input type="radio" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Recently rebalanced</label>
                                <input type="radio" name="" id="" />
                            </div>
                            <div>
                                <label htmlFor="">Returns</label>
                                <div>
                                    <span>Time period</span>
                                    <div>
                                        <button>1M</button>
                                        <button>6M</button>
                                        <button>1Y</button>
                                        <button>3Y</button>
                                        <button>5Y</button>
                                    </div>
                                </div>
                                <div>
                                    <span>Order by</span>
                                    <div>
                                        <button>High - Low</button>
                                        <button>Low - High</button>
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
