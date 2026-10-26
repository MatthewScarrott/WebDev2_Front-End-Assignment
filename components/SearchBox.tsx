"use client";

/*
* File Name SearchBox.tsx
* Author: Ryan Dezall
* Date: Oct 26, 2026
* 
* Description:
* This component is a controlled search input box that filters students by name.
*  It takes in the current searcfh term and a callback function as props from the parent.
* When the user types in the input field, the component captures the change event and notifies the parent with the update search string.
* It ouputs a styled text input with and optional label and icon for user accessibility.
*/

// ===========================
// Props Interface
// ===========================
interface SearchBoxProps {
    searchContent: string;
    onSearchChange: (value: string) => void; 
}

// ===========================
// Component Definition
// ===========================
const SearchBox = ({searchContent, onSearchChange}: SearchBoxProps) => {
    return (
        <div className="w-full max-w-md my-4">
            {/* Label for accessibility */}
            <label
            htmlFor="student-search"
            className="block text-sm font-medium text-slate-700 mb-1">
                Search Students
            </label>

            {/* Controlled text input */}
            <input
            id="student-search"
            type="text"
            value={searchContent}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by first or last name..."
            className="w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            text-slate-900 bg-white placeholder-slate-400" />
        </div>
    );
};

export default SearchBox;