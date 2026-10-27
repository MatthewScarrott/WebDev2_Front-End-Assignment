/*
 * File name: students.ts
 * Author: Mary Ann Coloma
 * Date: Oct. 26, 2026
 *
 * Description:
 * This file has the Student interface and the list of students for the portal.
 * Each student has an id, first name, last name, grade and average.
 * There are 8 students to start, with at least one in every grade from 9 to 12.
 * StudentPortal imports this list and puts it in state.
 * The other components use the Student interface for their props.
 */

// Student interface
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

// Starting list of students
export const students: Student[] = [
  { id: 1, firstName: "Zara", lastName: "Ahmed", grade: 12, average: 91 },
  { id: 2, firstName: "Liam", lastName: "Nguyen", grade: 9, average: 74 },
  { id: 3, firstName: "Sofia", lastName: "Reyes", grade: 10, average: 85 },
  { id: 4, firstName: "Noah", lastName: "Campbell", grade: 11, average: 68 },
  { id: 5, firstName: "Amara", lastName: "Okafor", grade: 12, average: 79 },
  { id: 6, firstName: "Ethan", lastName: "Kowalski", grade: 9, average: 82 },
  { id: 7, firstName: "Mia", lastName: "Tremblay", grade: 10, average: 77 },
  { id: 8, firstName: "Arjun", lastName: "Patel", grade: 11, average: 88 },
];
