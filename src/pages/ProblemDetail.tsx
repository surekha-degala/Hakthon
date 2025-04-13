import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw } from 'lucide-react';
import problemsData from '../data/problems.json';

function ProblemDetail() {
  const { id } = useParams();
  const problem = problemsData.problems.find(p => p.id === Number(id));
  const [code, setCode] = useState(`function solution() {
  // Write your code here
  
}`);
  const [output, setOutput] = useState('');
  const [language, setLanguage] = useState('javascript');

  if (!problem) {
    return <div>Problem not found</div>;
  }

  const handleRun = () => {
    try {
      // In a real implementation, this would send the code to a backend
      // For now, we'll just evaluate it locally (not secure for production)
      const result = eval(`(${code})()`);
      setOutput(String(result));
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Problem Description */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h1>
          <div className="flex space-x-2 mb-4">
            <span className={`px-2 py-1 rounded-full text-sm ${
              problem.difficulty.toLowerCase() === 'easy' ? 'bg-green-100 text-green-600' :
              problem.difficulty.toLowerCase() === 'medium' ? 'bg-yellow-100 text-yellow-600' :
              'bg-red-100 text-red-600'
            }`}>
              {problem.difficulty}
            </span>
            <span className="px-2 py-1 rounded-full text-sm bg-indigo-100 text-indigo-600">
              {problem.category}
            </span>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">{problem.description}</p>
            <h3 className="text-lg font-semibold mb-2">Examples:</h3>
            {problem.examples.map((example, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md mb-4">
                <p className="font-mono text-sm mb-1">Input: {example.input}</p>
                <p className="font-mono text-sm mb-1">Output: {example.output}</p>
                <p className="text-gray-600 text-sm italic">{example.explanation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code Editor */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between mb-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-1 border rounded-md"
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </select>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCode(`function solution() {\n  // Write your code here\n  \n}`)}
                  className="flex items-center px-3 py-1 text-gray-600 hover:text-gray-800"
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </button>
                <button
                  onClick={handleRun}
                  className="flex items-center px-4 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  <Play className="w-4 h-4 mr-1" />
                  Run
                </button>
              </div>
            </div>
            <Editor
              height="400px"
              language={language}
              value={code}
              onChange={(value) => setCode(value || '')}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                automaticLayout: true,
              }}
            />
          </div>

          {/* Output Console */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Output:</h3>
            <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
              {output || 'Run your code to see the output'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemDetail;