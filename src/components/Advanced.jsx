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
import { Switch } from "@headlessui/react";

const InputRow = ({ label, description, input }) => (
  <div className="p-2 rounded flex flex-col sm:flex-row justify-between items-start gap-2">
    <div className="flex-1 w-full sm:w-auto">
      <label className="font-semibold block mb-1 text-xs sm:text-sm md:text-base">{label}</label>
      <p className="text-xs sm:text-sm md:text-base text-gray-600">{description}</p>
    </div>
    <div className="w-full sm:w-40 mt-1">{input}</div>
  </div>
);

const FormatDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("PCM 16000Hz");

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border p-4 rounded">
      <div className="flex-1 w-full sm:w-auto">
        <p className="text-xs sm:text-sm md:text-base text-gray-600">Select the input format you want to use for automatic speech recognition.</p>
      </div>
      <div className="w-full sm:w-40">
        <div className="relative w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-full border text-black px-4 py-2 rounded-md border-gray-300 bg-white text-left focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-gray-50 active:bg-gray-100"
          >
            <span className="block truncate pr-8 text-xs sm:text-sm md:text-base">{selectedFormat}</span>
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
                  className="px-4 py-3 hover:bg-purple-50 active:bg-purple-100 cursor-pointer text-xs sm:text-sm md:text-base"
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
      </div>
    </div>
  );
};

const CharacteristicsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCharacteristic, setSelectedCharacteristic] = useState({
    id: "natural",
    name: "Natural & Human-like",
  });

  const characteristics = [
    { id: "natural", name: "Natural & Human-like" },
    { id: "professional", name: "Professional & Formal" },
    { id: "friendly", name: "Friendly & Casual" },
    { id: "technical", name: "Technical & Precise" },
    { id: "empathetic", name: "Empathetic & Supportive" },
    { id: "custom", name: "Custom Characteristic" },
  ];

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full border text-black px-4 py-2 rounded-md border-gray-300 bg-white text-left focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <span className="block truncate text-xs sm:text-sm md:text-base">{selectedCharacteristic.name}</span>
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
            {characteristics.map((characteristic) => (
              <div
                key={characteristic.id}
                className="flex items-center gap-2 px-4 py-2 hover:bg-purple-50 cursor-pointer text-xs sm:text-sm md:text-base"
                onClick={() => {
                  setSelectedCharacteristic(characteristic);
                  setIsOpen(false);
                }}
              >
                {characteristic.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function Advanced() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationActive, setIsNotificationActive] = useState(false);
  const [activeTab, setActiveTab] = useState("advanced");
  const [storeAudio, setStoreAudio] = useState(false);
  const [deletePII, setDeletePII] = useState(false);
  const [deleteTranscript, setDeleteTranscript] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [isEventsOpen, setIsEventsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const landingPage = () => navigate("/");
  const handleVoice = () => navigate("/voice");
  const handleAgentCustomization = () => navigate("/agent-customization");
  const handleAnalysis = () => navigate("/analysis");
  const handleSecurity = () => navigate("/security");
  const handleCreateAgent = () => navigate("/agent-customization");
  const handleDashboard = () => navigate("/dashboard");
  const handleAdvanced = () => navigate("/advanced");

  React.useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-xs sm:text-sm md:text-base text-gray-700 font-sans">
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

            <div className="hidden md:block text-xs sm:text-sm md:text-base text-gray-500 mx-4 lg:mx-32">
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
              className="flex items-center gap-1 md:gap-2 text-xs sm:text-sm md:text-base text-gray-700 p-2"
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
                    className="py-2 px-4 hover:bg-gray-50 cursor-pointer text-xs sm:text-sm md:text-base mt-1 md:mt-0"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Profile
                  </div>
                  <div
                    className="py-2 px-4 hover:bg-gray-50 cursor-pointer text-xs sm:text-sm md:text-base mt-1 md:mt-0"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Settings
                  </div>
                  <div
                    className="py-2 px-4 hover:bg-gray-50 cursor-pointer text-xs sm:text-sm md:text-base mt-1 md:mt-0"
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
              className="flex items-center text-black hover:text-purple-700 cursor-pointer pt-2 text-xs md:text-sm lg:text-base"
              onClick={handleCreateAgent}
            >
              <PiChartPieSliceFill size={16} className="mr-3" />
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Create New Agent
              </span>
            </div>
            <div
              className="flex items-center text-purple-700 font-semibold cursor-pointer py-2 text-xs md:text-sm lg:text-base"
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
                {/* Tab buttons - Stack vertically on mobile, horizontal scroll on tablet */}
                <div className="flex flex-col sm:flex-row overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 space-y-2 sm:space-y-0">
                  <span
                    onClick={() => {
                      setActiveTab("create");
                      handleAgentCustomization();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer sm:rounded-l-md whitespace-nowrap text-sm bg-gray-200 text-gray-700 hover:bg-gray-300`}
                  >
                    Agent
                  </span>
                  <span
                    onClick={() => {
                      setActiveTab("voice");
                      handleVoice();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer whitespace-nowrap text-sm bg-gray-200 text-gray-700 hover:bg-gray-300`}
                  >
                    Voice
                  </span>
                  <span
                    onClick={() => {
                      setActiveTab("analysis");
                      handleAnalysis();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer whitespace-nowrap text-sm bg-gray-200 text-gray-700 hover:bg-gray-300`}
                  >
                    Analysis
                  </span>
                  <span
                    onClick={() => {
                      setActiveTab("security");
                      handleSecurity();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer whitespace-nowrap text-sm bg-gray-200 text-gray-700 hover:bg-gray-300`}
                  >
                    Security
                  </span>
                  <span
                    onClick={() => {
                      setActiveTab("advanced");
                      handleAdvanced();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer sm:rounded-r-md whitespace-nowrap text-sm bg-purple-700 text-white`}
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
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Advanced</h2>
              </div>

              <div className="max-w-3xl border p-4 md:p-5 rounded-lg font-sans space-y-4 mt-6 mb-24">
                <h3 className="font-semibold mb-2 text-xs sm:text-sm md:text-base">Turn timeout</h3>
                <InputRow
                  description="The maximum number of seconds since the user last spoke. If exceeded, the agent will respond and force a turn. A value of -1 means the agent will never timeout and always wait for a response from the user."
                  input={
                    <input
                      type="number"
                      defaultValue={7}
                      className="border px-3 py-1 w-full rounded text-xs sm:text-sm md:text-base"
                    />
                  }
                />

                <label className="font-semibold block mb-1 text-xs sm:text-sm md:text-base">Max conversation duration</label>

                <div className="p-2 rounded flex flex-col sm:flex-row justify-between items-start gap-2 border">
                  <div className="flex-1 w-full sm:w-auto">
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 pt-2">The maximum number of seconds that a conversation can last.</p>
                  </div>
                  <div className="w-full sm:w-40 mt-1">
                    <input
                      type="number"
                      defaultValue={300}
                      className="border px-3 py-1 w-full rounded text-xs sm:text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="p-2 rounded flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex-1 w-full sm:w-auto">
                    <label className="font-semibold block my-1 text-xs sm:text-sm md:text-base">Keywords</label>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      Define a comma-separated list of keywords that have a
                      higher likelihood of being predicted correctly.
                    </p>
                    <input
                      type="text"
                      className="border px-3 py-3 my-2 w-full rounded focus:outline-none text-xs sm:text-sm md:text-base"
                      placeholder="Enter keywords..."
                    />
                  </div>
                </div>

                <div>
                <h3 className="font-semibold mb-2 text-xs sm:text-sm md:text-base">User input audio format</h3>
                <FormatDropdown /> 
                </div>                 

                <h3 className="font-semibold text-xs sm:text-sm md:text-base">Client Events</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2">
                  Select the events that should be sent to the client. The
                  "audio" event must always be enabled. If "interruption" event
                  is disabled, agent will ignore user interruption and speak
                  until the end of response.
                </p>

                <CharacteristicsDropdown />

                <h3 className="font-semibold mb-2 text-xs sm:text-sm md:text-base">Privacy Settings</h3>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600">
                      This section allows you to configure the privacy settings
                      for the agent.
                    </p>
                  </div>
                  <div className="flex flex-row justify-between items-center border p-2 mt-3">
                    <div className="text-xs sm:text-sm md:text-base">
                      Store Call Audio
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-auto">
                          <input type="checkbox" className="sr-only peer" />
                          <div
                            className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full
                           peer-checked:after:border-white after:content-[''] 
                           after:absolute after:top-[2px] after:left-[2px] after:bg-white
                            after:border-gray-300 after:border after:rounded-full after:h-4 
                            after:w-4 after:transition-all peer-checked:bg-purple-700"
                          ></div>
                        </label>
                  </div>
                </div>

                <h3 className="font-semibold mb-2 text-xs sm:text-sm md:text-base">
                  Conversations Retention Period
                </h3>
                <InputRow
                  description="Set the number of days to keep conversations (-1 for unlimited)."
                  input={
                    <input
                      type="number"
                      defaultValue={730}
                      className="border px-3 py-1 w-full rounded text-xs sm:text-sm md:text-base"
                    />
                  }
                />

                <div className="flex flex-col justify-between border p-2 gap-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h3 className="font-semibold mb-2 sm:mb-0 text-xs sm:text-sm md:text-base">
                      Delete Transcript and Derived Fields (PII)
                    </h3>
                    <label className="relative inline-flex items-center cursor-pointer ml-auto">
                          <input type="checkbox" className="sr-only peer" />
                          <div
                            className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full
                           peer-checked:after:border-white after:content-[''] 
                           after:absolute after:top-[2px] after:left-[2px] after:bg-white
                            after:border-gray-300 after:border after:rounded-full after:h-4 
                            after:w-4 after:transition-all peer-checked:bg-purple-700"
                          ></div>
                        </label>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <h3 className="font-semibold mb-2 sm:mb-0 text-xs sm:text-sm md:text-base">
                      Delete all personally identifiable information
                    </h3>
                    <label className="relative inline-flex items-center cursor-pointer ml-auto">
                          <input type="checkbox" className="sr-only peer" />
                          <div
                            className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full
                           peer-checked:after:border-white after:content-[''] 
                           after:absolute after:top-[2px] after:left-[2px] after:bg-white
                            after:border-gray-300 after:border after:rounded-full after:h-4 
                            after:w-4 after:transition-all peer-checked:bg-purple-700"
                          ></div>
                        </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 min-h-[40px] md:h-10 flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-2 md:py-8 text-xs sm:text-sm md:text-base border bg-white z-50">
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
