// src/components/dashboard/StatsCards.jsx
import React from 'react';
import { Users, CalendarCheck, Layers } from 'lucide-react'; // Optional icons

const stats = [
  {
    label: 'Total Members',
    value: 142,
    icon: <Users className="w-6 h-6 text-yellow-600" />,
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    border: 'border-yellow-200',
  },
  {
    label: 'Active Events',
    value: 8,
    icon: <CalendarCheck className="w-6 h-6 text-green-600" />,
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-200',
  },
  {
    label: 'Clubs Managed',
    value: 6,
    icon: <Layers className="w-6 h-6 text-purple-600" />,
    bg: 'bg-purple-100',
    text: 'text-purple-800',
    border: 'border-purple-200',
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className={`p-6 rounded-2xl shadow-sm border ${item.bg} ${item.border} transition hover:shadow-md hover:scale-[1.02] duration-300`}
        >
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className={`text-sm font-medium ${item.text}`}>{item.label}</span>
              <span className={`text-3xl font-bold mt-1 ${item.text}`}>{item.value}</span>
            </div>
            <div className="bg-white p-2 rounded-full shadow-inner">{item.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
