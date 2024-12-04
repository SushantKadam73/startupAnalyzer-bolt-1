import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';
import {
  Home,
  Briefcase,
  Lightbulb,
  LineChart,
  Users,
  Search,
  Rocket,
  Globe,
  MessageSquare,
  Settings,
} from 'lucide-react';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentProject = useStore((state) => state.currentProject);

  const modules = [
    { name: 'Idea Generation', icon: <Lightbulb size={20} /> },
    { name: 'Market Analysis', icon: <LineChart size={20} /> },
    { name: 'Competitive Analysis', icon: <Users size={20} /> },
    { name: 'Customer Discovery', icon: <Search size={20} /> },
    { name: 'How to MVP', icon: <Rocket size={20} /> },
    { name: 'Product Evolution', icon: <MessageSquare size={20} /> },
    { name: 'International Market', icon: <Globe size={20} /> },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-dark-background border-r border-gray-200 dark:border-gray-800 p-6">
      <div className="flex flex-col h-full">
        {/* Top Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Briefcase className="text-light-primary dark:text-dark-primary" />
            <span className="font-heading font-bold text-xl text-light-text dark:text-dark-text">
              Startup Compass
            </span>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {currentProject?.name || 'Select a Project'}
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => navigate('/')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                location.pathname === '/' ? 'bg-light-primary/10 text-light-primary' : 'text-light-text dark:text-dark-text'
              }`}
            >
              <Home size={20} />
              <span>Dashboard</span>
            </button>
          </nav>
        </div>

        {/* Middle Section - Modules */}
        <div className="flex-1 mt-8">
          <div className="space-y-2">
            {modules.map((module) => (
              <button
                key={module.name}
                className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-light-text dark:text-dark-text hover:bg-light-primary/10"
              >
                {module.icon}
                <span>{module.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto space-y-2">
          <button
            onClick={() => navigate('/settings')}
            className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
              location.pathname === '/settings' ? 'bg-light-primary/10 text-light-primary' : 'text-light-text dark:text-dark-text'
            }`}
          >
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;