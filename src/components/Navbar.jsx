import React from "react";
import Logo from "../assets/Logo.svg";
import Kite from "../assets/kite-logo.svg";
const Navbar = () => {
    return (
        <div className="flex justify-center border-b border-gray-300 text-gray-500">
            <nav className="flex justify-between w-258">
                <div className="flex justify-center items-center m-2">
                    <a href="" className="mr-8 ">
                        <img src={Logo} alt="" />
                    </a>
                    <a href="" className="mr-8 hover:text-gray-700">
                        Discover
                    </a>
                    <a href="" className="mr-8  hover:text-gray-700">
                        Create
                    </a>
                </div>
                <div className="flex justify-center items-center ">
                    <a href="" className="mr-8  hover:text-gray-700">
                        Watchlist
                    </a>
                    <a
                        href=""
                        className="mr-8 bg-gray-500 text-white rounded-full hover:bg-gray-700"
                    >
                        <span className="px-2.5 h-fit ">?</span>
                    </a>
                    <a href="" className="mr-8">
                        <button className="flex items-center outline outline-gray-400 rounded-sm p-1 hover:shadow-lg">
                            <img src={Kite} className="h-4 w-4 m-1" alt="" />
                            <span className="m-1 text-blue-500 font-semibold text-sm ">
                                Login
                            </span>
                        </button>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
