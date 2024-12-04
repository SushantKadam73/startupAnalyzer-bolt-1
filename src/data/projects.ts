export interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  collaborators: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'Food Delivery',
    description: 'Drone-based food delivery service for urban areas',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
    collaborators: ['user1@example.com'],
  },
  {
    id: '2',
    name: 'Smart Home',
    description: 'IoT-based home automation system',
    createdAt: '2024-01-14T15:30:00Z',
    updatedAt: '2024-01-14T15:30:00Z',
    collaborators: ['user1@example.com'],
  },
];

export function createProject(name: string, description: string): Project {
  const newProject: Project = {
    id: (projects.length + 1).toString(),
    name,
    description,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    collaborators: ['user1@example.com'],
  };
  projects.push(newProject);
  return newProject;
}

export function getProjects(): Project[] {
  return projects;
}

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
