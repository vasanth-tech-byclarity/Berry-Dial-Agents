import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes, 
  FaTachometerAlt, 
  FaCogs, 
  FaPhone, 
  FaUser, 
  FaQuestionCircle, 
  FaSignOutAlt, 
  FaBell, 
  FaChevronDown, 
  FaChevronUp,
  FaPencilAlt,
  FaSlidersH
} from 'react-icons/fa';

const AgentCreation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [agents] = useState([
    { name: "AI Assistant", description: "AI Assistant Description 1" },
    { name: "AI Assistant", description: "AI Assistant Description 2" },
    { name: "AI Assistant", description: "AI Assistant Description 3" },
    { name: "AI Assistant", description: "AI Assistant Description 4" }
  ]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('#userIcon')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Header */}
      <header className="w-full bg-white p-4 md:p-6 flex justify-between items-center border-b border-gray-200 z-50 fixed top-0 left-0 right-0">
        <div className="flex items-center">
          <button className="md:hidden" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <FaTimes className="h-6 w-6 text-gray-600 mt-2" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-600 mt-2" />
            )}
          </button>
          
          <Link to="/" className="text-xl font-semibold cursor-pointer md:w-48">
            BerryDial
          </Link>
          
          <div className="hidden md:flex items-center space-x-4 text-gray-600 px-4">
            <Link to="/dashboard" className="text-gray-500 cursor-pointer">Dashboard</Link>
            <span className="text-gray-400">/</span>
            <Link to="/agent-creation" className="font-medium cursor-pointer">Agent Creation</Link>
          </div>
        </div>
      
        {/* Right side (bell icon and user dropdown) */}
        <div className="flex items-center space-x-4">
          {/* Bell Icon with notification badge */}
          <div className="relative mt-1 cursor-pointer">
            <FaBell className="text-xl text-gray-600 sm:text-2xl" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
              1
            </span>
          </div>
      
          {/* User Icon with dropdown menu */}
          <div 
            className="relative flex items-center space-x-2 cursor-pointer" 
            id="userIcon" 
            onClick={toggleDropdown}
          >
            <FaUser className="text-xl text-gray-600 sm:text-2xl" />
            <span className="hidden sm:inline text-gray-600 text-sm sm:text-base">My Account</span>
            {isDropdownOpen ? (
              <FaChevronUp className="text-gray-600 sm:text-xl" />
            ) : (
              <FaChevronDown className="text-gray-600 sm:text-xl" />
            )}
            
            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-48 w-32 bg-white shadow-lg rounded-md text-gray-600">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base">Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base">Settings</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base">Log Out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1 flex-col md:flex-row mt-16 relative">
        {/* Sidebar */}
        <aside className={`w-64 bg-gray-50 border-r border-gray-200 p-4 md:p-2 flex flex-col space-y-4 absolute inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative transition duration-200 ease-in-out z-40`}>
          <div className="md:mt-6 flex flex-col gap-2">
            <Link to="/dashboard" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
              <FaTachometerAlt className="inline mr-2" /> Dashboards
            </Link>
            <Link to="/agent-creation" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
              <FaCogs className="inline mr-2" /> Agent Customization
            </Link>
            <Link to="#" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
              <FaPhone className="inline mr-2" /> Call Logs
            </Link>
            <Link to="#" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
              <FaUser className="inline mr-2" /> Account Settings
            </Link>
          </div>
          <div className="absolute bottom-32 md:bottom-20 flex flex-col gap-2">
            <Link to="#" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
              <FaQuestionCircle className="inline mr-2" /> Updates & FAQ
            </Link>
            <Link to="#" className="text-gray-700 text-sm sm:text-base cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
              <FaSignOutAlt className="inline mr-2" /> Log out
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-100 p-6 flex flex-col justify-center items-center overflow-x-auto">
          <div className="mx-auto bg-white shadow-lg rounded-lg p-6 max-w-full md:max-w-7xl w-full">
            {/* Dashboard Header */}
            <div className="flex flex-col justify-between gap-4 mb-4 w-full md:w-auto">
              {/* Create New Agent Button */}
              <div>
                <button className="bg-black text-white px-6 py-2 rounded-md text-sm w-full md:w-auto">
                  + Create New Agent
                </button>
              </div>
              
              {/* Search Input */}
              <label className="relative w-full flex items-center bg-white shadow-sm border rounded-sm p-2 cursor-text focus-within:bg-white shadow-lg transition-all w-64">
                <input 
                  type="text" 
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full cursor-pointer bg-transparent text-gray-800 outline-none pl-2 pr-8" 
                  required 
                  placeholder="Type here..." 
                />
                
                {searchValue ? (
                  <FaSlidersH className="cursor-pointer absolute right-2 w-5 h-5 text-gray-800" />
                ) : (
                  <FaSlidersH className="cursor-pointer absolute right-2 w-5 h-5 text-gray-800" />
                )}
              </label>
            </div>

            {/* Table with Agents */}
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">
                      <input type="checkbox" />
                    </th>
                    <th className="p-3 text-center">Agent Name</th>
                    <th className="p-3 text-center">Description</th>
                    <th className="p-3 text-center">Status</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {agents.map((agent, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-3">
                        <input type="checkbox" />
                      </td>
                      <td className="p-3 text-center">{agent.name}</td>
                      <td className="p-3 text-center">{agent.description}</td>
                      <td className="p-3 text-center">
                        <label className="inline-block relative w-10 h-5">
                          <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
                          <span className="absolute inset-0 rounded-full bg-gray-300 peer-checked:bg-black transition-all" />
                          <span className="absolute inset-y-0 left-1 top-1 rounded-full bg-white w-3 h-3 peer-checked:left-6 peer-checked:bg-white transition-all" />
                        </label>
                      </td>
                      <td className="p-3 flex justify-center items-center">
                        <button className="text-black flex items-center">
                          Edit <FaPencilAlt className="ml-2" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 z-40 w-full p-4 md:p-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm md:space-x-6 bg-white shadow-md mt-auto">
        <Link to="/" className="hover:underline mr-4 md:ml-6 font-semibold my-2 md:hidden">
          BerryDial
        </Link>
        
        <div className="flex space-x-4 md:space-x-6">
          <Link to="/" className="hover:underline mr-4 md:ml-6 font-semibold hidden md:block">
            BerryDial
          </Link>
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

export default AgentCreation;
