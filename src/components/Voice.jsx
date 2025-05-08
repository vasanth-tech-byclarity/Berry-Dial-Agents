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

const VoiceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState({
    id: "rachel",
    name: "Rachel",
  });

  const voices = [
    { id: "rachel", name: "Rachel" },
    { id: "drew", name: "Drew" },
    { id: "clyde", name: "Clyde" },
    { id: "domi", name: "Domi" },
    { id: "custom", name: "Custom Voice" },
  ];

  return (
    <div className="relative">
      <div className="h-14">
        <label className="block font-bold text-[14px] text-[#333333DE] leading-[17px] font-inter mb-2">
          Voice
        </label>
        <p className="text-xs text-gray-500">
          Select the Eleven Labs voice you want to use for the agent
        </p>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full border text-black px-4 py-2 rounded-md border-gray-300 bg-white text-left focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-gray-50 active:bg-gray-100"
      >
        {selectedVoice.name}
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          {isOpen ? (
            <MdKeyboardArrowUp size={20} className="text-gray-600" />
          ) : (
            <MdKeyboardArrowDown size={20} className="text-gray-600" />
          )}
        </div>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute z-20 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
            {voices.map((voice) => (
              <div
                key={voice.id}
                className="flex items-center gap-2 px-4 py-2 hover:bg-purple-50 active:bg-purple-100 cursor-pointer"
                onClick={() => {
                  setSelectedVoice(voice);
                  setIsOpen(false);
                }}
              >
                {voice.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const FormatDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("PCM 16000Hz");

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full border text-black px-4 py-2 rounded-md border-gray-300 bg-white text-left focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-gray-50 active:bg-gray-100"
      >
        {selectedFormat}
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          {isOpen ? (
            <MdKeyboardArrowUp size={20} className="text-gray-600" />
          ) : (
            <MdKeyboardArrowDown size={20} className="text-gray-600" />
          )}
        </div>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute z-20 w-full mt-1 bg-white border rounded-md shadow-lg">
            <div
              className="px-4 py-2 hover:bg-purple-50 active:bg-purple-100 cursor-pointer"
              onClick={() => {
                setSelectedFormat("PCM 16000Hz");
                setIsOpen(false);
              }}
            >
              PCM 16000Hz
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function Voice() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const [activeTab, setActiveTab] = useState("create");
  const [useFlash, setUseFlash] = useState(false);
  const [stability, setStability] = useState(50);
  const [speed, setSpeed] = useState(50);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const landingPage = () => navigate("/");
  const handleCreateAgent = () => navigate("/agent-customization");
  const handleVoice = () => navigate("/voice");
  const handleAnalysis = () => navigate("/analysis");
  const handleSecurity = () => navigate("/security");
  const handleAdvanced = () => navigate("/advanced");
  const handleDashboard = () => navigate("/dashboard");

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
            className="mr-3 text-gray-600 hover:text-purple-700 active:text-purple-800 md:hidden"
          >
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <div className="flex-1 flex items-center justify-between md:justify-start">
            <div
              className="text-purple-700 font-bold text-base md:text-lg lg:text-xl cursor-pointer hover:text-purple-800 active:text-purple-900"
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
            className={`text-gray-500 hover:text-purple-700 active:text-purple-800 p-1 ${
              isDropdownOpen ? "text-purple-700" : ""
            }`}
            onClick={() => setIsNotificationActive(!isNotificationActive)}
          >
            <FaBell className="text-base md:text-lg lg:text-xl" />
          </button>
          <div className="relative">
            <button
              className="flex items-center gap-1 md:gap-2 text-xs md:text-sm lg:text-base text-gray-700 p-2 hover:text-purple-700 active:text-purple-800"
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
            className="hidden md:flex absolute -right-3 top-4 bg-white rounded-full p-0.5 shadow-md hover:bg-gray-50 active:bg-gray-100"
          >
            {isSidebarOpen ? (
              <IoIosArrowDropleftCircle
                size={24}
                className="text-black hover:text-purple-700 active:text-purple-800"
              />
            ) : (
              <IoIosArrowDroprightCircle
                size={24}
                className="text-black hover:text-purple-700 active:text-purple-800"
              />
            )}
          </button>
          <nav className="p-4 space-y-4">
            <div
              className="flex items-center text-purple-700 font-semibold cursor-pointer pt-2 text-xs md:text-sm lg:text-base hover:text-purple-800 active:text-purple-900"
              onClick={handleDashboard}
            >
              <PiChartPieSliceFill size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Create New Agent
              </span>
            </div>
            <div
              className="flex items-center text-black hover:text-purple-700 active:text-purple-800 cursor-pointer py-2 text-xs md:text-sm lg:text-base"
              onClick={handleVoice}
            >
              <ImUsers size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Agent Customization
              </span>
            </div>
            <div className="flex items-center text-black hover:text-purple-700 active:text-purple-800 cursor-pointer pb-2 text-xs md:text-sm lg:text-base">
              <FaPhoneAlt size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Call Logs
              </span>
            </div>
            <div className="flex items-center text-black hover:text-purple-700 active:text-purple-800 cursor-pointer text-xs md:text-sm lg:text-base">
              <PiUserList size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Account Settings
              </span>
            </div>
          </nav>
          <div className="px-4 mb-24 md:mb-[70px] space-y-2">
            <div className="flex items-center text-black hover:text-purple-700 active:text-purple-800 cursor-pointer py-2 text-xs md:text-sm lg:text-base">
              <LuSquareArrowOutUpRight size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Updates & FAQ
              </span>
            </div>
            <div className="flex items-center text-black hover:text-purple-700 active:text-purple-800 cursor-pointer py-2 text-xs md:text-sm lg:text-base">
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
            {/* Left side - Full width on mobile, 20% on desktop */}
            <div className="w-full lg:w-1/5 bg-white rounded-xl p-4">
              <button className="w-full bg-purple-700 text-white px-4 py-2 rounded-md 
              flex items-center justify-center gap-2 mb-6 hover:bg-purple-800 active:bg-purple-900"
              onClick={handleDashboard}
              >
                <FaPlus size={14} />
                <span className="text-xs md:text-sm lg:text-base">
                  Create New Agent
                </span>
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div
                        key={num}
                        className="text-xs md:text-sm lg:text-base font-medium flex items-center mb-6"
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
                          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-purple-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full relative" />
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Full width on mobile, 80% on desktop */}
            <div className="w-full lg:w-4/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                {/* Tab buttons - Stack vertically on mobile, horizontal scroll on tablet */}
                <div className="flex flex-col sm:flex-row overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 space-y-2 sm:space-y-0">
                  <span
                    onClick={() => {
                      setActiveTab("create");
                      handleCreateAgent();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer sm:rounded-l-md whitespace-nowrap text-sm ${"bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400"}`}
                  >
                    Agent
                  </span>
                  <span
                    onClick={() => {
                      setActiveTab("voice");
                      handleVoice();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer whitespace-nowrap text-sm bg-purple-700 text-white`}
                  >
                    Voice
                  </span>
                  <span
                    onClick={() => {
                      setActiveTab("analysis");
                      handleAnalysis();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer whitespace-nowrap text-sm ${
                      activeTab === "analysis"
                        ? "bg-purple-700 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400"
                    }`}
                  >
                    Analysis
                  </span>
                  <span
                    onClick={() => {
                      setActiveTab("security");
                      handleSecurity();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer whitespace-nowrap text-sm ${
                      activeTab === "security"
                        ? "bg-purple-700 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400"
                    }`}
                  >
                    Security
                  </span>
                  <span
                    onClick={() => {
                      setActiveTab("advanced");
                      handleAdvanced();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer sm:rounded-r-md whitespace-nowrap text-sm ${
                      activeTab === "advanced"
                        ? "bg-purple-700 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 active:bg-gray-400"
                    }`}
                  >
                    Advanced
                  </span>
                </div>

                {/* Action buttons - Full width on mobile, auto width on tablet/desktop */}
                <div className="flex gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none border border-black text-black px-4 py-2 rounded-md text-sm hover:bg-gray-100 active:bg-gray-200 transition-colors min-w-[80px]">
                    Clear
                  </button>
                  <button className="flex-1 sm:flex-none bg-purple-700 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-800 active:bg-purple-900 transition-colors min-w-[80px]">
                    Save
                  </button>
                </div>
              </div>

              <div className="space-y-6 mt-6 mb-24">
                <div className="flex justify-between items-center">
                  <h2 className="text-base md:text-lg font-semibold">
                    Voice Settings
                  </h2>
                </div>

                <div className="bg-white border shadow">
                  <div className="p-4 md:p-5 space-y-6">
                    {/* Voice Selection */}
                    <div className="max-w-full md:max-w-md">
                      <VoiceDropdown />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {/* Use Flash */}
                      <div>
                        <label className="block font-bold text-xs md:text-sm text-[#333333DE] leading-[17px] font-inter mb-1">
                          Use Flash
                        </label>
                        <div className="border rounded-md p-3 md:p-4 flex justify-between items-center">
                          <div>
                            <p className="text-gray-600 text-xs md:text-sm">
                              Enable flash for better performance
                            </p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={useFlash}
                              onChange={() => setUseFlash(!useFlash)}
                            />
                            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full relative" />
                          </label>
                        </div>
                      </div>

                      {/* TTS Output Format */}
                      <div>
                        <label className="block font-bold text-xs md:text-sm text-[#333333DE] leading-[17px] font-inter mb-3">
                          TTS Output Format
                        </label>
                        <div className="border rounded-md p-3 md:p-4">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                            <p className="text-gray-600 text-xs md:text-sm">
                              Select output format
                            </p>
                            <div className="w-full sm:w-48">
                              <FormatDropdown />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <div className="flex flex-col space-y-2">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                          <div>
                          <label className="block font-bold text-xs md:text-sm text-[#333333DE] leading-[17px] font-inter">
                            Pronunciation Dictionary
                          </label>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 items-center">
                            <span className="bg-[#3C3C3C] text-white px-2 py-1 rounded-md text-xs">.pls</span>
                            <span className="bg-[#3C3C3C] text-white px-2 py-1 rounded-md text-xs">.txt</span>
                            <span className="bg-[#3C3C3C] text-white px-2 py-1 rounded-md text-xs">.xml</span>
                            <span className="text-xs text-gray-500">Max 1.6 MB</span>
                          </div>

                          </div>
                          
                        </div>
                        <div className="border border-gray-200 rounded-md p-3 md:p-4">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                            <p className="text-xs text-gray-500">
                              Add custom pronunciations for specific words
                            </p>
                            <button className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded-md
                            text-xs md:text-sm">
                              Add Document
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block font-bold text-xs md:text-sm text-[#333333DE] leading-[17px] font-inter mb-3">
                          Optimize Streaming Latency
                        </label>
                        <div className="border border-gray-200 rounded-md p-3 md:p-4">
                          <p className="text-xs text-gray-500 mb-2">
                            Adjust streaming latency for optimal performance
                          </p>
                          <input
                            type="range"
                            className="w-full accent-black"
                            min="0"
                            max="100"
                            defaultValue="50"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Stability and Speed */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block font-bold text-xs md:text-sm text-[#333333DE] leading-[17px] font-inter mb-3">
                          Stability
                        </label>
                        <div className="border border-gray-200 rounded-md p-3 md:p-4">
                          <p className="text-xs text-gray-500 mb-2">
                            Stability controls how much the voice output varies
                            between different generations.
                          </p>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={stability}
                            onChange={(e) => setStability(e.target.value)}
                            className="w-full accent-black"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-bold text-xs md:text-sm text-[#333333DE] leading-[17px] font-inter mb-3">
                          Speed
                        </label>
                        <div className="border border-gray-200 rounded-md p-3 md:p-4">
                          <p className="text-xs text-gray-500 mb-2">
                            Speed determines how fast or slow the voice speaks
                            the generated text.
                          </p>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={speed}
                            onChange={(e) => setSpeed(e.target.value)}
                            className="w-full accent-black"
                          />
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
      <footer
        className="fixed bottom-0 left-0 right-0 min-h-[40px] md:h-10 flex flex-col md:flex-row items-center justify-between 
      px-4 md:px-6 py-2 md:py-8 text-xs md:text-sm lg:text-base border bg-white z-50"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-gray-500">
          <div className="text-gray-500">BerryDial</div>
          <div className="flex gap-4 text-gray-500 ml-4 sm:ml-8">
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
