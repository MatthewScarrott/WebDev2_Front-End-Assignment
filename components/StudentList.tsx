/*
 * File name: StudentList.tsx
 * Author: Mary Ann Coloma
 * Date: Oct. 26, 2026
 *
 * Description:
 * This component shows the list of students as cards.
 * It gets the students to show and the onRemove function as props from StudentPortal.
 * It uses .map() to make one StudentCard for each student, with the id as the key.
 * If there are no students in the list, it shows a message instead.
 * The cards are in a grid that is one column on a phone and more on bigger screens.
 */

import { Student } from "@/data/students";
import StudentCard from "@/components/StudentCard";

// Props
interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

// StudentList component
const StudentList = ({ students, onRemove }: StudentListProps) => {
  // Show a message if the list is empty
  if (students.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center text-slate-500">
        No students to show.
      </p>
    );
  }

  // Show one card for each student
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <li key={student.id}>
          <StudentCard student={student} onRemove={onRemove} />
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
