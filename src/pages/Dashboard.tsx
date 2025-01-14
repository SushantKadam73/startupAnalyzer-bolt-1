import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../store/useStore';
import ProjectCard from '../components/ProjectCard';
import NewProjectDialog from '../components/NewProjectDialog';
import { Project } from '../types';

function Dashboard() {
  const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
  const setCurrentProject = useStore((state) => state.setCurrentProject);
  
  // Mock projects data - would come from Supabase in production
  const [projects] = useState<Project[]>([
    {
      id: '1',
      name: 'E-commerce Platform',
      created_at: '2024-03-10T10:00:00Z',
      collaborators: ['john@example.com', 'jane@example.com'],
    },
    {
      id: '2',
      name: 'Mobile App MVP',
      created_at: '2024-03-08T15:30:00Z',
      collaborators: ['john@example.com'],
    },
  ]);

  const handleCreateProject = (name: string, collaborators: string[]) => {
    // TODO: Implement with Supabase
    console.log('Creating project:', { name, collaborators });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-light-text dark:text-dark-text">
            Hello there!
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            What's on your mind today?
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
}

export default Dashboard;