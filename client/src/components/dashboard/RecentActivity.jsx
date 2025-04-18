// src/components/dashboard/RecentActivity.jsx
import React from 'react';
import { Clock } from 'lucide-react'; // Optional icon package

const activities = [
  { text: 'New member joined: Arjun Sharma', time: '2 hours ago' },
  { text: 'Annual Fest event added', time: 'Yesterday' },
  { text: 'Finance club updated its description', time: '2 days ago' },
  { text: 'Design team uploaded new logo', time: '3 days ago' },
];

const RecentActivity = () => {
  return (
    <div className="bg-yellow-50 p-6 rounded-2xl shadow-lg mt-6 border border-yellow-200">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="text-yellow-600 w-5 h-5" />
        <h3 className="text-xl font-bold text-yellow-800">Recent Activity</h3>
      </div>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="flex items-start justify-between bg-white px-4 py-2 rounded-xl shadow-sm border border-yellow-100 hover:shadow-md transition duration-200"
          >
            <span className="text-yellow-700 font-medium">{activity.text}</span>
            <span className="text-sm text-yellow-500 italic">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
