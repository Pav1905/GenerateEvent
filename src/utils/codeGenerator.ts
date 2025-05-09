import { EventDetails, ThemeSettings } from '../types';
import JSZip from 'jszip';

export const generateHtmlCode = (eventDetails: EventDetails, themeSettings: ThemeSettings): string => {
  const {
    title,
    date,
    time,
    venue,
    address,
    description,
    bannerImage,
    galleryImages,
    organizer,
    contactEmail,
    contactPhone,
    rsvpEnabled,
    rsvpDeadline
  } = eventDetails;

  const {
    primaryColor,
    secondaryColor,
    accentColor,
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
  }) : '';

  const formattedDeadline = rsvpDeadline ? new Date(rsvpDeadline).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  // Generate HTML
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${fontHeading.replace(' ', '+')}&family=${fontBody.replace(' ', '+')}&display=swap">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body class="${darkMode ? 'dark-mode' : ''}">
  <header>
    <div class="hero" style="background-image: url('${bannerImage}');">
      <div class="hero-content">
        <h1>${title}</h1>
        <p class="date-time">${formattedDate} ${time ? '• ' + time : ''}</p>
        <p class="venue">${venue ? venue : ''}</p>
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#details">Details</a></li>
        <li><a href="#gallery">Gallery</a></li>
        ${rsvpEnabled ? '<li><a href="#rsvp" class="rsvp-button">RSVP</a></li>' : ''}
      </ul>
    </nav>
  </header>

  <section id="about">
    <div class="container">
      <h2>About The Event</h2>
      <p>${description}</p>
    </div>
  </section>

  <section id="details">
    <div class="container">
      <h2>Event Details</h2>
      <div class="details-grid">
        <div class="detail-card">
          <i class="fas fa-calendar"></i>
          <h3>Date & Time</h3>
          <p>${formattedDate}</p>
          <p>${time}</p>
        </div>
        <div class="detail-card">
          <i class="fas fa-map-marker-alt"></i>
          <h3>Location</h3>
          <p>${venue}</p>
          <p>${address}</p>
        </div>
        <div class="detail-card">
          <i class="fas fa-user"></i>
          <h3>Organizer</h3>
          <p>${organizer}</p>
        </div>
        <div class="detail-card">
          <i class="fas fa-envelope"></i>
          <h3>Contact</h3>
          <p>${contactEmail}</p>
          <p>${contactPhone}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="gallery">
    <div class="container">
      <h2>Gallery</h2>
      <div class="gallery-grid">
        ${galleryImages.map(img => `<div class="gallery-item">
          <img src="${img}" alt="Event image">
        </div>`).join('')}
      </div>
    </div>
  </section>

  ${rsvpEnabled ? `
  <section id="rsvp">
    <div class="container">
      <h2>RSVP</h2>
      <p>Please let us know if you'll be joining us${rsvpDeadline ? ` by ${formattedDeadline}` : ''}.</p>
      <form id="rsvp-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="guests">Number of Guests</label>
          <select id="guests">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5+</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Message (Optional)</label>
          <textarea id="message"></textarea>
        </div>
        <div class="form-group">
          <button type="submit">Submit RSVP</button>
        </div>
      </form>
    </div>
  </section>
  ` : ''}

  <footer>
    <div class="container">
      <p>&copy; ${new Date().getFullYear()} ${title}</p>
      <p>Created with Event Website Generator</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;
};

