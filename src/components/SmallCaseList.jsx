import React from "react";
import ListItem from "./ListItem";

const SmallCaseList = ({ smallCaseData, sortBy }) => {
    return (
        <div className="">
            {smallCaseData.length ? (
                smallCaseData.map((portfolio) => {
                    return (
                        <ListItem
                            key={portfolio._id}
                            portfolio={portfolio}
                            sortBy={sortBy}
                        />
                    );
                })
            ) : (
                <div className="flex mx-2 w-216 p-4 justify-center items-center text-2xl ">
                    No Smallcase found
                </div>
            )}
        </div>
    );
};

export default SmallCaseList;
