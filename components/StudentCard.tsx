"use client";

/*
 * File name: StudentCard.tsx
 * Author: Mary Ann Coloma
 * Date: Oct. 26, 2026
 *
 * Description:
 * This component shows one student's name and grade on a card.
 * It gets the student and the onRemove function as props.
 * The Show details button shows the student's average, and an Honour roll badge if it is 80 or higher.
 * Each card has its own state, so opening one card does not open the others.
 * The Remove button calls onRemove with the student's id to take them off the list.
 */

import { useState } from "react";
import { Student } from "@/data/students";

// Props
interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

// Lowest average for the honour roll
const HONOUR_ROLL_MIN = 80;

// StudentCard component
const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  // true when the details are showing
  const [showDetails, setShowDetails] = useState(false);

  const isHonourRoll = student.average >= HONOUR_ROLL_MIN;

  // Open or close the details
  const handleToggleDetails = () => {
    setShowDetails((previous) => !previous);
  };

  // Tell the parent to remove this student
  const handleRemove = () => {
    onRemove(student.id);
  };

  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      {/* Name and grade */}
      <h3 className="break-words text-lg font-semibold text-slate-900">
        {student.firstName} {student.lastName}
      </h3>
      <p className="text-sm text-slate-600">Grade {student.grade}</p>

      {/* Average and badge, only when details are open */}
      {showDetails && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-slate-700">
            Average: <span className="font-medium">{student.average}</span>
          </span>
          {isHonourRoll && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800">
              Honour roll
            </span>
          )}
        </div>
      )}

      {/* Buttons */}
      <div className="mt-auto flex gap-2 pt-4">
        <button
          type="button"
          onClick={handleToggleDetails}
          className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>
        <button
          type="button"
          onClick={handleRemove}
          className="rounded-lg border border-red-300 px-3 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default StudentCard;
