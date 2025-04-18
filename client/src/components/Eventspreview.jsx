// src/components/EventsPreview.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';

const mockEvents = [
  {
    id: 1,
    title: 'Hackathon 2025',
    date: 'April 15, 2025',
    description: 'Join top minds to build disruptive solutions in our flagship 24-hour hackathon.',
  },
  {
    id: 2,
    title: 'AI Workshop',
    date: 'April 28, 2025',
    description: 'Hands-on session diving deep into the fundamentals and applications of AI.',
  },
];

const EventsPreview = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="my-10 px-6 py-8 sm:p-10 bg-yellow-50 rounded-2xl shadow-lg border-l-[8px] border-yellow-300 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-yellow-800 relative">
        Upcoming Events
        <span className="block w-20 h-1 bg-yellow-500 mt-2 rounded-full"></span>
      </h2>

      <ul className="space-y-6">
        {mockEvents.map((event) => (
          <li
            key={event.id}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                <p className="text-gray-600 mt-1">{event.description}</p>
              </div>
              <div className="flex items-center gap-2 text-yellow-700 font-medium">
                <CalendarDays size={18} />
                <span>{event.date}</span>
              </div>
            </div>
            <button className="mt-4 flex items-center gap-2 text-yellow-600 hover:text-yellow-800 font-semibold transition">
              View Details <ArrowRight size={18} />
            </button>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default EventsPreview;
