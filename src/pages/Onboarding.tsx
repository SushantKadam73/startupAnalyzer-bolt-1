import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

function Onboarding() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Save to Supabase
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-dark-background p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center">
            <Briefcase className="h-12 w-12 text-light-primary dark:text-dark-primary" />
          </div>
          <h2 className="mt-6 text-3xl font-heading font-bold text-light-text dark:text-dark-text">
            Complete your profile
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Let's get to know you better
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="text-sm font-medium text-light-text dark:text-dark-text">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-light-text dark:text-dark-text focus:ring-light-primary dark:focus:ring-dark-primary focus:border-light-primary dark:focus:border-dark-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="mobile" className="text-sm font-medium text-light-text dark:text-dark-text">
                Mobile Number (Optional)
              </label>
              <input
                id="mobile"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-light-text dark:text-dark-text focus:ring-light-primary dark:focus:ring-dark-primary focus:border-light-primary dark:focus:border-dark-primary"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-light-primary dark:bg-dark-primary hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-primary dark:focus:ring-dark-primary"
            >
              Complete Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Onboarding;