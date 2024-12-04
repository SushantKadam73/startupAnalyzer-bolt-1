import React from 'react';
import { MoreVertical, Users } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div 
      onClick={() => onSelect(project)}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-heading font-semibold text-light-text dark:text-dark-text">
            {project.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Created {new Date(project.created_at).toLocaleDateString()}
          </p>
        </div>
        <button className="text-gray-500 hover:text-light-primary dark:hover:text-dark-primary">
          <MoreVertical size={20} />
        </button>
      </div>
      <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
        <Users size={16} className="mr-1" />
        <span>{project.collaborators.length} collaborators</span>
      </div>
    </div>
  );
}

export default ProjectCard;