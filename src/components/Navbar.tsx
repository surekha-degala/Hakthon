import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, BookOpen, Trophy, BarChart2, Settings } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Code2 className="w-8 h-8 mr-2" />
            <span className="text-xl font-bold">Campus Bridge</span>
          </Link>
          <div className="flex space-x-8">
            {!isAdmin ? (
              <>
                <a href="#courses" className="flex items-center hover:text-indigo-200">
                  <BookOpen className="w-5 h-5 mr-1" />
                  <span>Courses</span>
                </a>
                <a href="#practice" className="flex items-center hover:text-indigo-200">
                  <Trophy className="w-5 h-5 mr-1" />
                  <span>Practice</span>
                </a>
                <Link to="/admin" className="flex items-center hover:text-indigo-200">
                  <Settings className="w-5 h-5 mr-1" />
                  <span>Admin</span>
                </Link>
              </>
            ) : (
              <>
                <Link to="/admin/courses" className="flex items-center hover:text-indigo-200">
                  <BookOpen className="w-5 h-5 mr-1" />
                  <span>Courses</span>
                </Link>
                <Link to="/admin/problems" className="flex items-center hover:text-indigo-200">
                  <Trophy className="w-5 h-5 mr-1" />
                  <span>Problems</span>
                </Link>
                <Link to="/admin/analytics" className="flex items-center hover:text-indigo-200">
                  <BarChart2 className="w-5 h-5 mr-1" />
                  <span>Analytics</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;