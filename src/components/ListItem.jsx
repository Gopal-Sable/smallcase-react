import React from "react";
import { CAGR_LABLE, LOGO_URL } from "../utils/constantsAndUrl";
let divideByYear={
    monthly: 1,
    halfyearly: 1,
    yearly: 1,
    threeYear: 3,
    fiveYear: 5,
}
const ListItem = ({ portfolio, sortBy }) => {
    let cagr = CAGR_LABLE.hasOwnProperty(sortBy.sortType)
        ? portfolio.stats.returns[sortBy.sortType]*100 / divideByYear[sortBy.sortType]
        : portfolio.platformData.ratios.cagr *100;
    return (
        <div className="flex hover:shadow-xl mx-2 w-198 border p-4 border-white border-b-gray-400 hover:rounded-lg hover:border-gray-400 hover:text-blue-500">
            <img
                className="w-16 h-16 mr-2 rounded-sm"
                src={LOGO_URL + portfolio.scid + ".png"}
                alt=""
            />
            <div className="flex flex-col mx-2">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold line-clamp-1 mb-2">
                        {portfolio.info.name}
                    </h2>
                    {!portfolio.flags.private && (
                        <span className="text-nowrap text-xs p-1 font-semibold bg-blue-100 text-blue-600 h-fit">
                            Free Access
                        </span>
                    )}
                </div>
                <p className="text-gray-950 line-clamp-2 mb-2">
                    {portfolio.info.shortDescription}
                </p>
                <span className="text-gray-600">
                    {portfolio.info.publisherName}
                </span>
            </div>
            <div className="flex">
                <div className="mx-2 text-nowrap self-center">
                    <label htmlFor="" className="text-gray-600 text-sm">
                        Min. Amount
                    </label>
                    <p className="text-black text-l font-medium">
                        {portfolio.stats.minInvestAmount.toLocaleString(
                            "en-IN",
                            {
                                style: "currency",
                                currency: "INR",
                                minimumFractionDigits: 0,
                            }
                        )}
                    </p>
                </div>
                <div className="mx-2 text-nowrap text-center self-center">
                    <label htmlFor="" className="text-gray-600 text-sm">
                        {CAGR_LABLE.hasOwnProperty(sortBy.sortType)
                            ? CAGR_LABLE[sortBy.sortType]
                            : portfolio.platformData.ratios.cagrDuration}
                    </label>
                    {}
                    <p
                        className={`${
                            cagr < 0 ? "text-red-600" : "text-green-600"
                        } text-l font-medium`}
                    >
                        {(cagr).toFixed(2)}
                    </p>
                </div>
                <button className="text-nowrap">
                    {portfolio.stats.ratios.riskLabel === "Medium Volatility"
                        ? "Med. Volatility"
                        : portfolio.stats.ratios.riskLabel}
                </button>
            </div>
        </div>
    );
};

export default ListItem;
