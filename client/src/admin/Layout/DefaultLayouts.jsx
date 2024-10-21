import React, { useState } from 'react';
import Content from '../components/Content'
import Slider from '../components/Slider'

const DefaultLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Slider isOpen={sidebarOpen} />
      <Content toggleSlidebar={toggleSidebar} isOpen={sidebarOpen} />
    </div>
  );
};

export default DefaultLayout;
