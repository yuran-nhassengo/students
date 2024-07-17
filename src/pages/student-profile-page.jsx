import React, { useContext } from 'react'
import { Header } from '../components/header'
import { StudentProfile } from '../components/student/studentProfile'
import { useParams } from 'react-router-dom';
import { Students } from '../db/data';
import { StudentList } from '../components/student/studentList';
import { StudentContext } from '../components/context/student-context';

export const StudentProfilePage = () => {

  const { id } = useParams();
  const { students } = useContext(StudentContext);


  const user = students.find( (student) => student.id == id);

  console.log('Consuming students context:', students);
  console.log('Found user:', user);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <main className="p-6">
      <StudentProfile name={user.name} email ={user.email}/>
      </main>
    </div>
  )
}

