import { Link } from "react-router-dom";


export const StudentList = ({id,name,email,onRemove }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex justify-between items-center">
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">Name: {name}</h2>
        <p className="text-gray-600">Email: {email}</p>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          to={`/student-profile-page/${id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
        {onRemove && (
          <button
            onClick={onRemove}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

