import { create } from 'zustand';
import { User, Project } from '../types';

type Theme = 'light' | 'dark' | 'system';

interface Store {
  user: User | null;
  currentProject: Project | null;
  projects: Project[];
  theme: Theme;
  setUser: (user: User | null) => void;
  setCurrentProject: (project: Project | null) => void;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (projectId: string) => void;
  setTheme: (theme: Theme) => void;
}

// Get initial theme from localStorage or system preference
const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme) return savedTheme;
  
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'system';
  }
  return 'light';
};

export const useStore = create<Store>((set) => ({
  user: null,
  currentProject: null,
  projects: [],
  theme: getInitialTheme(),
  setUser: (user) => set({ user }),
  setCurrentProject: (project) => set({ currentProject: project }),
  addProject: (project) => set((state) => ({ 
    projects: [...state.projects, project] 
  })),
  updateProject: (project) => set((state) => ({
    projects: state.projects.map((p) => p.id === project.id ? project : p)
  })),
  deleteProject: (projectId) => set((state) => ({
    projects: state.projects.filter((p) => p.id !== projectId)
  })),
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    set({ theme });
    
    // Apply theme to document
    if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },
}));