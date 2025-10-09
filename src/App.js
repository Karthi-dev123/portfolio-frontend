// ================ og verision ================= 
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Home from './pages/Home';
// import SubmitActivity from './pages/SubmitActivity';
// import Portfolio from './pages/Portfolio';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<Home />}>
//           <Route path="submit-activity" element={<SubmitActivity />} />
//           <Route path="portfolio" element={<Portfolio />} />
//         </Route>
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
// ===============================================



// test version 
// ================ test verision ================= 
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Home from './pages/Home';
// import SubmitActivity from './pages/SubmitActivity';
// import Portfolio from './pages/Portfolio';
// import FacultyDashboard from './pages/FacultyDashboard';


// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/" element={<FacultyDashboard />}>
//           {/* Placeholder for nested routes */}
//         </Route>
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//     </div>
//   );
// }

// export default App;
// // ===============================================


// ================= NEW complete ( suppossedly ) VERSION ============
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react'; // For role state from localStorage
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import SubmitActivity from './pages/SubmitActivity';
import Portfolio from './pages/Portfolio';
import FacultyDashboard from './pages/FacultyDashboard'; // Import for faculty view

function App() {
  const [userRole, setUserRole] = useState('student'); // Initial role (checks storage on load)

  useEffect(() => {
    // Load role from localStorage on app start
    const role = localStorage.getItem('userRole') || 'student';
    setUserRole(role);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={userRole === 'faculty' ? <FacultyDashboard /> : <Home />}>
          {/* Student nested routes (only show if student) */}
          {userRole === 'student' && (
            <>
              <Route index element={null} /> {/* Main student dashboard */}
              <Route path="submit-activity" element={<SubmitActivity />} />
              <Route path="portfolio" element={<Portfolio />} />
            </>
          )}
          {/* Faculty nested routes (only show if faculty—placeholders for now) */}
          {userRole === 'faculty' && (
            <>
              <Route path="review" element={
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Full Review Sub-Page</h2>
                  <p className="text-gray-600">Coming soon: Advanced filters and bulk actions.</p>
                </div>
              } />
              <Route path="search" element={
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Search Students</h2>
                  <p className="text-gray-600">Coming soon: Search by ID, name, or department.</p>
                </div>
              } />
            </>
          )}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} /> {/* 404 redirect to home */}
      </Routes>
    </div>
  );
}

export default App;
//===========================================================================================
