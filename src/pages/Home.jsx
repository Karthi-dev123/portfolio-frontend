import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const location = useLocation(); // Check current route
  const isMainDashboard = location.pathname === '/'; // Only show cards on main /

  const [submissions, setSubmissions] = useState([
    { id: 1, title: 'Hackathon Win', description: 'SRM Hackathon 2025', status: 'approved', date: '2025-10-01', type: 'Tech' },
    { id: 2, title: 'Sports Event', description: 'College Football Match', status: 'pending', date: '2025-09-15', type: 'Sports' },
  ]); // Mock data—later from backend API

  useEffect(() => {
    // Mock fetch submissions (only on main dashboard)
    if (isMainDashboard) {
      console.log('Dashboard loaded—fetched submissions');
    }
  }, [isMainDashboard]);

  const handleLogout = () => {
    navigate('/login');
    // Later: Clear auth
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar - Always visible */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800">Student Dashboard</h2>
          <p className="text-sm text-gray-600">Welcome, Student</p>
        </div>
        <nav className="mt-6">
          <Link
            to="/"
            className={`block px-6 py-3 text-gray-700 hover:bg-gray-100 transition duration-200 ${
              location.pathname === '/' ? 'bg-blue-50 border-r-2 border-blue-500' : ''
            }`}
          >
            Dashboard Overview
          </Link>
          <Link
            to="/submit-activity"
            className={`block px-6 py-3 text-gray-700 hover:bg-gray-100 transition duration-200 ${
              location.pathname === '/submit-activity' ? 'bg-blue-50 border-r-2 border-blue-500' : ''
            }`}
          >
            Submit Activity
          </Link>
          <Link
            to="/portfolio"
            className={`block px-6 py-3 text-gray-700 hover:bg-gray-100 transition duration-200 ${
              location.pathname === '/portfolio' ? 'bg-blue-50 border-r-2 border-blue-500' : ''
            }`}
          >
            My Portfolio
          </Link>
          <button
            onClick={handleLogout}
            className="w-full px-6 py-3 text-left text-red-600 hover:bg-gray-100 transition duration-200"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content - Conditional based on route */}
      <div className="flex-1 p-6">
        {/* Always show header, but customize title */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {isMainDashboard ? 'Your Activities' : location.pathname === '/submit-activity' ? 'Submit New Activity' : 'My Portfolio'}
          </h1>
          <p className="text-gray-600">
            {isMainDashboard ? 'View and manage your submissions.' : location.pathname === '/submit-activity' ? 'Add a new achievement to your portfolio.' : 'Build and preview your portfolio.'}
          </p>
        </header>

        {/* Show cards ONLY on main dashboard */}
        {isMainDashboard && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {submissions.map((activity) => (
              <div
                key={activity.id}
                className={`p-4 rounded-lg shadow-md ${
                  activity.status === 'approved' ? 'bg-green-50 border-l-4 border-green-500' : 'bg-yellow-50 border-l-4 border-yellow-500'
                }`}
              >
                <h3 className="font-semibold text-gray-800">{activity.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                <p className="text-xs text-gray-500 mt-2">{activity.date} • {activity.type}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                  activity.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {activity.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Outlet for sub-pages - Always renders nested content */}
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
