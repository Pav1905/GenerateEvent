import React from 'react';
import { Template, EventType } from '../types';

interface TemplateGalleryProps {
  templates: Template[];
  selectedType: EventType | 'all';
  onSelect: (template: Template) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ 
  templates, 
  selectedType,
  onSelect 
}) => {
  // Filter templates by selected type
  const filteredTemplates = selectedType === 'all' 
    ? templates 
    : templates.filter(t => t.type === selectedType);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-purple-800 mb-6">Choose a Template</h2>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          className={`px-4 py-2 rounded-full text-sm ${
            selectedType === 'all' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onSelect({ ...templates[0], type: 'all' })}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm ${
            selectedType === 'wedding' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onSelect({ ...templates[0], type: 'wedding' })}
        >
          Wedding
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm ${
            selectedType === 'corporate' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onSelect({ ...templates[1], type: 'corporate' })}
        >
          Corporate
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm ${
            selectedType === 'birthday' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onSelect({ ...templates[2], type: 'birthday' })}
        >
          Birthday
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm ${
            selectedType === 'conference' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          onClick={() => onSelect({ ...templates[3], type: 'conference' })}
        >
          Conference
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={template.thumbnail}
                alt={template.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-semibold">{template.name}</h3>
              <p className="text-sm opacity-90">{template.description}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-40">
              <button
                onClick={() => onSelect(template)}
                className="bg-white text-purple-800 font-medium px-4 py-2 rounded hover:bg-purple-50 transition-colors"
              >
                Use This Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;