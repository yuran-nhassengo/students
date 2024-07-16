import React, { useState } from 'react';

import { Students } from '../db/data'; 
import { Header } from '../components/header'; 

export const CreateStudent = () => {
 
  const [students, setStudents] = useState(Students);

 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

 
  const [showConfirmation, setShowConfirmation] = useState(false);

 
  const [newStudent, setNewStudent] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    const addedStudent = { ...formData };
    setStudents([...students, addedStudent]);

   
    setNewStudent(addedStudent);
    
   
    setShowConfirmation(true);
    
  
    setFormData({
      name: '',
      email: '',
    });
  };


  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setNewStudent(null);
  };

  return (
    <>
      <Header />
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
              value={formData.email}
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

       
        {showConfirmation && newStudent && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
              <h3 className="text-lg font-semibold mb-2">New Student Added</h3>
              <p><strong>Name:</strong> {newStudent.name}</p>
              <p><strong>Email:</strong> {newStudent.email}</p>
              <button
                onClick={handleCloseConfirmation}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};