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

export default function Security() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const [activeTab, setActiveTab] = useState("security");
  const [useFlash, setUseFlash] = useState(false);
  const [toggleStates, setToggleStates] = useState({
    toggle1: false,
    toggle2: false,
    toggle3: false,
    toggle4: false,
  });
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleToggle = (toggleName) => {
    setToggleStates((prev) => ({
      ...prev,
      [toggleName]: !prev[toggleName],
    }));
  };

  React.useEffect(() => { 
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const landingPage = () => navigate("/");
  const handleDashboard = () => navigate("/dashboard");
  const handleAgentCustomization = () => navigate("/agent-customization");
  const handleSecurity = () => navigate("/security");
  const handleVoice = () => navigate("/voice");
  const handleAnalysis = () => navigate("/analysis");
  const handleAdvanced = () => navigate("/advanced");

  const Toggle = ({ enabled, onToggle }) => (
    <button
      onClick={onToggle}
      className={`w-10 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
        enabled ? "bg-purple-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
          enabled ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );

  const [authEnabled, setAuthEnabled] = useState(false);
  const [overrides, setOverrides] = useState({
    language: false,
    firstMessage: true,
    systemPrompt: false,
    voice: false,
  });

  const [webhookEnabled, setWebhookEnabled] = useState(false);

  return (
    <div className="min-h-screen flex flex-col text-sm text-gray-700 font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-14 border-b px-4 md:px-6 bg-white shadow-sm">
        <div className="flex items-center flex-1">
          <button
            onClick={toggleSidebar}
            className="mr-3 text-gray-600 hover:text-purple-700 lg:hidden"
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

            <div className="hidden md:block text-xs md:text-sm lg:text-base text-gray-500 mx-4 lg:mx-32">
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
          className={`fixed lg:sticky top-14 left-0 h-[calc(100vh-3.5rem)] ${
            isSidebarOpen ? "w-56" : "w-0 lg:w-16"
          } border-r bg-white flex flex-col justify-between transition-all duration-300 shadow-sm z-40`}
        >
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex absolute -right-3 top-4 bg-white rounded-full p-0.5 shadow-md"
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
          <div className="px-4 mb-24 lg:mb-[70px] space-y-2">
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
                {/* Tab buttons - Stack vertically on mobile, horizontal scroll on tablet */}
                <div className="flex flex-col sm:flex-row overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 space-y-2 sm:space-y-0">
                  <span
                    onClick={() => {
                      setActiveTab("agent");
                      handleAgentCustomization();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer sm:rounded-l-md whitespace-nowrap text-sm ${
                      activeTab === "agent"
                        ? "bg-purple-700 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Agent
                  </span>
                  <span
                    onClick={() => {
                      setActiveTab("voice");
                      handleVoice();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer whitespace-nowrap text-sm ${
                      activeTab === "voice"
                        ? "bg-purple-700 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
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
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    Advanced
                  </span>
                </div>

                {/* Action buttons - Full width on mobile, auto width on tablet/desktop */}
                <div className="flex gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none border border-black text-black px-4 py-2 rounded-md text-sm hover:bg-gray-100 transition-colors min-w-[80px]">
                    Clear
                  </button>
                  <button className="flex-1 sm:flex-none bg-purple-700 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-800 transition-colors min-w-[80px]">
                    Save
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center my-6">
                <h2 className="text-base md:text-lg font-semibold">Security</h2>
              </div>
              <div className="max-w-2xl p-5 bg-white border border-gray-300 rounded-md space-y-6 mb-20">
                <div>
                  <label className="block font-bold text-xs md:text-sm text-[#333333DE] leading-[17px] font-inter mb-1">
                    Enable authentication
                  </label>
                  <div className="border rounded-md p-3 md:p-4 flex justify-between items-center">
                    <div>
                      <p className="text-gray-600 text-xs md:text-sm">
                        Require users to authenticate before connecting to the
                        agent.
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

                {/* Allowlist */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-700">
                      Allowlist
                    </h3>
                    <button className="text-xs bg-black text-white px-3 py-1 rounded">
                      Add host
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">
                    Specify the hosts that will be allowed to connect to this
                    agent.
                  </p>
                  <div className="mt-2 p-3 border border-gray-200 rounded">
                    <p className="text-xs text-gray-600">
                      No allowlist specified. Any host will be able to connect
                      to this agent.
                    </p>
                  </div>
                </div>

                {/* Enable overrides */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Enable overrides
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    Choose which parts of the config can be overridden by the
                    client at the start of the conversation.
                  </p>
                  <div className="border border-gray-200 rounded-md p-4">
                    <div className="grid grid-cols-1 gap-y-4">
                      <label className="flex items-center justify-between text-sm text-gray-700">
                        <span>Language</span>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={overrides.language}
                            onChange={() =>
                              setOverrides((prev) => ({
                                ...prev,
                                language: !prev.language,
                              }))
                            }
                          />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full relative" />
                        </label>
                      </label>
                      <label className="flex items-center justify-between text-sm text-gray-700">
                        <span>First Message</span>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={overrides.firstMessage}
                            onChange={() =>
                              setOverrides((prev) => ({
                                ...prev,
                                firstMessage: !prev.firstMessage,
                              }))
                            }
                          />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full relative" />
                        </label>
                      </label>
                      <label className="flex items-center justify-between text-sm text-gray-700">
                        <span>System Prompt</span>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={overrides.systemPrompt}
                            onChange={() =>
                              setOverrides((prev) => ({
                                ...prev,
                                systemPrompt: !prev.systemPrompt,
                              }))
                            }
                          />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full relative" />
                        </label>
                      </label>
                      <label className="flex items-center justify-between text-sm text-gray-700">
                        <span>Voice</span>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={overrides.voice}
                            onChange={() =>
                              setOverrides((prev) => ({
                                ...prev,
                                voice: !prev.voice,
                              }))
                            }
                          />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-purple-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full relative" />
                        </label>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Webhook toggle */}
                <div>
                  <label className="block font-bold text-xs md:text-sm text-[#333333DE] leading-[17px] font-inter mb-1">
                    Fetch initiation client data from webhook
                  </label>
                  <div className="border rounded-md p-3 md:p-4 flex justify-between items-center">
                    <div>
                      <p className="text-gray-600 text-xs md:text-sm">
                        If enabled, the conversation initiation client data will
                        be fetched from the webhook defined in the settings when
                        receiving Twilio calls.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-auto">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-700"></div>
                    </label>
                  </div>
                </div>

                {/* Post-call webhook */}
                <div className="flex flex-col space-y-6">
                  <div>
                    <label className="block font-bold text-xs md:text-sm text-[#333333DE] leading-[17px] font-inter mb-1">
                      Post-Call Webhook
                    </label>
                    <div className="border rounded-md p-3 md:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="w-full sm:flex-1 sm:mr-4">
                        <p className="text-gray-600 text-xs md:text-sm">
                          Override the post-call webhook configured in settings
                          for this agent.
                        </p>
                      </div>
                      <button className="w-full sm:w-auto text-xs bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors whitespace-nowrap">
                        Create Webhook
                      </button>
                    </div>
                  </div>

                  {/* Concurrent calls */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-4">
                      Concurrent Calls Limit
                    </h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
                      <div className="w-full sm:flex-1">
                        <p className="text-xs text-gray-500">
                          The maximum number of concurrent calls allowed.
                        </p>
                        <p className="text-xs text-gray-500">
                          Matching the subscription concurrency limit
                        </p>
                      </div>
                      <input
                        type="text"
                        className="w-full sm:w-32 px-3 py-1.5 border border-gray-300 rounded text-sm"
                        value="-1"
                        readOnly
                      />
                    </div>

                    <h3 className="text-sm font-medium text-gray-700 mb-4">
                      Daily Calls Limit
                    </h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <p className="text-xs text-gray-500">
                        The maximum number of calls allowed per day.
                      </p>
                      <input
                        type="text"
                        className="w-full sm:w-32 px-3 py-1.5 border border-gray-300 rounded text-sm"
                        value="100000"
                        readOnly
                      />
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
