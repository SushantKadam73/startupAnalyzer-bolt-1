import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store/useStore';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Projects from './pages/Projects';
import ModulePage from './pages/ModulePage';
import Layout from './components/Layout';
import { FeedbackProvider } from './contexts/FeedbackContext';

// TODO: Re-implement authentication check when Supabase is integrated
// function PrivateRoute({ children }: { children: React.ReactNode }) {
//   const user = useStore((state) => state.user);
//   return user ? <>{children}</> : <Navigate to="/login" />;
// }

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          {/* TODO: Re-enable authentication routes when Supabase is integrated */}
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={<Onboarding />} />
          
          {/* Temporarily removed authentication requirement */}
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/idea-generation" element={<Dashboard />} />
                  
                  {/* Module routes */}
                  <Route path="/module/:moduleName" element={<ModulePage />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;