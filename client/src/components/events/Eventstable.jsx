// src/components/events/EventTable.jsx
import React from 'react';

const EventTable = ({ events, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white rounded-xl shadow-lg table-auto">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <th className="py-3 px-6">Event Name</th>
            <th className="py-3 px-6">Date</th>
            <th className="py-3 px-6">Venue</th>
            <th className="py-3 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, idx) => (
            <tr
              key={idx}
              className="border-t text-sm hover:bg-gray-50 transition duration-300"
            >
              <td className="py-4 px-6 text-gray-700">{event.name}</td>
              <td className="py-4 px-6 text-gray-500">{event.date}</td>
              <td className="py-4 px-6 text-gray-500">{event.venue}</td>
              <td className="py-4 px-6 space-x-4 flex justify-start">
                <button
                  onClick={() => onEdit(idx)}
                  className="text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-md transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(idx)}
                  className="text-red-600 hover:bg-red-100 px-4 py-2 rounded-md transition duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
