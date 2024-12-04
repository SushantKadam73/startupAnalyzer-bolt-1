import React, { useState } from 'react';
import { X } from 'lucide-react';

interface NewProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, collaborators: string[]) => void;
}

function NewProjectDialog({ isOpen, onClose, onSubmit }: NewProjectDialogProps) {
  const [projectName, setProjectName] = useState('');
  const [collaboratorEmail, setCollaboratorEmail] = useState('');
  const [collaborators, setCollaborators] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(projectName, collaborators);
    setProjectName('');
    setCollaborators([]);
    onClose();
  };

  const addCollaborator = () => {
    if (collaboratorEmail && !collaborators.includes(collaboratorEmail)) {
      setCollaborators([...collaborators, collaboratorEmail]);
      setCollaboratorEmail('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-heading font-semibold text-light-text dark:text-dark-text">
            Create New Project
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-light-primary dark:hover:text-dark-primary"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
              Project Name
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
              Add Collaborators
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                value={collaboratorEmail}
                onChange={(e) => setCollaboratorEmail(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
                placeholder="Email address"
              />
              <button
                type="button"
                onClick={addCollaborator}
                className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-md"
              >
                Add
              </button>
            </div>
          </div>

          {collaborators.length > 0 && (
            <div className="space-y-2">
              {collaborators.map((email) => (
                <div
                  key={email}
                  className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 rounded"
                >
                  <span className="text-sm text-light-text dark:text-dark-text">{email}</span>
                  <button
                    type="button"
                    onClick={() => setCollaborators(collaborators.filter((e) => e !== email))}
                    className="text-red-500 hover:text-red-600"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-md"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProjectDialog;