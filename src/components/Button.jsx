import React from "react";

const Button = ({ name, handleClick, active, border = false }) => {
    return (
        <button
            className={`cursor-pointer p-1 overflow-hidden w-full
                ${
                    active ? "bg-blue-100 text-blue-600" : "hover:bg-gray-200"
                }             
                ${border ? "border border-gray-400 rounded-sm p-2" : ""}`}
            onClick={() => {
                handleClick();
            }}
        >
            {name}
        </button>
    );
};

export default Button;
