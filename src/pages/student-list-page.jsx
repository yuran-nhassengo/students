import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'


import { Header } from '../components/header'
import { SearchStudent } from '../components/student/searchStudent'

import {Students } from '../db/data'


export const StudentListPage = () => {

  const  [searchParams] = useSearchParams();

  function getStudents() {
    const searchString = searchParams.get("search");
    if (searchString === null || searchString === "") {
      return Students;
    } else {
      return Students.filter((student) =>
        student.name.toLowerCase().includes(searchString.toLowerCase())
      );
    }
  }

  getStudents();

  return (
    <div>
      <Header/>
      <SearchStudent/>
      <main>
        <h1 className='flex justify-center text-blue-400 text-2xl'>Lista de Estudantes</h1>
        <ul>
          {getStudents().map((student, index) => (
            <li key={index} >
              <Link to={student.name}>{student.name}</Link>
            </li>
          ))}
        </ul>
      </main>

    </div>
  )
}

