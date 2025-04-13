import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import ProblemCard from '../components/ProblemCard';
import coursesData from '../data/courses.json';
import problemsData from '../data/problems.json';
import { Sparkles, Brain, Trophy } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Campus Bridge</h1>
            <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
              Your integrated platform for academic learning and coding skill development
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered Learning</h3>
              <p className="text-gray-600">Get real-time code hints and smart feedback from our AI assistant</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Structured Learning</h3>
              <p className="text-gray-600">Follow curated learning paths for different programming languages</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-indigo-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Practice & Compete</h3>
              <p className="text-gray-600">Solve coding challenges and participate in contests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Courses Section */}
      <section id="courses" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Academic Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coursesData.academicCourses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                instructor={course.instructor}
                description={course.description}
                materials={course.materials}
                progress={course.progress}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Coding Practice Section */}
      <section id="practice" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Practice Problems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemsData.problems.map((problem) => (
              <div key={problem.id} onClick={() => navigate(`/problem/${problem.id}`)} className="cursor-pointer">
                <ProblemCard
                  title={problem.title}
                  difficulty={problem.difficulty}
                  category={problem.category}
                  description={problem.description}
                  examples={problem.examples}
                  submissions={problem.submissions}
                  successRate={problem.successRate}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;