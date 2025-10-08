import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Student Portfolio</h1>
        <p className="text-gray-600 mb-6">Track activities, build your portfolio, and get approvals.</p>
        <div className="space-y-3">
          <Link
            to="/login"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
