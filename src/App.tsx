import React, { useState } from 'react';
import { EventDetails, ThemeSettings, Template, EventType } from './types';
import { templates, defaultEventDetails, defaultThemeSettings } from './data/templates';
import EventDetailsForm from './components/EventDetailsForm';
import ThemeSelector from './components/ThemeSelector';
import WebsitePreview from './components/WebsitePreview';
import TemplateGallery from './components/TemplateGallery';
import GenerateWebsiteButton from './components/GenerateWebsiteButton';
import { Layout, Palette, FileText, Monitor, FileCode, ArrowRight, LayoutGrid } from 'lucide-react';

function App() {
  const [step, setStep] = useState(1);
  const [eventDetails, setEventDetails] = useState<EventDetails>(defaultEventDetails);
  const [themeSettings, setThemeSettings] = useState<ThemeSettings>(defaultThemeSettings);
  const [selectedType, setSelectedType] = useState<EventType | 'all'>('all');

  const handleTemplateSelect = (template: Template) => {
    if (template.type === 'all') {
      setSelectedType('all');
      return;
    }

    setSelectedType(template.type);
    setThemeSettings({
      ...themeSettings,
      template: template.type
    });

    // Move to next step
    setStep(2);
  };

  // Update event details
  const handleEventDetailsChange = (details: EventDetails) => {
    setEventDetails(details);
  };

  // Update theme settings
  const handleThemeSettingsChange = (settings: ThemeSettings) => {
    setThemeSettings(settings);
  };

  // Navigation between steps
  const goToNextStep = () => {
    window.scrollTo(0, 0);
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    window.scrollTo(0, 0);
    setStep(step - 1);
  };

  // Render the current step
  const renderStep = () => {
    switch (step) {
      case 1: // Template Selection
        return (
          <div className="max-w-7xl mx-auto p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Event Website Generator</h1>
              <p className="text-lg text-gray-600">
                Create a beautiful static website for your event in minutes
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-8">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-700 mr-3">
                  <LayoutGrid size={18} />
                </div>
                <h2 className="text-xl font-semibold">Step 1: Choose a Template</h2>
              </div>
              <p className="mt-2 text-gray-600 ml-11">
                Select a template that matches your event type
              </p>
            </div>
            
            <TemplateGallery 
              templates={templates} 
              selectedType={selectedType} 
              onSelect={handleTemplateSelect} 
            />
            
            <div className="mt-8 flex justify-end">
              <button
                onClick={goToNextStep}
                className="flex items-center gap-2 px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors"
              >
                Continue to Details <ArrowRight size={18} />
              </button>
            </div>
          </div>
        );
        
      case 2: // Event Details & Theme Settings
        return (
          <div className="max-w-7xl mx-auto p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Event Website Generator</h1>
              <p className="text-lg text-gray-600">
                Create a beautiful static website for your event in minutes
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-8">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-700 mr-3">
                  <FileText size={18} />
                </div>
                <h2 className="text-xl font-semibold">Step 2: Enter Event Details</h2>
              </div>
              <p className="mt-2 text-gray-600 ml-11">
                Add information about your event and customize the theme
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <EventDetailsForm 
                eventDetails={eventDetails} 
                onChange={handleEventDetailsChange} 
              />
              
              <div className="space-y-6">
                <ThemeSelector 
                  themeSettings={themeSettings} 
                  onChange={handleThemeSettingsChange} 
                />
                
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={goToPreviousStep}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  
                  <button
                    onClick={goToNextStep}
                    className="flex items-center gap-2 px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-colors"
                  >
                    Preview Website <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 3: // Preview & Generate
        return (
          <div className="max-w-7xl mx-auto p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Event Website Generator</h1>
              <p className="text-lg text-gray-600">
                Create a beautiful static website for your event in minutes
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm mb-8">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-700 mr-3">
                  <Monitor size={18} />
                </div>
                <h2 className="text-xl font-semibold">Step 3: Preview and Generate</h2>
              </div>
              <p className="mt-2 text-gray-600 ml-11">
                Review your event website and generate the code
              </p>
            </div>
            
            <div className="space-y-8">
              <WebsitePreview 
                eventDetails={eventDetails} 
                themeSettings={themeSettings} 
              />
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FileCode size={20} className="text-purple-700 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-800">Website Generation</h3>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Your event website will include the following files:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-md border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-1">index.html</h4>
                    <p className="text-sm text-gray-500">
                      The main HTML structure with all your event content
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-md border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-1">styles.css</h4>
                    <p className="text-sm text-gray-500">
                      Custom styling with your selected colors and fonts
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-md border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-1">script.js</h4>
                    <p className="text-sm text-gray-500">
                      JavaScript for interactive elements like RSVP form
                    </p>
                  </div>
                </div>
                
                <GenerateWebsiteButton 
                  eventDetails={eventDetails} 
                  themeSettings={themeSettings} 
                />
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={goToPreviousStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back to Customization
                </button>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div>Unknown step</div>;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <Layout className="h-8 w-8 text-purple-700 mr-3" />
            <span className="font-bold text-xl text-gray-900">EventSite Builder</span>
          </div>
          
          <nav>
            <ul className="flex space-x-1">
              <li>
                <button 
                  onClick={() => setStep(1)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    step === 1 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  1. Template
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setStep(2)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    step === 2 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  2. Details
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setStep(3)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    step === 3 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  3. Preview
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="pb-12">
        {renderStep()}
      </main>
      
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">EventSite Builder</h3>
              <p className="text-gray-400 text-sm">
                Create beautiful event websites in minutes with no coding required.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Features</h3>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>Multiple event templates</li>
                <li>Customizable colors and fonts</li>
                <li>Mobile-responsive design</li>
                <li>RSVP functionality</li>
                <li>Image gallery</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">About</h3>
              <p className="text-gray-400 text-sm mb-3">
                EventSite Builder helps you create professional event websites without any technical knowledge.
              </p>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} EventSite Builder. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;