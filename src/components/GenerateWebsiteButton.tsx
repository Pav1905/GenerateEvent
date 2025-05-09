import React, { useState } from 'react';
import { EventDetails, ThemeSettings } from '../types';
import { generateZipFile } from '../utils/codeGenerator';
import { Download, Loader } from 'lucide-react';

interface GenerateWebsiteButtonProps {
  eventDetails: EventDetails;
  themeSettings: ThemeSettings;
}

const GenerateWebsiteButton: React.FC<GenerateWebsiteButtonProps> = ({ 
  eventDetails, 
  themeSettings 
}) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    try {
      // Generate the zip file
      const zipBlob = await generateZipFile(eventDetails, themeSettings);
      
      // Create a download link
      const downloadUrl = URL.createObjectURL(zipBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = downloadUrl;
      downloadLink.download = `${eventDetails.title.replace(/\s+/g, '-').toLowerCase()}-website.zip`;
      
      // Trigger the download
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      // Clean up the URL object
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Error generating website:', error);
      alert('There was an error generating your website. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleGenerate}
      disabled={isGenerating}
      className={`w-full py-3 px-4 flex items-center justify-center gap-2 rounded-lg text-white font-semibold shadow-lg transition-transform ${
        isGenerating 
          ? 'bg-purple-500 cursor-not-allowed' 
          : 'bg-purple-700 hover:bg-purple-800 active:transform active:scale-95'
      }`}
    >
      {isGenerating ? (
        <>
          <Loader size={20} className="animate-spin" />
          Generating Website...
        </>
      ) : (
        <>
          <Download size={20} />
          Generate & Download Website
        </>
      )}
    </button>
  );
};

export default GenerateWebsiteButton;