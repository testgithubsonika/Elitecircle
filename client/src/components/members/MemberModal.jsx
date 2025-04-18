// src/components/events/MemberProfileModal.jsx
import React from 'react';
import { X } from 'lucide-react';

const MemberProfileModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          <X size={20} />
        </button>
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={member.photoURL || '/default-avatar.png'}
            alt={member.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-yellow-400 shadow-md"
          />
          <h2 className="text-2xl font-semibold text-yellow-700">{member.name}</h2>
          <p className="text-yellow-600 text-sm">{member.role}</p>
          <div className="mt-4">
            <p className="text-gray-600 text-sm">
              <strong>Email:</strong> {member.email || 'N/A'}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Phone:</strong> {member.phone || 'N/A'}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Joined:</strong> {member.joinedDate || 'N/A'}
            </p>
            {member.bio && (
              <div className="mt-2 text-gray-600 text-sm">
                <strong>About:</strong>
                <p className="mt-1">{member.bio}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfileModal;
