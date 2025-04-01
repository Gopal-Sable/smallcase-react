import React from "react";

const Filter = ({ title, children }) => {
    return (
        <div className=" font-semibold my-2 py-2 w-full">
            <h2>{title}</h2>
            <div className="text-sm font-semibold w-full flex justify-between  my-1 text-wrap">
                {children}
            </div>
        </div>
    );
};

export default Filter;
