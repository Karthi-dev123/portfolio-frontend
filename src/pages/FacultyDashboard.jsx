import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

function FacultyDashboard() {
  const location = useLocation();
  const [submissions, setSubmissions] = useState([
    { id: 1, studentName: 'John Doe', title: 'Hackathon Win', description: 'SRM Hackathon', status: 'pending', type: 'Tech', studentId: 'STU001' },
    { id: 2, studentName: 'Jane Smith', title: 'Sports Event', description: 'Football Match', status: 'pending', type: 'Sports', studentId: 'STU002' },
    { id: 3, studentName: 'Bob Johnson', title: 'Cultural Fest', description: 'Dance Competition', status: 'approved', type: 'Cultural', studentId: 'STU003' },
  ]); // Mock pending submissions—later from backend API

  const handleApprove = (id) => {
    setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status: 'approved' } : s));
    console.log(`Approved submission ${id}`);
  };

  const handleReject = (id) => {
    const comment = prompt('Add rejection comment (optional):');
    if (comment !== null) { // Handles cancel
      setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status: 'rejected', comment: comment || 'No comment' } : s));
      console.log(`Rejected submission ${id} with comment: ${comment || 'No comment'}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Faculty Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">Faculty Panel</h2>
          <p className="text-sm text-gray-600">Review Student Submissions</p>
        </div>
        <nav className="mt-6">
          <Link
            to="/faculty/review"
            className={`block px-6 py-3 text-gray-700 hover:bg-gray-100 transition duration-200 ${
              location.pathname === '/faculty/review' ? 'bg-blue-50 border-r-2 border-blue-500' : ''
            }`}
          >
            Review Submissions
          </Link>
          <Link
            to="/faculty/search"
            className={`block px-6 py-3 text-gray-700 hover:bg-gray-100 transition duration-200 ${
              location.pathname === '/faculty/search' ? 'bg-blue-50 border-r-2 border-blue-500' : ''
            }`}
          >
            Search Students
          </Link>
          <button
            onClick={() => { 
              localStorage.removeItem('userRole'); 
              window.location.href = '/login'; 
            }}
            className="w-full px-6 py-3 text-left text-red-600 hover:bg-gray-100 transition duration-200"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Faculty Review Panel</h1>
          <p className="text-gray-600">Approve or reject student activities.</p>
        </header>

        {/* Review Table - Shown on main faculty dashboard */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {submissions.map((submission) => (
                <tr key={submission.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {submission.studentName} ({submission.studentId})
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                    <div className="font-medium">{submission.title}</div>
                    <div className="text-gray-500">{submission.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      submission.status === 'approved' ? 'bg-green-100 text-green-800' :
                      submission.status === 'rejected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {submission.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    {submission.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(submission.id)}
                          className="text-green-600 hover:text-green-900 font-medium"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(submission.id)}
                          className="text-red-600 hover:text-red-900 font-medium"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {submission.status !== 'pending' && (
                      <span className="text-gray-500 text-sm">Handled</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Outlet /> {/* For nested faculty sub-routes */}
      </div>
    </div>
  );
}

export default FacultyDashboard;
