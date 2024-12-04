import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useStore } from '../store/useStore';
import { getProjects, createProject } from '../data/projects';

function Projects() {
  const navigate = useNavigate();
  const setCurrentProject = useStore((state) => state.setCurrentProject);
  const [showNewProjectDialog, setShowNewProjectDialog] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');

  const projects = getProjects();

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;

    const newProject = createProject(
      newProjectName.trim(),
      newProjectDescription.trim()
    );
    setCurrentProject(newProject);
    setShowNewProjectDialog(false);
    setNewProjectName('');
    setNewProjectDescription('');
    navigate('/module/idea-generation');
  };

  const handleProjectClick = (project: any) => {
    setCurrentProject(project);
    navigate('/module/idea-generation');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-heading font-bold text-light-text dark:text-dark-text">
          Projects
        </h1>
        <button
          onClick={() => setShowNewProjectDialog(true)}
          className="bg-light-primary dark:bg-dark-primary text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:opacity-90"
        >
          <Plus size={20} />
          <span>New Project</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-heading font-semibold text-light-text dark:text-dark-text mb-2">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>Created {new Date(project.createdAt).toLocaleDateString()}</span>
              <span>{project.collaborators.length} collaborators</span>
            </div>
          </div>
        ))}
      </div>

      {/* New Project Dialog */}
      {showNewProjectDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-heading font-semibold text-light-text dark:text-dark-text mb-4">
              Create New Project
            </h2>
            <form onSubmit={handleCreateProject}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="projectName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Project Name
                  </label>
                  <input
                    id="projectName"
                    type="text"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                    placeholder="Enter project name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="projectDescription"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="projectDescription"
                    value={newProjectDescription}
                    onChange={(e) => setNewProjectDescription(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary"
                    placeholder="Enter project description"
                    rows={3}
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowNewProjectDialog(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-lg hover:opacity-90"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
