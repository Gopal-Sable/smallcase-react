import React from "react";
import ListItem from "./ListItem";

const SmallCaseList = ({ smallCaseData }) => {
    return (
        <div className="mt-8">
            {smallCaseData.data.map((portfolio) => {
                return <ListItem key={portfolio._id} portfolio={portfolio} />;
            })}
        </div>
    );
};

export default SmallCaseList;
