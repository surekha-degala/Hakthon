import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProblemDetail from './pages/ProblemDetail';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCourses from './pages/admin/AdminCourses';
import AdminProblems from './pages/admin/AdminProblems';
import AdminAnalytics from './pages/admin/AdminAnalytics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problem/:id" element={<ProblemDetail />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<AdminAnalytics />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="problems" element={<AdminProblems />} />
            <Route path="analytics" element={<AdminAnalytics />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;