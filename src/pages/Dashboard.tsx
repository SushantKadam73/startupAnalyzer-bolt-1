import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../store/useStore';
import ProjectCard from '../components/ProjectCard';
import NewProjectDialog from '../components/NewProjectDialog';

function Dashboard() {
  const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
  const projects = useStore((state) => state.projects);
  const setCurrentProject = useStore((state) => state.setCurrentProject);
  const addProject = useStore((state) => state.addProject);
  const updateProject = useStore((state) => state.updateProject);
  const deleteProject = useStore((state) => state.deleteProject);

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

  const handleRenameProject = (project: Project, newName: string) => {
    updateProject({ ...project, name: newName });
  };

  const handleEditCollaborators = (project: Project) => {
    // TODO: Implement collaborator editing dialog
    console.log('Edit collaborators for project:', project.id);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-light-text dark:text-dark-text">
            Hello there!
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            What's on your mind today?
          </p>
        </div>
        <button
          onClick={() => setIsNewProjectDialogOpen(true)}
          className="flex items-center px-3 py-1.5 bg-light-primary dark:bg-dark-primary text-white rounded-lg hover:bg-opacity-90"
        >
          <Plus size={18} className="mr-1.5" />
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setCurrentProject}
            onRename={handleRenameProject}
            onDelete={deleteProject}
            onEditCollaborators={handleEditCollaborators}
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