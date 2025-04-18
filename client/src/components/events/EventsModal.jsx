// src/components/events/EventFormModal.jsx
import React, { useState, useEffect } from 'react';

const EventFormModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState({ name: '', date: '', venue: '' });
  const [error, setError] = useState('');

  // If there's initial data, set the form values to the data passed
  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!form.name || !form.date || !form.venue) {
      setError('All fields are required');
      return;
    }

    setError(''); // Clear any previous errors
    onSubmit(form);
    onClose();
    setForm({ name: '', date: '', venue: '' });
  };

  // Close modal if not open
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300"
      aria-hidden={!isOpen}
    >
      <div className="bg-white p-6 rounded-xl w-96 space-y-6 shadow-xl transform transition-all duration-300 scale-100 hover:scale-105">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          {initialData ? 'Edit' : 'Add'} Event
        </h2>

        {error && (
          <div className="text-red-600 text-sm text-center p-2 bg-red-100 rounded">
            {error}
          </div>
        )}

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Event Name"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          name="venue"
          value={form.venue}
          onChange={handleChange}
          placeholder="Venue"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <div className="flex justify-between space-x-4">
          <button
            onClick={onClose}
            className="w-full py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-lg transition duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-200"
          >
            {initialData ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventFormModal;
