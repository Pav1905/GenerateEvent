import React from 'react';
import { EventDetails, ThemeSettings } from '../types';

interface WebsitePreviewProps {
  eventDetails: EventDetails;
  themeSettings: ThemeSettings;
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ eventDetails, themeSettings }) => {
  const {
    title,
    date,
    time,
    venue,
    description,
    bannerImage,
    galleryImages,
    rsvpEnabled
  } = eventDetails;

  const {
    primaryColor,
    fontHeading,
    fontBody,
    darkMode
  } = themeSettings;

  // Format date for display
  const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : 'Date TBD';

  // Create style object
  const previewStyles = {
    "--primary-color": primaryColor,
    "--font-heading": `'${fontHeading}', sans-serif`,
    "--font-body": `'${fontBody}', sans-serif`,
    "backgroundColor": darkMode ? '#2d3748' : '#ffffff',
    "color": darkMode ? '#ffffff' : '#333333'
  } as React.CSSProperties;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="border-b border-gray-200 p-4 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800">Live Preview</h2>
        <p className="text-sm text-gray-500">
          This is how your event website will look
        </p>
      </div>
      
      <div 
        className="w-full h-[550px] overflow-y-auto"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <div style={previewStyles}>
          {/* Header/Hero Section */}
          <div 
            className="relative h-64 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${bannerImage || 'https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg'})` 
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6 text-center">
              <h1 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {title || 'Event Title'}
              </h1>
              <p className="text-xl mb-1">{formattedDate}</p>
              <p className="text-lg">{time ? time : ''}{time ? ' • ' : ''}{venue || 'Venue Name'}</p>
            </div>
          </div>

          {/* Navigation */}
          <div 
            className="sticky top-0 z-10 px-4 py-3 flex justify-center shadow-md"
            style={{ backgroundColor: primaryColor }}
          >
            <ul className="flex space-x-6 text-white font-medium">
              <li><a href="#about" className="hover:opacity-80">About</a></li>
              <li><a href="#details" className="hover:opacity-80">Details</a></li>
              <li><a href="#gallery" className="hover:opacity-80">Gallery</a></li>
              {rsvpEnabled && (
                <li>
                  <a 
                    href="#rsvp" 
                    className="bg-white bg-opacity-20 px-3 py-1 rounded hover:bg-opacity-30"
                  >
                    RSVP
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* About Section */}
          <section id="about" className="py-8 px-6">
            <div className="max-w-4xl mx-auto">
              <h2 
                className="text-2xl font-bold mb-4 text-center"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: primaryColor 
                }}
              >
                About The Event
              </h2>
              <p className="mb-4 text-center max-w-2xl mx-auto">
                {description || 'Description of your amazing event goes here...'}
              </p>
            </div>
          </section>

          {/* Details Section */}
          <section id="details" className="py-8 px-6" style={{ backgroundColor: darkMode ? '#4a5568' : '#f7f7f7' }}>
            <div className="max-w-4xl mx-auto">
              <h2 
                className="text-2xl font-bold mb-6 text-center"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: primaryColor 
                }}
              >
                Event Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className="p-6 rounded-lg shadow-md"
                  style={{ backgroundColor: darkMode ? '#2d3748' : 'white' }}
                >
                  <div className="flex items-start">
                    <div 
                      className="rounded-full p-3 mr-4"
                      style={{ backgroundColor: `${primaryColor}20` }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: primaryColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-1"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        Date & Time
                      </h3>
                      <p>{formattedDate}</p>
                      <p>{time}</p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="p-6 rounded-lg shadow-md"
                  style={{ backgroundColor: darkMode ? '#2d3748' : 'white' }}
                >
                  <div className="flex items-start">
                    <div 
                      className="rounded-full p-3 mr-4"
                      style={{ backgroundColor: `${primaryColor}20` }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: primaryColor }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 
                        className="text-lg font-semibold mb-1"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        Location
                      </h3>
                      <p>{venue || 'Venue Name'}</p>
                      <p>{eventDetails.address || 'Venue Address'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Preview */}
          {galleryImages && galleryImages.length > 0 && (
            <section id="gallery" className="py-8 px-6">
              <div className="max-w-4xl mx-auto">
                <h2 
                  className="text-2xl font-bold mb-6 text-center"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    color: primaryColor 
                  }}
                >
                  Gallery
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.slice(0, 3).map((img, index) => (
                    <div key={index} className="h-48 overflow-hidden rounded-lg shadow-md">
                      {img ? (
                        <img 
                          src={img} 
                          alt={`Gallery ${index + 1}`} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                          Image placeholder
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* RSVP Section */}
          {rsvpEnabled && (
            <section 
              id="rsvp" 
              className="py-8 px-6 text-white"
              style={{ backgroundColor: themeSettings.secondaryColor }}
            >
              <div className="max-w-4xl mx-auto">
                <h2 
                  className="text-2xl font-bold mb-4 text-center"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  RSVP
                </h2>
                <p className="text-center mb-6">
                  We look forward to celebrating with you!
                </p>
                
                <div className="max-w-md mx-auto p-6 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-transparent rounded-md focus:outline-none text-gray-800"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-transparent rounded-md focus:outline-none text-gray-800"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <button
                        className="w-full py-2 px-4 rounded-md font-medium"
                        style={{ backgroundColor: themeSettings.accentColor }}
                      >
                        Submit RSVP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Footer */}
          <footer 
            className="py-6 px-6 text-center text-white"
            style={{ backgroundColor: primaryColor }}
          >
            <p className="text-sm opacity-90">© {new Date().getFullYear()} {title || 'Event Name'}</p>
            <p className="text-xs opacity-75 mt-1">Created with Event Website Generator</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default WebsitePreview;