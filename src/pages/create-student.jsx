import React, { useState } from 'react';

import { Students } from '../db/data';
import { Header } from '../components/header';


export const CreateStudent = () => {
 
  const [students, setStudents] = useState(Students);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    setStudents([...students, formData]);
    
   
    setFormData({
      name: '',
      email: '',
    });
  };

  return (
    <>
    <Header/>
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Student</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium mb-1">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium mb-1">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.age}
            onChange={handleChange}
            required
            className="p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add Student
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-8">Student List</h2>
      <ul className="mt-4 space-y-2">
        {students.map((student, index) => (
          <li key={index} className="p-2 border border-gray-200 rounded-lg">
            {student.name} - {student.age} years old
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

