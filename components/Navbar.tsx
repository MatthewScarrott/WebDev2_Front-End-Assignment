/*
* File name: Navbar.tsx
* Author: Matthew Scarrott
* Date: Oct. 30, 2026
* 
* Description:
* The Navbar component displays information at the top of every page.
* It displays the name of the school.
* It also displays buttons to scroll down to three different sections of the page.
*/

import { link } from "fs";

const Navbar = () => {
    return (
        <header className="bg-white border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-lg font-bold text-slate-900">
                    New Generation High School
                </h1>
                <button
                    type="button"
                    className="text-xs font-semibold text-white bg-blue-600 px-3 py-1 rounded-full hover:bg-blue-700 transition cursor-pointer"
                >
                    <a href="">Overview</a>
                </button>
                <button
                    type="button"
                    className="text-xs font-semibold text-white bg-blue-600 px-3 py-1 rounded-full hover:bg-blue-700 transition cursor-pointer"
                >
                    <a href="">Students</a>
                </button>
                <button
                    type="button"
                    className="text-xs font-semibold text-white bg-blue-600 px-3 py-1 rounded-full hover:bg-blue-700 transition cursor-pointer"
                >
                    <a href="">Add a student</a>
                </button>
            </div>
        </header>
    );
};

export default Navbar;