import React from 'react';
import { ThemeSettings } from '../types';
import { PaintBucket, Type, Moon, Sun } from 'lucide-react';
import { colorOptions, fonts } from '../data/templates';

interface ThemeSelectorProps {
  themeSettings: ThemeSettings;
  onChange: (settings: ThemeSettings) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ themeSettings, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...themeSettings, [name]: value });
  };

  const handleColorChange = (name: string, value: string) => {
    onChange({ ...themeSettings, [name]: value });
  };

  const handleToggle = () => {
    onChange({ ...themeSettings, darkMode: !themeSettings.darkMode });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-purple-800 mb-4">Theme Settings</h2>

      <div className="space-y-6">
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">Template Type</label>
          <select
            name="template"
            value={themeSettings.template}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate</option>
            <option value="birthday">Birthday</option>
            <option value="conference">Conference</option>
          </select>
        </div>

        <div className="form-group">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <PaintBucket size={16} /> Color Palette
          </label>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Primary Color</p>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorChange('primaryColor', color.value)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      themeSettings.primaryColor === color.value 
                        ? 'border-gray-800 ring-2 ring-gray-300'
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name} as primary color`}
                  ></button>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-1">Secondary Color</p>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorChange('secondaryColor', color.value)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      themeSettings.secondaryColor === color.value 
                        ? 'border-gray-800 ring-2 ring-gray-300'
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name} as secondary color`}
                  ></button>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-1">Accent Color</p>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => handleColorChange('accentColor', color.value)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      themeSettings.accentColor === color.value 
                        ? 'border-gray-800 ring-2 ring-gray-300'
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name} as accent color`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Type size={16} /> Typography
          </label>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Heading Font</p>
              <select
                name="fontHeading"
                value={themeSettings.fontHeading}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {fonts.map((font) => (
                  <option key={font.value} value={font.value}>
                    {font.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-1">Body Font</p>
              <select
                name="fontBody"
                value={themeSettings.fontBody}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {fonts.map((font) => (
                  <option key={font.value} value={font.value}>
                    {font.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              {themeSettings.darkMode ? <Moon size={16} /> : <Sun size={16} />} 
              {themeSettings.darkMode ? 'Dark Mode' : 'Light Mode'}
            </label>
            <button
              type="button"
              onClick={handleToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                themeSettings.darkMode ? 'bg-purple-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  themeSettings.darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;