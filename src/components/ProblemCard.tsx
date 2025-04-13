import React from 'react';
import { Code, CheckCircle } from 'lucide-react';

interface Example {
  input: string;
  output: string;
  explanation: string;
}

interface ProblemCardProps {
  title: string;
  difficulty: string;
  category: string;
  description: string;
  examples: Example[];
  submissions: number;
  successRate: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({
  title,
  difficulty,
  category,
  description,
  examples,
  submissions,
  successRate
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'hard':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="flex space-x-2 mt-2">
            <span className={`px-2 py-1 rounded-full text-sm ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
            <span className="px-2 py-1 rounded-full text-sm bg-indigo-100 text-indigo-600">
              {category}
            </span>
          </div>
        </div>
        <Code className="w-6 h-6 text-indigo-600" />
      </div>
      <p className="mt-4 text-gray-700">{description}</p>
      <div className="mt-4 bg-gray-50 rounded-md p-4">
        <h4 className="font-medium text-gray-900">Example:</h4>
        {examples.map((example, index) => (
          <div key={index} className="mt-2 space-y-1">
            <p className="text-sm text-gray-600">Input: {example.input}</p>
            <p className="text-sm text-gray-600">Output: {example.output}</p>
            <p className="text-sm text-gray-500 italic">{example.explanation}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
          <span>{successRate}% Success Rate</span>
        </div>
        <span>{submissions} Submissions</span>
      </div>
    </div>
  );
};

export default ProblemCard;