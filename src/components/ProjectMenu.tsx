import React, { useState } from 'react';
import { MoreVertical, Edit, Trash2, Users } from 'lucide-react';
import { Project } from '../types';

interface ProjectMenuProps {
  project: Project;
  onRename: (project: Project, newName: string) => void;
  onDelete: (project: Project) => void;
  onEditCollaborators: (project: Project) => void;
}

function ProjectMenu({ project, onRename, onDelete, onEditCollaborators }: ProjectMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(project.name);

  const handleRename = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onRename(project, newName);
    setIsRenaming(false);
    setIsOpen(false);
  };

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        onClick={handleMenuClick}
        className="text-light-secondary dark:text-dark-secondary hover:text-light-primary dark:hover:text-dark-primary p-2 rounded-full hover:bg-light-accent dark:hover:bg-dark-accent transition-colors duration-200"
      >
        <MoreVertical size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg shadow-md bg-light-background dark:bg-dark-background ring-1 ring-black ring-opacity-5 z-20">
          <div className="py-2" role="menu">
            {isRenaming ? (
              <form onSubmit={handleRename} className="px-4 py-2">
                <input
                  autoFocus
                  className="w-full bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text border-b-2 border-light-primary dark:border-dark-primary focus:outline-none"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </form>
            ) : (
              <>
                <button
                  onClick={(e) => handleOptionClick(e, () => setIsRenaming(true))}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Edit size={16} className="mr-2" />
                  Rename
                </button>
                <button
                  onClick={(e) => handleOptionClick(e, () => onEditCollaborators(project))}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Users size={16} className="mr-2" />
                  Edit Collaborators
                </button>
                <button
                  onClick={(e) => handleOptionClick(e, () => onDelete(project))}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Trash2 size={16} className="mr-2" />
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectMenu;
