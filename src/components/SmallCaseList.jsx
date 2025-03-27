import React from "react";
import ListItem from "./ListItem";

const SmallCaseList = ({ smallCaseData }) => {
    return (
        <>
            {smallCaseData.data.map((portfolio) => {
                return <ListItem key={portfolio._id} portfolio={portfolio} />;
            })}
        </>
    );
};

export default SmallCaseList;
