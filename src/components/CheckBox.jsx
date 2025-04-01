import React from "react";

const CheckBox = ({ checked, name, handleClick }) => {
    return (
        <div className="my-1 p-1 hover:bg-gray-200 cursor-pointer">
            <input
                type="checkbox"
                name={name}
                id={name}
                checked={checked}
                onChange={handleClick}
            />
            <label className="ml-2 cursor-pointer" htmlFor={name}>
                {name}
            </label>
        </div>
    );
};

export default CheckBox;
