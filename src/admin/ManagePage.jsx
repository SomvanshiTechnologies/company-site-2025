import React, { useState } from 'react';
import { supabase } from '../config/supabase';
import { useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import NewsManagement from './components/NewsManagement';
import TrendsManagement from './components/TrendsManagement';
import SolutionsManagement from './components/SolutionsManagement';

const ManagePage = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (confirm('Are you sure you want to logout?')) {
      await supabase.auth.signOut();
      navigate('/admin/login');
    }
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'news':
        return 'Latest News';
      case 'trends':
        return 'Trends & Insights';
      case 'solutions':
        return 'Solutions';
      default:
        return 'Content Management';
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleLogout={handleLogout}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-20">
          <div className="px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex items-center justify-between">
              <div className="lg:ml-0 ml-12">
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">
                  {getPageTitle()}
                </h1>
                <p className="text-sm text-gray-600 font-body mt-1">
                  Manage and organize your content
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-fadeIn">
            {activeTab === 'news' && <NewsManagement />}
            {activeTab === 'trends' && <TrendsManagement />}
            {activeTab === 'solutions' && <SolutionsManagement />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePage;
