import React, { useState } from "react";
import { FaBars, FaBell, FaPlus, FaTimes, FaPhoneAlt } from "react-icons/fa";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { PiUserList, PiChartPieSliceFill } from "react-icons/pi";
import { ImUsers } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Analysis() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const [activeTab, setActiveTab] = useState("create");
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const landingPage = () => navigate("/");
  const handleDashboard = () => navigate("/dashboard");
  const handleAgentCustomization = () => navigate("/agent-customization");
  const handleVoice = () => navigate("/voice");
  const handleAnalysis = () => navigate("/analysis");
  const handleSecurity = () => navigate("/security");
  const handleAdvanced = () => navigate("/advanced");

  React.useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-sm text-gray-700 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-14 border-b px-4 md:px-6 bg-white shadow-sm">
        <div className="flex items-center flex-1">
          <button
            onClick={toggleSidebar}
            className="mr-3 text-gray-600 hover:text-purple-700 md:hidden"
          >
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <div className="flex-1 flex items-center justify-between md:justify-start">
            <div
              className="text-purple-700 font-bold text-base md:text-lg lg:text-xl cursor-pointer"
              onClick={landingPage}
            >
              BerryDial
            </div>

            <div className="hidden md:block text-xs md:text-sm lg:text-base text-gray-500 mx-32">
              Dashboard / <span className="text-black">Default</span>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <button
            className={`text-gray-500 hover:text-purple-700 p-1 ${
              isNotificationActive ? "text-purple-700" : ""
            }`}
            onClick={() => setIsNotificationActive(!isNotificationActive)}
          >
            <FaBell className="text-base md:text-lg lg:text-xl" />
          </button>
          <div className="relative">
            <button
              className="flex items-center gap-1 md:gap-2 text-xs md:text-sm lg:text-base text-gray-700 p-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <AiOutlineUser className="text-base md:text-lg lg:text-xl" />
              <span className="hidden md:inline">My Account</span>
              {isDropdownOpen ? (
                <MdKeyboardArrowUp className="transition-transform duration-200" />
              ) : (
                <MdKeyboardArrowDown className="transition-transform duration-200" />
              )}
            </button>
            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                ></div>
                <div className="absolute right-0 mt-4 md:mt-4 w-28 md:w-48 bg-white border rounded-md shadow-lg z-20">
                  <div
                    className="py-2 px-4 hover:bg-gray-50 cursor-pointer text-xs md:text-sm lg:text-base mt-1 md:mt-0"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </div>
                  <div
                    className="py-2 px-4 hover:bg-gray-50 cursor-pointer text-xs md:text-sm lg:text-base mt-1 md:mt-0"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Settings
                  </div>
                  <div
                    className="py-2 px-4 hover:bg-gray-50 cursor-pointer text-xs md:text-sm lg:text-base mt-1 md:mt-0"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Logout
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="flex flex-1 pt-14">
        {/* Sidebar */}
        <aside
          className={`fixed md:sticky top-14 left-0 h-[calc(100vh-3.5rem)] ${
            isSidebarOpen ? "w-56" : "w-0 md:w-16"
          } border-r bg-white flex flex-col justify-between transition-all duration-300 shadow-sm z-40`}
        >
          <button
            onClick={toggleSidebar}
            className="hidden md:flex absolute -right-3 top-4 bg-white rounded-full p-0.5 shadow-md"
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
              className="flex items-center text-purple-700 font-semibold cursor-pointer pt-2 text-xs md:text-sm lg:text-base"
              onClick={handleDashboard}
            >
              <PiChartPieSliceFill size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Create New Agent
              </span>
            </div>
            <div
              className="flex items-center text-black hover:text-purple-700 cursor-pointer py-2 text-xs md:text-sm lg:text-base"
              onClick={handleAgentCustomization}
            >
              <ImUsers size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Agent Customization
              </span>
            </div>
            <div className="flex items-center text-black hover:text-purple-700 cursor-pointer pb-2 text-xs md:text-sm lg:text-base">
              <FaPhoneAlt size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Call Logs
              </span>
            </div>
            <div className="flex items-center text-black hover:text-purple-700 cursor-pointer text-xs md:text-sm lg:text-base">
              <PiUserList size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Account Settings
              </span>
            </div>
          </nav>
          <div className="px-4 mb-24 md:mb-[70px] space-y-2">
            <div className="flex items-center text-black hover:text-purple-700 cursor-pointer py-2 text-xs md:text-sm lg:text-base">
              <LuSquareArrowOutUpRight size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Updates & FAQ
              </span>
            </div>
            <div className="flex items-center text-black hover:text-purple-700 cursor-pointer py-2 text-xs md:text-sm lg:text-base">
              <RxExit size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Log out
              </span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 min-h-[calc(100vh-3.5rem)] overflow-y-auto p-4 md:p-6">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            {/* Left side */}
            <div className="w-full lg:w-1/5 bg-white rounded-xl p-4">
              <button className="w-full bg-purple-700 text-white px-4 py-2 rounded-md 
              flex items-center justify-center gap-2 mb-6 text-sm md:text-base hover:bg-purple-800 transition-colors"
              onClick={handleDashboard}
              >
                <FaPlus size={14} />
                <span>Create New Agent</span>
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div
                        key={num}
                        className="text-sm md:text-base font-medium flex items-center mb-6"
                      >
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <AiOutlineUser
                            size={16}
                            className="text-purple-700"
                          />
                        </div>
                        <span className="ml-3">AI Assistant {num}</span>
                        <label className="relative inline-flex items-center cursor-pointer ml-auto">
                          <input type="checkbox" className="sr-only peer" />
                          <div
                            className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:after:translate-x-full
                           peer-checked:after:border-white after:content-[''] 
                           after:absolute after:top-[2px] after:left-[2px] after:bg-white
                            after:border-gray-300 after:border after:rounded-full after:h-4 
                            after:w-4 after:transition-all peer-checked:bg-purple-700"
                          ></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="w-full lg:w-4/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                <div className="flex flex-col sm:flex-row overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 space-y-2 sm:space-y-0">
                  <nav className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                    {[
                      { name: "Agent", handler: handleAgentCustomization },
                      { name: "Voice", handler: handleVoice },
                      { name: "Analysis", handler: handleAnalysis },
                      { name: "Security", handler: handleSecurity },
                      { name: "Advanced", handler: handleAdvanced },
                    ].map((tab, index, arr) => (
                      <button
                        key={tab.name.toLowerCase()}
                        onClick={tab.handler}
                        className={`px-3 md:px-4 py-2 cursor-pointer whitespace-nowrap text-sm text-center
                          ${index === 0 ? "rounded-l-md" : ""} 
                          ${index === arr.length - 1 ? "rounded-r-md" : ""}
                          ${
                            tab.name === "Analysis"
                              ? "bg-purple-700 text-white"
                              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                          }`}
                        role="tab"
                        aria-selected={tab.name === "Analysis"}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none border border-black text-black px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors min-w-[80px]">
                    Clear
                  </button>
                  <button className="flex-1 sm:flex-none bg-purple-700 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-800 transition-colors min-w-[80px]">
                    Save
                  </button>
                </div>
              </div>

              <div className="space-y-6 mt-6 mb-24">
                <div className="flex justify-between items-center">
                  <h2 className="text-base md:text-lg font-semibold">
                    Analysis
                  </h2>
                </div>

                <div className="bg-white border shadow">
                  <div className="p-4 md:p-5 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block font-semibold
                         text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter mb-3">
                          Evaluation criteria
                        </label>
                        <div className="border border-gray-200 rounded-md p-3 md:p-2">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-2">
                            <p className="text-xs sm:text-sm md:text-base text-gray-500 w-full sm:w-[70%]">
                              Define custom criteria to evaluate conversations against. You can find the evaluation results for each conversation in <u>the history tab</u>.
                            </p>
                            <button className="w-full sm:w-[100px] px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-xs md:text-sm">
                              Add Criteria
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block font-semibold
                         text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter mb-3">
                          Data collection
                        </label>
                        <div className="border border-gray-200 rounded-md p-3 md:p-4">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-2">
                            <p className="text-xs sm:text-sm md:text-base text-gray-500 w-full sm:w-[70%]">
                              Define custom data specifications to extract from conversation transcripts. You can find the evaluation results for each conversation in <u>the history tab</u>.
                            </p>
                            <button className="w-full sm:w-[100px] px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 text-xs md:text-sm">
                              Add Item
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 min-h-[40px] md:h-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-2 md:py-8 text-xs md:text-sm lg:text-base border bg-white z-50">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-gray-500">
          <div>BerryDial</div>
          <div className="flex gap-4 ml-4 sm:ml-8">
            <a href="#" className="hover:text-purple-700">
              Term of use
            </a>
            <a href="#" className="hover:text-purple-700">
              Privacy policy
            </a>
            <a href="#" className="hover:text-purple-700">
              Cookies
            </a>
          </div>
        </div>
        <div className="text-gray-500 mt-2 md:mt-0">
          © 2025 BerryDial | All rights reserved
        </div>
      </footer>
    </div>
  );
}
