/*
* File name: Navbar.tsx
* Author: Matthew Scarrott
* Date: Oct. 30, 2026
* 
* 
*/

const Navbar = () => {
    return (
        <header className="bg-white border-b border-slate-200">
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="text-lg font-bold text-slate-900">
                    New Generation High School · Call for Talks
                </h1>
                <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    CPRG 306 · Assignment 2
                </span>
            </div>
        </header>
    );
};

export default Navbar;