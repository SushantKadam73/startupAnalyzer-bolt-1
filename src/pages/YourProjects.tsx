import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useStore } from '../store/useStore';
import ProjectCard from '../components/ProjectCard';
import NewProjectDialog from '../components/NewProjectDialog';

const YourProjects = () => {
  const navigate = useNavigate();
  const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
  const projects = useStore((state) => state.projects);
  const setCurrentProject = useStore((state) => state.setCurrentProject);
  const addProject = useStore((state) => state.addProject);

  const handleCreateProject = (name: string, collaborators: string[]) => {
    const newProject = {
      id: Date.now().toString(),
      name,
      collaborators,
      description: '',
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };
    addProject(newProject);
    setIsNewProjectDialogOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-light-text dark:text-dark-text">
            Your Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and organize your projects
          </p>
        </div>
        <button
          onClick={() => setIsNewProjectDialogOpen(true)}
          className="flex items-center px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg hover:bg-opacity-90"
        >
          <Plus size={20} className="mr-2" />
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setCurrentProject}
          />
        ))}
      </div>

      <NewProjectDialog
        isOpen={isNewProjectDialogOpen}
        onClose={() => setIsNewProjectDialogOpen(false)}
        onSubmit={handleCreateProject}
      />
    </div>
  );
};

export default YourProjects;
