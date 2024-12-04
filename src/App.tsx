import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store/useStore';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Layout from './components/Layout';

// TODO: Re-implement authentication check when Supabase is integrated
// function PrivateRoute({ children }: { children: React.ReactNode }) {
//   const user = useStore((state) => state.user);
//   return user ? <>{children}</> : <Navigate to="/login" />;
// }

function App() {
  return (
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
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;