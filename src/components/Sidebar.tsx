import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { useFeedback } from '../contexts/FeedbackContext';
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
  FolderOpen,
  FileText,
  MessageCircle
} from 'lucide-react';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentProject = useStore((state) => state.currentProject);
  const { openFeedback } = useFeedback();

  const modules = [
    { name: 'idea-generation', label: 'Idea Generation', icon: <Lightbulb size={20} /> },
    { name: 'market-analysis', label: 'Market Analysis', icon: <LineChart size={20} /> },
    { name: 'customer-discovery', label: 'Customer Discovery', icon: <Search size={20} /> },
    { name: 'competitive-analysis', label: 'Competitive Analysis', icon: <Users size={20} /> },
    { name: 'how-to-mvp', label: 'How to MVP', icon: <Rocket size={20} /> },
    { name: 'product-evolution', label: 'Product Evolution', icon: <MessageSquare size={20} /> },
    { name: 'international-market', label: 'International Market', icon: <Globe size={20} /> },
    { name: 'research-report', label: 'Research Report', icon: <FileText size={20} /> },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-dark-background border-r border-gray-200 dark:border-gray-800 p-6">
      <div className="flex flex-col h-full">
        {/* Top Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Briefcase className="text-light-primary dark:text-dark-primary" />
            <span className="font-heading font-bold text-xl text-light-text dark:text-dark-text">
              buildersCompass
            </span>
          </div>
          
          <div className="text-base font-medium text-light-text dark:text-dark-text px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
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
            <button
              onClick={() => navigate('/projects')}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                location.pathname === '/projects' ? 'bg-light-primary/10 text-light-primary' : 'text-light-text dark:text-dark-text'
              }`}
            >
              <FolderOpen size={20} />
              <span>Projects</span>
            </button>
          </nav>
        </div>

        {/* Middle Section - Modules */}
        <div className="flex-1 mt-8">
          <div className="space-y-2">
            {modules.map((module) => (
              <button
                key={module.name}
                onClick={() => navigate(`/module/${module.name}`)}
                className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  location.pathname === `/module/${module.name}` ? 'bg-light-primary/10 text-light-primary' : 'text-light-text dark:text-dark-text'
                }`}
              >
                {module.icon}
                <span>{module.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto space-y-2">
          <button
            onClick={openFeedback}
            className="w-full flex items-center space-x-2 px-4 py-2 rounded-lg text-light-text dark:text-dark-text hover:bg-light-primary/10"
          >
            <MessageCircle size={20} />
            <span>Feedback</span>
          </button>
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