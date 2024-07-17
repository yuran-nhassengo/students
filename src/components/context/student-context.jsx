import React, { createContext, useState } from 'react';
import { Students } from '../../db/data';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(Students);

  const getStudents = (searchString) => {
    if (!searchString || searchString === "") {
      return students;
    } else {
      return students.filter((student) =>
        student.name.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  };

  const handleRemove = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <StudentContext.Provider value={{ students, getStudents, handleRemove,addStudent  }}>
      {children}
    </StudentContext.Provider>
  );
};