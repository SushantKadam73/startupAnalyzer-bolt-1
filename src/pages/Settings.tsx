import React, { useState } from 'react';
import { useStore } from '../store/useStore';

function Settings() {
  const { user } = useStore();
  const [username, setUsername] = useState(user?.username || '');
  const [mobile, setMobile] = useState(user?.mobile || '');
  const [email, setEmail] = useState(user?.email || '');

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement with Supabase
    console.log('Updating profile:', { username, mobile });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-heading font-bold text-light-text dark:text-dark-text mb-8">
        Settings
      </h1>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-heading font-semibold text-light-text dark:text-dark-text mb-4">
          Profile Settings
        </h2>
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-light-text dark:text-dark-text mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-light-primary dark:bg-dark-primary text-white rounded-md"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-heading font-semibold text-light-text dark:text-dark-text mb-4">
          Privacy Settings
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-light-text dark:text-dark-text font-medium">Privacy Mode</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              When privacy mode is enabled, none of your chat messages or data from the context bank will be used to improve builderCompass
            </p>
            </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-light-primary/20 dark:peer-focus:ring-dark-primary/20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-light-primary dark:peer-checked:bg-dark-primary"></div>
          </label>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-heading font-semibold text-light-text dark:text-dark-text mb-4">
          Subscription
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-light-text dark:text-dark-text font-medium">Current Plan</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Free Plan</p>
            </div>
            <span className="text-light-primary dark:text-dark-primary">Active</span>
          </div>
          <button className="w-full px-4 py-2 bg-light-secondary dark:bg-dark-secondary text-white rounded-md">
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;