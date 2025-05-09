import React from 'react';
import { EventDetails } from '../types';
import { Calendar, Clock, MapPin, Type, User, Mail, Phone, Calendar as Calendar2, Check } from 'lucide-react';

interface EventDetailsFormProps {
  eventDetails: EventDetails;
  onChange: (details: EventDetails) => void;
}

const EventDetailsForm: React.FC<EventDetailsFormProps> = ({ eventDetails, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ ...eventDetails, [name]: value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    onChange({ ...eventDetails, [name]: checked });
  };

  const handleBannerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange({ ...eventDetails, bannerImage: value });
  };

  const handleGalleryImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const newImages = [...eventDetails.galleryImages];
    newImages[index] = value;
    onChange({ ...eventDetails, galleryImages: newImages });
  };

  const addGalleryImage = () => {
    onChange({
      ...eventDetails,
      galleryImages: [...eventDetails.galleryImages, '']
    });
  };

  const removeGalleryImage = (index: number) => {
    const newImages = [...eventDetails.galleryImages];
    newImages.splice(index, 1);
    onChange({ ...eventDetails, galleryImages: newImages });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6 overflow-y-auto max-h-[calc(100vh-40px)]">
      <h2 className="text-2xl font-semibold text-purple-800 mb-4">Event Details</h2>

      <div className="space-y-4">
        <div className="form-group">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Type size={16} /> Event Title
          </label>
          <input
            type="text"
            name="title"
            value={eventDetails.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="My Amazing Event"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Calendar size={16} /> Date
            </label>
            <input
              type="date"
              name="date"
              value={eventDetails.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="form-group">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Clock size={16} /> Time
            </label>
            <input
              type="time"
              name="time"
              value={eventDetails.time}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <MapPin size={16} /> Venue
          </label>
          <input
            type="text"
            name="venue"
            value={eventDetails.venue}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Venue Name"
          />
        </div>

        <div className="form-group">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <MapPin size={16} /> Address
          </label>
          <input
            type="text"
            name="address"
            value={eventDetails.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="123 Event Street, City"
          />
        </div>

        <div className="form-group">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <Type size={16} /> Description
          </label>
          <textarea
            name="description"
            value={eventDetails.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Describe your event..."
          ></textarea>
        </div>

        <div className="form-group">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
            <User size={16} /> Organizer
          </label>
          <input
            type="text"
            name="organizer"
            value={eventDetails.organizer}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Event Host or Organization"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Mail size={16} /> Contact Email
            </label>
            <input
              type="email"
              name="contactEmail"
              value={eventDetails.contactEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="contact@example.com"
            />
          </div>

          <div className="form-group">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
              <Phone size={16} /> Contact Phone
            </label>
            <input
              type="tel"
              name="contactPhone"
              value={eventDetails.contactPhone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="text-sm font-medium text-gray-700 mb-1">Banner Image URL</label>
          <input
            type="text"
            name="bannerImage"
            value={eventDetails.bannerImage}
            onChange={handleBannerImageChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="https://example.com/image.jpg"
          />
          {eventDetails.bannerImage && (
            <div className="mt-2 h-32 overflow-hidden rounded-md">
              <img
                src={eventDetails.bannerImage}
                alt="Banner Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        <div className="form-group">
          <label className="text-sm font-medium text-gray-700 mb-2">Gallery Images</label>
          {eventDetails.galleryImages.map((img, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={img}
                onChange={(e) => handleGalleryImageChange(e, index)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="https://example.com/gallery-image.jpg"
              />
              <button
                type="button"
                onClick={() => removeGalleryImage(index)}
                className="p-2 text-red-500 hover:bg-red-50 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addGalleryImage}
            className="mt-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors"
          >
            + Add Image
          </button>
        </div>

        <div className="form-group">
          <div className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              id="rsvpEnabled"
              name="rsvpEnabled"
              checked={eventDetails.rsvpEnabled}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="rsvpEnabled" className="text-sm font-medium text-gray-700">
              Enable RSVP
            </label>
          </div>

          {eventDetails.rsvpEnabled && (
            <div className="pl-6 mt-2">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1">
                <Calendar2 size={16} /> RSVP Deadline
              </label>
              <input
                type="date"
                name="rsvpDeadline"
                value={eventDetails.rsvpDeadline}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsForm;