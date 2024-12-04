export interface User {
  id: string;
  email: string;
  username?: string;
  mobile?: string;
}

export interface Project {
  id: string;
  name: string;
  created_at: string;
  collaborators: string[];
}