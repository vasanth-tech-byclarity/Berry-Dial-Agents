import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaTachometerAlt, FaCogs, FaPhone, FaUser, FaQuestionCircle, FaSignOutAlt, FaBell, FaChevronUp, FaChevronDown } from 'react-icons/fa';

const LandingPage2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const userIcon = document.getElementById('userIcon');
      if (userIcon && !userIcon.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Overlay for mobile */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${!isSidebarOpen && 'hidden'}`}
        onClick={toggleSidebar}
      />

      {/* Header */}
      <header className="w-full bg-white p-4 md:p-6 flex justify-between items-center border-b border-gray-200 z-50 fixed top-0 left-0 right-0">
        <div className="flex items-center">
          <button className="md:hidden" onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes className="h-6 w-6 text-gray-600 mt-2" /> : <FaBars className="h-6 w-6 text-gray-600 mt-2" />}
          </button>
          
          <Link to="/" className="text-xl font-semibold cursor-pointer md:w-48">
            BerryDial
          </Link>
          
          <div className="hidden md:flex items-center space-x-4 text-gray-600 px-4">
            <Link to="/dashboard" className="text-gray-500 cursor-pointer">Dashboard</Link>
            <span className="text-gray-400">/</span>
            <Link to="/" className="font-medium cursor-pointer">Default</Link>
          </div>
        </div>

        {/* Right side (bell icon and user dropdown) */}
        <div className="flex items-center space-x-4">
          <div className="relative mt-1 cursor-pointer">
            <FaBell className="text-xl text-gray-600 sm:text-2xl" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">1</span>
          </div>

          <div className="relative flex items-center space-x-2 cursor-pointer" id="userIcon" onClick={toggleDropdown}>
            <FaUser className="text-xl text-gray-600 sm:text-2xl" />
            <span className="hidden sm:inline text-gray-600 text-sm sm:text-base">My Account</span>
            {isDropdownOpen ? <FaChevronUp className="text-gray-600 sm:text-xl" /> : <FaChevronDown className="text-gray-600 sm:text-xl" />}
            
            <div className={`absolute right-0 mt-48 w-32 bg-white shadow-lg rounded-md text-gray-600 ${!isDropdownOpen && 'hidden'}`}>
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base">Settings</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base">Log Out</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col md:flex-row mt-16">
        {/* Sidebar */}
        <aside className={`w-64 bg-gray-50 border-r border-gray-200 p-4 md:p-2 flex flex-col space-y-4 fixed inset-y-0 left-0 transform ${!isSidebarOpen && '-translate-x-full'} md:translate-x-0 md:relative transition duration-200 ease-in-out z-40`}>
          <div className="mt-16 md:mt-6 flex flex-col gap-2">
            <Link to="/dashboard" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2">
              <FaTachometerAlt /> Dashboards
            </Link>
            <Link to="/agent-creation" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2">
              <FaCogs /> Agent Customization
            </Link>
            <Link to="#" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2">
              <FaPhone /> Call Logs
            </Link>
            <Link to="#" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2">
              <FaUser /> Account Settings
            </Link>
          </div>
          <div className="fixed bottom-0 w-[93%] flex flex-col gap-2">
            <Link to="#" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2">
              <FaQuestionCircle /> Updates & FAQ
            </Link>
            <Link to="#" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg flex items-center gap-2">
              <FaSignOutAlt /> Log out
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-100 p-6 flex flex-col justify-center items-center">
          <div className="text-center p-6">
            <Link to="/dashboard">
              <button className="bg-gray-900 text-white w-[185px] h-[37px] rounded-md text-sm sm:text-base transition duration-300 ease-in-out border-2 border-white hover:bg-white hover:text-black hover:border-black">
                + Create New Agent
              </button>
            </Link>
            <p className="text-gray-600 mt-4 text-sm sm:text-base">
              You haven't created any agents yet. Start by setting up your first AI voice agent to manage conversations effortlessly.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full p-4 md:p-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm md:space-x-6 bg-white shadow-md mt-auto">
        <Link to="/" className="hover:underline mr-4 md:ml-6 font-semibold my-2 md:hidden">BerryDial</Link>
        
        <div className="flex space-x-4 md:space-x-6">
          <Link to="/" className="hover:underline mr-4 md:ml-6 font-semibold hidden md:block">BerryDial</Link>
          <Link to="#" className="hover:underline">Term of use</Link>
          <Link to="#" className="hover:underline">Privacy policy</Link>
          <Link to="#" className="hover:underline">Cookies</Link>
        </div>
        <div className="mt-2 md:mt-0 md:ml-auto">
          &copy; 2025 BerryDial | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default LandingPage2;
