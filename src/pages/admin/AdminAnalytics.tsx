import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import coursesData from '../../data/courses.json';
import problemsData from '../../data/problems.json';

const AdminAnalytics = () => {
  const problemStats = problemsData.problems.map(problem => ({
    name: problem.title,
    submissions: problem.submissions,
    successRate: problem.successRate
  }));

  const courseProgress = coursesData.academicCourses.map(course => ({
    name: course.title,
    progress: course.progress
  }));

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Problem Statistics</h2>
          <BarChart width={500} height={300} data={problemStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="submissions" fill="#8884d8" />
            <Bar dataKey="successRate" fill="#82ca9d" />
          </BarChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Course Progress</h2>
          <LineChart width={500} height={300} data={courseProgress}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="progress" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;