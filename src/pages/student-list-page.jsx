import React, { useContext, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'


import { Header } from '../components/header'
import { SearchStudent } from '../components/student/searchStudent'

import {Students } from '../db/data'
import { StudentList } from '../components/student/studentList'
import { StudentContext } from '../components/context/student-context'


export const StudentListPage = () => {

  const { students, getStudents, handleRemove } = useContext(StudentContext);
  const [searchParams] = useSearchParams();

  const searchString = searchParams.get("search");

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
          {getStudents(searchString).map((student) => (
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

