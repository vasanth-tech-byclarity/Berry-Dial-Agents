import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaUser, FaBell, FaPlus, FaPhone, FaCog, FaQuestionCircle, FaSignOutAlt, FaTimes } from "react-icons/fa";  
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { PiUserList } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { PiChartPieSliceFill } from "react-icons/pi"
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  // Set initial sidebar state based on screen size
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    agentName: '',
    language: '',
    description: '',
    characteristics: '',
    voice: '',
    timezone: '',
    image: null
  });
  const [formErrors, setFormErrors] = useState({});
  const dropdownRef = useRef(null);
  const imageInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState("data:image/png;base64,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");

  // Add window resize listener to handle sidebar state
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageError = {};

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (file && !validTypes.includes(file.type)) {
      imageError.image = 'Please upload a valid image (JPG, JPEG, PNG).';
      setFormErrors({...formErrors, ...imageError});
      return;
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024;
    if (file && file.size > maxSize) {
      imageError.image = 'File size should be less than 5MB.';
      setFormErrors({...formErrors, ...imageError});
      return;
    }

    // If valid, show preview
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setFormData({...formData, image: file});
      setFormErrors({...formErrors, image: null});
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({...formData, [field]: value});
    // Clear error for this field if value is valid
    if (value) {
      setFormErrors({...formErrors, [field]: null});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Validate all fields
    if (!formData.agentName) errors.agentName = 'Please enter an agent name';
    if (!formData.language) errors.language = 'Please select a language';
    if (!formData.description) errors.description = 'Please enter a description';
    if (!formData.characteristics) errors.characteristics = 'Please select a characteristic';
    if (!formData.voice) errors.voice = 'Please select a voice';
    if (!formData.timezone) errors.timezone = 'Please select a timezone';
    if (!formData.image) errors.image = 'Please upload a profile image';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Form is valid, navigate to AgentSettings
      navigate('/agent-customization');
    }
  };

  const landingPage = () => {
    navigate('/');
  };

  const handleCreateAgent = () => {
    navigate('/dashboard');
  };

  const handleAgentCustomization = () => {
    navigate('/agent-customization');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-14 border-b px-4 md:px-6 bg-white shadow-sm">
        <div className="flex items-center flex-1">
          <button onClick={toggleSidebar} className="mr-3 text-gray-600 hover:text-purple-700 md:hidden">
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <div className="flex-1 flex items-center justify-between md:justify-start"> 
            <div className="text-purple-700 font-bold text-base md:text-lg lg:text-xl" onClick={landingPage}>BerryDial</div>
            
            <div className="hidden md:block text-xs md:text-sm lg:text-base text-gray-500 mx-32">
              Dashboard / <span className="text-black">Default</span>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button 
            className={`text-gray-500 hover:text-purple-700 p-1 ${isDropdownOpen ? 'text-purple-700' : ''}`}
            onClick={() => setIsNotificationActive(!isNotificationActive)}
          >
            <FaBell className="text-base md:text-lg lg:text-xl" />
          </button>
          <div className="relative" ref={dropdownRef}>
            <button 
              className="flex items-center gap-1 md:gap-2 text-xs md:text-sm lg:text-base text-gray-700 p-2 focus:outline-none"
              onClick={toggleDropdown}
            >
              <AiOutlineUser className="text-base md:text-lg lg:text-xl" />
              <span className="hidden md:inline">My Account</span>
              {isDropdownOpen ? 
                <MdKeyboardArrowUp className="transition-transform duration-200" /> :
                <MdKeyboardArrowDown className="transition-transform duration-200" />
              }
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-20">
                <div className="py-2 px-4 hover:bg-gray-50 cursor-pointer text-xs md:text-sm lg:text-base focus:outline-none">Profile</div>
                <div className="py-2 px-4 hover:bg-gray-50 cursor-pointer text-xs md:text-sm lg:text-base focus:outline-none">Settings</div>
                <div className="py-2 px-4 hover:bg-gray-50 cursor-pointer text-xs md:text-sm lg:text-base focus:outline-none">Logout</div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-14">
        {/* Sidebar */}
        <aside
          className={`fixed md:sticky top-14 left-0 h-[calc(100vh-3.5rem)] ${
            isSidebarOpen ? "w-56" : "w-0 md:w-16"
          } border-r bg-white flex flex-col justify-between transition-all duration-300 shadow-sm z-40`}
        >
          <button
            onClick={toggleSidebar}
            className="hidden md:flex absolute -right-3 top-4 bg-white rounded-full p-0.5 shadow-md focus:outline-none"
          >
            {isSidebarOpen ? (
              <IoIosArrowDropleftCircle
                size={24}
                className="text-black hover:text-purple-700"
              />
            ) : (
              <IoIosArrowDroprightCircle
                size={24}
                className="text-black hover:text-purple-700"
              />
            )}
          </button>
          <nav className="p-4 space-y-4">
            <div
              className="flex items-center text-purple-700 font-semibold cursor-pointer pt-2 text-xs md:text-sm lg:text-base focus:outline-none"
              onClick={handleCreateAgent}
            >
              <PiChartPieSliceFill size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Create New Agent
              </span>
            </div>
            <div
              className="flex items-center text-black hover:text-purple-700 cursor-pointer py-2 text-xs md:text-sm lg:text-base focus:outline-none"
              onClick={handleAgentCustomization}
            >
              <ImUsers size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Agent Customization
              </span>
            </div>
            <div className="flex items-center text-black hover:text-purple-700 cursor-pointer pb-2 text-xs md:text-sm lg:text-base focus:outline-none">
              <FaPhoneAlt size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Call Logs
              </span>
            </div>
            <div className="flex items-center text-black hover:text-purple-700 cursor-pointer text-xs md:text-sm lg:text-base focus:outline-none">
              <PiUserList size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Account Settings
              </span>
            </div>
          </nav>
          <div className="px-4 mb-24 md:mb-[70px] space-y-2">
            <div className="flex items-center text-black hover:text-purple-700 cursor-pointer py-2 text-xs md:text-sm lg:text-base focus:outline-none">
              <LuSquareArrowOutUpRight size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Updates & FAQ
              </span>
            </div>
            <div className="flex items-center text-black hover:text-purple-700 cursor-pointer py-2 text-xs md:text-sm lg:text-base focus:outline-none">
              <RxExit size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Log out
              </span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6 flex flex-col justify-center items-center">
          <div className="shadow-md rounded-md bg-white p-5 mb-20 sm:my-16 w-full max-w-4xl">
            <div className="border-b-2 border-gray-300 pb-4 mb-6">
              <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Welcome to BerryDial AI</h1>
              <p className="text-gray-600 text-xs md:text-sm lg:text-base">Create your AI now and unlock smart possibilities</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative">
                  <label className="block text-xs md:text-sm lg:text-base font-medium mb-1">Agent Name</label>
                  <input 
                    type="text"
                    className={`w-full border ${formErrors.agentName ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-xs md:text-sm lg:text-base focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none`}
                    placeholder="Enter Name"
                    value={formData.agentName}
                    onChange={(e) => handleInputChange('agentName', e.target.value)}
                  />
                  {formErrors.agentName && (
                    <span className="text-red-500 text-xs">{formErrors.agentName}</span>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-xs md:text-sm lg:text-base font-medium mb-1">Language</label>
                  <select 
                    className={`w-full border ${formErrors.language ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-xs md:text-sm lg:text-base focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white`}
                    value={formData.language}
                    onChange={(e) => handleInputChange('language', e.target.value)}
                  >
                    <option value="">Select your Language</option>
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                  </select>
                  {formErrors.language && (
                    <span className="text-red-500 text-xs">{formErrors.language}</span>
                  )}
                </div>
              </div>

              <div className="relative">
                <label className="block text-xs md:text-sm lg:text-base font-medium mb-1">Description</label>
                <input 
                  type="text"
                  className={`w-full border ${formErrors.description ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-xs md:text-sm lg:text-base focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none`}
                  placeholder="Agent Description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
                {formErrors.description && (
                  <span className="text-red-500 text-xs">{formErrors.description}</span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="relative">
                  <label className="block text-xs md:text-sm lg:text-base font-medium mb-1">Characteristics</label>
                  <select 
                    className={`w-full border ${formErrors.characteristics ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-xs md:text-sm lg:text-base focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white`}
                    value={formData.characteristics}
                    onChange={(e) => handleInputChange('characteristics', e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="friendly">Friendly</option>
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                  </select>
                  {formErrors.characteristics && (
                    <span className="text-red-500 text-xs">{formErrors.characteristics}</span>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-xs md:text-sm lg:text-base font-medium mb-1">Voice</label>
                  <select 
                    className={`w-full border ${formErrors.voice ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-xs md:text-sm lg:text-base focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white`}
                    value={formData.voice}
                    onChange={(e) => handleInputChange('voice', e.target.value)}
                  >
                    <option value="">Select your AI Voice</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {formErrors.voice && (
                    <span className="text-red-500 text-xs">{formErrors.voice}</span>
                  )}
                </div>

                <div className="relative">
                  <label className="block text-xs md:text-sm lg:text-base font-medium mb-1">Timezone</label>
                  <select 
                    className={`w-full border ${formErrors.timezone ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 text-xs md:text-sm lg:text-base focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none appearance-none bg-white`}
                    value={formData.timezone}
                    onChange={(e) => handleInputChange('timezone', e.target.value)}
                  >
                    <option value="">Select your timezone</option>
                    <option value="est">EST</option>
                    <option value="pst">PST</option>
                    <option value="cst">CST</option>
                  </select>
                  {formErrors.timezone && (
                    <span className="text-red-500 text-xs">{formErrors.timezone}</span>
                  )}
                </div>
              </div>

              {/* Profile Image Upload Section */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-xs md:text-sm lg:text-base">Profile image</label>
                <div className="flex items-center bg-gray-100 border border-gray-300 rounded-md p-4 lg:w-[40%]">
                  <div className="bg-gray-300 flex items-center justify-center rounded-md mr-4">
                    <img src={imagePreview} alt="Profile" className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-md" />
                  </div>
                  <label className="bg-purple-700 text-white py-2 px-4 rounded cursor-pointer text-xs md:text-sm lg:text-base flex-shrink-0 focus:outline-none">
                    Add Image
                    <input
                      type="file"
                      className="hidden"
                      ref={imageInputRef}
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                {formErrors.image && (
                  <span className="text-red-500 text-xs">{formErrors.image}</span>
                )}
              </div>

              <div className="mt-4 text-right">
                <button 
                  type="submit" 
                  className="bg-purple-700 text-white px-4 sm:px-6 py-2 rounded hover:bg-purple-800 text-xs md:text-sm lg:text-base focus:outline-none"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

       {/* Footer */}
       <footer className="fixed bottom-0 left-0 right-0 min-h-[40px] md:h-10 flex flex-col md:flex-row items-center justify-between 
      px-4 md:px-6 py-2 md:py-8 text-xs md:text-sm lg:text-base border bg-white z-50">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-gray-500">
          <div className="text-gray-500">BerryDial</div>
          <div className="flex gap-4 text-gray-500 ml-4 sm:ml-8">
            <a href="#" className="hover:text-purple-700">Term of use</a>
            <a href="#" className="hover:text-purple-700">Privacy policy</a>
            <a href="#" className="hover:text-purple-700">Cookies</a>
          </div>
        </div>
        <div className="text-gray-500 mt-2 md:mt-0">© 2025 BerryDial | All rights reserved</div>
      </footer>
    </div>
  );
};

export default Dashboard;
