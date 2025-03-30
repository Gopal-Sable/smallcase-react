import React from "react";
import { CAGR_LABLE, LOGO_URL } from "../utils/constantsAndUrl";
let divideByYear = {
    monthly: 1,
    halfyearly: 1,
    yearly: 1,
    threeYear: 3,
    fiveYear: 5,
};
const ListItem = ({ portfolio, sortBy }) => {
    let cagr = CAGR_LABLE.hasOwnProperty(sortBy.sortType)
        ? Math.pow(
              1 + portfolio.stats.returns[sortBy.sortType],
              1 / divideByYear[sortBy.sortType]
          ) - 1
        : portfolio.platformData.ratios.cagr;
    return (
        <div className="w-212 flex justify-center">
            <div className="flex hover:shadow-xl mx-2 w-206 hover:w-full p-4 border-b border-b-gray-300 hover:rounded-lg hover:border hover:border-gray-300 hover:text-blue-500">
                <img
                    className="w-16 h-16 mr-2 rounded-sm"
                    src={LOGO_URL + portfolio.scid + ".png"}
                    alt=""
                />
                <div className="flex flex-col mx-3">
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
                    <p className="text-gray-950 line-clamp-2 mb-2 min-w-102">
                        {portfolio.info.shortDescription}
                    </p>
                    <span className="text-gray-600">
                        {portfolio.info.publisherName}
                    </span>
                </div>
                <div className="flex mx-2">
                    <div className="text-nowrap self-center">
                        <label className="text-gray-600 text-sm">
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
                        <label className="text-gray-600 text-sm">
                            {CAGR_LABLE.hasOwnProperty(sortBy.sortType)
                                ? CAGR_LABLE[sortBy.sortType]
                                : portfolio.platformData.ratios.cagrDuration}
                        </label>
                        <p
                            className={`${
                                cagr < 0 ? "text-red-600" : "text-green-600"
                            } text-l font-medium`}
                        >
                            {(cagr * 100).toFixed(2)}
                        </p>
                    </div>
                    <button className="text-nowrap mx-2">
                        {portfolio.stats.ratios.riskLabel ===
                        "Medium Volatility"
                            ? "Med. Volatility"
                            : portfolio.stats.ratios.riskLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
