import React from "react";

const RadioButton = ({ handleClick, isChecked, name }) => {
    return (
        <div
            className="my-1 p-1 hover:bg-gray-200 cursor-pointer w-full"
            onClick={handleClick}
        >
            <input
                type="radio"
                name="invest-amount"
                id={name}
                checked={isChecked}
                onChange={handleClick}
            />
            <label className="ml-2 w-full" htmlFor={name}>
                {name}
            </label>
        </div>
    );
};

export default RadioButton;
