"use client";

/*
* File name: AddStudent.tsx
* Author: Ryan Dezall
* Date: Oct 30, 2026
* 
* Description:
* This component renders a controlled panel with four input fields to enroll a new student.
* It receives an onAddStudent callback function as a prop to pass the new student data up to the parent.
* The component validates that neither the first nor last name is left empty before triggering the add action.
* After successfully adding a student, it resets all input fields back to their default starting values.
* It outputs a styled interactive card with labels, inputs, and an "Add student" button.
*/

import { useState } from "react";

// Interface
interface AddStudentProps {
    onAddStudent: (newStudent: {
        firstName: string;
        lastName: string;
        grade: number;
        average: number;
    }) => void;
}

const AddStudent = ({ onAddStudent }: AddStudentProps) => {
    // controlled input states with required starting values
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [grade, setGrade] = useState<number>(9);
    const [average, setAverage] = useState<number>(70);

    // buttone click handler
    const handleAddClick = () => {
        if (firstName.trim() === "" || lastName.trim() === "") {
            return;
        }

        onAddStudent({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            grade: Number(grade),
            average: Number(average),
        });

        // resets input back to starting values
        setFirstName("");
        setLastName("");
        setGrade(9);
        setAverage(70);
    };

    return (
        <div className="bg-white p-6 reounded-xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* first name input */}
                <div>
                    <label htmlFor="first-name" className="block test-sm font-medium text-slate-700 mb-1">
                        First Name
                    </label>
                    <input
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="e.g. Jane"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                    />
                </div>

                {/* last name input */}
                <div>
                    <label htmlFor="last-name" className="block test-sm font-medium text-slate-700 mb-1">
                        Last Name
                    </label>
                    <input
                    id="last-name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="e.g. Doe"
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                    />
                </div>

                {/* grade input */}
                <div>
                    <label htmlFor="grade" className="block test-sm font-medium text-slate-700 mb-1">
                        Grade (9-12)
                    </label>
                    <input
                    id="grade"
                    type="number"
                    value={grade}
                    min={9}
                    max={12}
                    onChange={(e) => setGrade(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                    />
                </div>

                {/* average input */}
                <div>
                    <label htmlFor="average" className="block test-sm font-medium text-slate-700 mb-1">
                        Average (%)
                    </label>
                    <input
                    id="average"
                    type="number"
                    min={0}
                    max={100}
                    value={average}
                    onChange={(e) => setAverage(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                    />
                </div>
            </div>
            {/* add button */}
            <div className="mt-6 flex justify-end">
                <button
                type="button"
                onClick={handleAddClick}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition-colors cursor-pointer">
                    Add Student
                </button>
            </div>
        </div>
    );
};

export default AddStudent;