import filter from "daisyui/components/filter";

export const LOGO_URL = "https://assets.smallcase.com/images/smallcases/200/";
export const CAGR_LABLE = {
    monthly: "1M Returns",
    halfyearly: "6M Returns",
    yearly: "1Y CAGR",
    threeYear: "3Y CAGR",
    fiveYear: "5Y CAGR",
};

export const filtersConfigs = [
    {
        title: "Subscription Type",
        filter: "subscription",
        classes: "border overflow-hidden flex rounded-md",
        filtersOptions: [
            { displayValue: "Show all", value: null },
            { displayValue: "Free access", value: "free access" },
            { displayValue: "Fee based", value: "fee based" },
        ],
    },
    {
        title: "Investment Amount",
        filter: "investmentAmount",
        classes: "text-sm my-1 text-wrap",
        filtersOptions: [
            { displayValue: "Any", value: null },
            { displayValue: "Under ₹ 5000", value: 5000 },
            { displayValue: "Under ₹ 25000", value: 25000 },
            { displayValue: "Under ₹ 50000", value: 50000 },
        ],
    },
    {
        title: "Volatility",
        filter: "volatility",
        classes: "flex w-full gap-1 justify-between",
        filtersOptions: [
            { value: "Low Volatility", displayValue: "Low" },
            { value: "Medium Volatility", displayValue: "Medium" },
            { value: "High Volatility", displayValue: "High" },
        ],
    },
    {
        title: "Launch Date",
        filter: "newLaunch",
        classes: "",
        filtersOptions: [{ displayValue: "Include new smallcases" }],
    },
];
