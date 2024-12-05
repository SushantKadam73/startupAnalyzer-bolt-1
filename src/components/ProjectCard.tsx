import React from 'react';
import { Users } from 'lucide-react';
import { Project } from '../types';
import ProjectMenu from './ProjectMenu';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  onRename: (project: Project, newName: string) => void;
  onDelete: (project: Project) => void;
  onEditCollaborators: (project: Project) => void;
}

function ProjectCard({ project, onSelect, onRename, onDelete, onEditCollaborators }: ProjectCardProps) {
  return (
    <div 
      onClick={() => onSelect(project)}
      className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-base font-heading font-semibold text-light-text dark:text-dark-text">
            {project.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Created {new Date(project.createdAt).toLocaleDateString()}
          </p>
        </div>
        <ProjectMenu
          project={project}
          onRename={onRename}
          onDelete={onDelete}
          onEditCollaborators={onEditCollaborators}
        />
      </div>
      <div className="mt-3 flex items-center text-xs text-gray-500 dark:text-gray-400">
        <Users size={14} className="mr-1" />
        <span>{project.collaborators.length} collaborators</span>
      </div>
    </div>
  );
}

export default ProjectCard;