"use client"
import { useState } from "react";
import SearchBox from "./SearchBox";
import { students as initialStudents, Student } from "@/data/students";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import StatsPanel from "./StatsPanel";
/*
* File Name SearchBox.tsx
* Author: Ryan Dezall
* Date: Oct 30, 2026
* 
* Description:
* This is the central controller component for the New Generation High School student portal.
* It does not receive props, serving as the top-level container rendered directly on the home page.
* The component manages the primary state for the student roster and the active search filter term.
* It computes real-time derived statistics including total enrollment, honour roll students, and grade 12 counts.
* It outputs three distinct page sections (#overview, #students, and #add-student) coordinating child components.
*/

const StudentPortal = () => {
    // ==================
    // 1. Primary State
    // ==================
    const [students, setStudents] = useState<Student []>(initialStudents);
    const [searchContent, updatedSearchContent] = useState<string>("");
    
    // ===================
    // 2. Derived Values (calculate on each render)
    // ====================
    const filteredStudents = students.filter((student) => {
        const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
        return fullName.includes(searchContent.toLowerCase().trim());
    });

    // Stats use the full list (not filteredStudents) so they don't change while searching
    const totalStudents = students.length;

    // Honour roll: average of 80 or higher
    const honourStudentCount = students.filter((s) => s.average >= 80).length;

    // Grade 12 students
    const graduatingStudentsCount = students.filter((s) => s.grade === 12).length;

    // ====================
    // 3. Event Handlers
    // ====================

    // Removes a student by filtering out their unique id
    const handleRemoveStudent = (id: number) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    // Removes all students
    const handleRemoveAll = () => {
        setStudents([]);
    };

    // Adds a new student with a guaranteed unique ID
    const handleAddStudent = (newStudentData: Omit<Student, "id">) => {
        let nextID = 1;

        // This if/else makes it so that if students don't exist it find the highest ID and add 1. And if the list is empty it starts at 1.
        if (students.length > 0) {
            const highestID = Math.max(...students.map((s) => s.id));
            nextID = highestID + 1;
        } else {
            nextID = 1;
        }

        // combine the input data with the new ID
        const newStudent: Student = {
            ...newStudentData,
            id: nextID,
        };

        // Create a brand new array for state
        setStudents([...students, newStudent]);
    };

    // ========================
    // 4. Return Layout and Sections
    // ========================
    return (
        <main className="max-w-5xl mx-auto px-6 py-8 space-y-12">
            {/* Section 1: Overview */}
            <section id="overview" className="scroll-mt-16">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 border-b border-slate-200 pb-3">
                    <h2 className="text-2xl font-bold text-slate-800">Overview</h2>
                    <p className="text-sm text-slate-500">School Metrics at a glance</p>

                    {/* clear all button */}
                    <button 
                    type="button"
                    onClick={handleRemoveAll}
                    className="self-start sm:self-auto px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 border border-red-2 rounded-lg transition-colors cursor-pointer">
                        Clear All Students
                    </button>
                </div>

                {/* StatsPanel implementation */}
                <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-6 text-center text-slate-500 text-sm">
                    <StatsPanel
                        total={totalStudents}
                        honourRoll={honourStudentCount}
                        grade12={graduatingStudentsCount}
                    />
                </div>
            </section>

            {/* Section 2: Students list and search */}
            <section id="students" className="scroll-mt-16">
                <div className="border-b border-slate-200 pb-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Students</h2>
                    <p className="text-sm text-slate-500">Search and manage current enrollments</p>
                </div>

                {/* SearchBox implementation */}
                <SearchBox 
                searchContent={searchContent}
                onSearchChange={updatedSearchContent} />

                {/* displays students */}
                <div className="mt-6">
                    <StudentList 
                        students={filteredStudents} 
                        onRemove={handleRemoveStudent} 
                    />
                </div>
            </section>

            {/* Section 3: Add a student */}
            <section id="add-student" className="scroll-mt-16">
                <div className="border-b border-slate-200 pb-3 mb-6">
                    <h2 className="text-2xl font-bold text-slate-800">Add a Student</h2>
                    <p className="text-sm text-slate-500">Enroll a new student to the portal</p>
                </div>

                <AddStudent onAddStudent={handleAddStudent} />
            </section>
        </main>
    );
};

export default StudentPortal;