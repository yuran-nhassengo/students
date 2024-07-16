import React from 'react'
import { Header } from '../components/header'
import { StudentProfile } from '../components/student/studentProfile'
import { useParams } from 'react-router-dom';
import { Students } from '../db/data';
import { StudentList } from '../components/student/studentList';

export const StudentProfilePage = () => {

  const { id } = useParams();

  const user = Students.find( (student) => student.id == id);

  console.log(user)

  return (
    <div>
      <Header/>
      <StudentProfile name={user.name} email ={user.email}/>
    </div>
  )
}

