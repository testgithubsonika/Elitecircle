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
    <div className="bg-yellow-50 p-6 rounded-2xl shadow-lg mt-6 border border-yellow-200">
      <h3 className="text-xl font-bold text-yellow-800 mb-4">Quick Links</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.to}
              className="text-yellow-700 hover:text-yellow-900 text-lg font-medium transition-colors duration-200"
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
