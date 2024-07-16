import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'


import { Header } from '../components/header'
import { SearchStudent } from '../components/student/searchStudent'

import {Students } from '../db/data'
import { StudentList } from '../components/student/studentList'


export const StudentListPage = () => {

  const  [searchParams] = useSearchParams();
  const [students, setStudents] = useState(Students);

  function getStudents() {
    const searchString = searchParams.get("search");
    if (!searchString || searchString === "") {
      return students;
    } else {
      return students.filter((student) =>
        student.name.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  }

  const handleRemove = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  getStudents();

  return (
    <div>
      <Header />
      <SearchStudent />
      <main className="p-6">
        <h1 className="text-blue-400 text-2xl text-center mb-6">Lista de Estudantes</h1>
        <Link to="/create-student">
            <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600">
              Create New Student
            </button>
        </Link>
        <ul className="space-y-4">
          {getStudents().map((student) => (
            <li key={student.id}>
              <StudentList
                id={student.id}
                name={student.name}
                email={student.email}
                onRemove={() => handleRemove(student.id)}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

