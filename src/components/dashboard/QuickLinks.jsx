// src/components/dashboard/QuickLinks.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Manage Events', to: '/events' },
  { label: 'Member Directory', to: '/members' },
  { label: 'Club Settings', to: '/clubs' },
];

const QuickLinks = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md mt-6">
      <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.to}
              className="text-blue-600 hover:underline text-lg"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