export const generateCssCode = (themeSettings: ThemeSettings): string => {
  const {
    primaryColor,
    secondaryColor,
    accentColor,
    fontHeading,
    fontBody,
    darkMode,
    template
  } = themeSettings;

  // Different styles based on template type
  let templateSpecificStyles = '';
  
  if (template === 'wedding') {
    templateSpecificStyles = `
    body {
      background-color: #ffffff;
    }
    h1, h2, h3 {
      font-family: '${fontHeading}', serif;
    }
    .hero::before {
      background: rgba(0, 0, 0, 0.3);
    }
    .detail-card {
      border-radius: 10px;
    }`;
  } else if (template === 'corporate') {
    templateSpecificStyles = `
    body {
      background-color: #f8f9fa;
    }
    header nav {
      background-color: #2d3748;
    }
    h1, h2, h3 {
      font-weight: 600;
    }
    .detail-card {
      border-radius: 4px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }`;
  } else if (template === 'birthday') {
    templateSpecificStyles = `
    body {
      background-color: #ffffff;
    }
    h1, h2, h3 {
      font-family: '${fontHeading}', cursive;
    }
    .hero-content h1 {
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    }
    .detail-card {
      border-radius: 20px;
    }`;
  } else if (template === 'conference') {
    templateSpecificStyles = `
    body {
      background-color: #f8f9fa;
    }
    h1, h2, h3 {
      font-weight: 700;
    }
    header nav {
      background-color: ${primaryColor};
    }
    .detail-card {
      border-radius: 0;
    }`;
  }

  // Generate CSS
  return `/* Global Styles */
:root {
  --primary-color: ${primaryColor};
  --secondary-color: ${secondaryColor};
  --accent-color: ${accentColor};
  --text-color: ${darkMode ? '#ffffff' : '#333333'};
  --background-color: ${darkMode ? '#2d3748' : '#ffffff'};
  --card-bg: ${darkMode ? '#4a5568' : '#ffffff'};
  --font-heading: '${fontHeading}', sans-serif;
  --font-body: '${fontBody}', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  color: var(--text-color);
  background-color: var(--background-color);
  line-height: 1.6;
}

.dark-mode {
  --text-color: #ffffff;
  --background-color: #2d3748;
  --card-bg: #4a5568;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1, h2, h3 {
  font-family: var(--font-heading);
  color: var(--primary-color);
  margin-bottom: 16px;
}

/* Header and Navigation */
header {
  position: relative;
}

.hero {
  position: relative;
  height: 80vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 24px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 16px;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}

.date-time, .venue {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

nav {
  background-color: var(--primary-color);
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

nav li {
  margin: 0;
}

nav a {
  display: block;
  padding: 16px 20px;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.rsvp-button {
  background-color: var(--accent-color);
  border-radius: 4px;
  margin: 8px;
  padding: 8px 16px;
}

.rsvp-button:hover {
  background-color: var(--accent-color);
  opacity: 0.9;
}

/* Sections */
section {
  padding: 80px 0;
}

section h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
}

section p {
  margin-bottom: 24px;
}

/* Details Section */
.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-top: 40px;
}

.detail-card {
  background-color: var(--card-bg);
  padding: 32px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.detail-card i {
  font-size: 36px;
  color: var(--primary-color);
  margin-bottom: 16px;
}

.detail-card h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
}

/* Gallery Section */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
}

.gallery-item {
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

/* RSVP Section */
#rsvp {
  background-color: var(--secondary-color);
  color: white;
}

#rsvp h2 {
  color: white;
}

.form-group {
  margin-bottom: 24px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

input, select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: var(--font-body);
}

button {
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--accent-color);
  opacity: 0.9;
}

/* Footer */
footer {
  background-color: var(--primary-color);
  color: white;
  padding: 32px 0;
  text-align: center;
}

footer p {
  margin: 8px 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .date-time, .venue {
    font-size: 1.2rem;
  }
  
  nav ul {
    flex-direction: column;
  }
  
  nav a {
    padding: 12px;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  section {
    padding: 40px 0;
  }
}

/* Template-specific styles */
${templateSpecificStyles}`;
};

export const generateJsCode = (): string => {
  return `// Event website script
document.addEventListener('DOMContentLoaded', function() {
  // RSVP Form Handling
  const rsvpForm = document.getElementById('rsvp-form');
  
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const guests = document.getElementById('guests').value;
      const message = document.getElementById('message').value;
      
      // In a real app, you would send this to a server
      // For demo purposes, we'll just show an alert
      alert(\`Thank you, \${name}! Your RSVP has been received. We look forward to seeing you and your \${guests} guest(s).\`);
      
      // Reset the form
      rsvpForm.reset();
    });
  }
  
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
    });
  });
  
  // Image gallery lightbox functionality could be added here
});`;
};

export const generateZipFile = async (
  eventDetails: EventDetails,
  themeSettings: ThemeSettings
): Promise<Blob> => {
  const zip = new JSZip();
  
  // Add HTML file
  const htmlContent = generateHtmlCode(eventDetails, themeSettings);
  zip.file('index.html', htmlContent);
  
  // Add CSS file
  const cssContent = generateCssCode(themeSettings);
  zip.file('styles.css', cssContent);
  
  // Add JS file
  const jsContent = generateJsCode();
  zip.file('script.js', jsContent);
  
  // Create the zip file
  const blob = await zip.generateAsync({ type: 'blob' });
  return blob;
};