import React from 'react';
import { BookOpen, Video, FileText } from 'lucide-react';

interface Material {
  type: string;
  title: string;
  url: string;
}

interface CourseCardProps {
  title: string;
  instructor: string;
  description: string;
  materials: Material[];
  progress: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  description,
  materials,
  progress
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-gray-600 mt-1">{instructor}</p>
        </div>
        <BookOpen className="w-6 h-6 text-indigo-600" />
      </div>
      <p className="mt-4 text-gray-700">{description}</p>
      <div className="mt-4">
        <div className="flex items-center">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="ml-2 text-sm text-gray-600">{progress}%</span>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {materials.map((material, index) => (
          <div key={index} className="flex items-center text-gray-700">
            {material.type === 'video' ? (
              <Video className="w-4 h-4 mr-2" />
            ) : (
              <FileText className="w-4 h-4 mr-2" />
            )}
            <span className="text-sm">{material.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;