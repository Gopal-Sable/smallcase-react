import React from "react";
import ListItem from "./ListItem";

const SmallCaseList = ({ smallCaseData }) => {
    return (
        <div className="">
            {smallCaseData.length ? smallCaseData.map((portfolio) => {
                return <ListItem key={portfolio._id} portfolio={portfolio} />;
            }) : <div className="flex hover:shadow-xl mx-2 w-158 border p-4 border-white border-b-gray-400 hover:rounded-lg hover:border-gray-400 hover:text-blue-500">No Smallcase found</div>}
        </div>
    );
};

export default SmallCaseList;
