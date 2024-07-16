export const StudentProfile = ({name,email}) =>{

    
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200 mt-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Student Profile</h1>
        <div className="flex flex-col space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Name</h2>
            <p className="text-gray-600">{name}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
      </div>
    );
}