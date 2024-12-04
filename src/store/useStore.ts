import { create } from 'zustand';
import { User, Project } from '../types';

interface Store {
  user: User | null;
  currentProject: Project | null;
  setUser: (user: User | null) => void;
  setCurrentProject: (project: Project | null) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  currentProject: null,
  setUser: (user) => set({ user }),
  setCurrentProject: (project) => set({ currentProject: project }),
}));