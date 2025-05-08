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

const AgentLanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "in",
    name: "India (IND)",
    flag: "https://flagcdn.com/w40/in.png",
  });

  const languages = [
    { code: "in", name: "India (IND)", flag: "https://flagcdn.com/w40/in.png" },
    {
      code: "us",
      name: "United States (USA)",
      flag: "https://flagcdn.com/w40/us.png",
    },
    { code: "es", name: "Spain (ESP)", flag: "https://flagcdn.com/w40/es.png" },
    {
      code: "fr",
      name: "French (France)",
      flag: "https://flagcdn.com/w40/fr.png",
    },
    {
      code: "de",
      name: "German (Germany)",
      flag: "https://flagcdn.com/w40/de.png",
    },
    {
      code: "custom",
      name: "Custom Language",
      flag: "https://flagcdn.com/w40/un.png",
    },
  ];

  return (
    <div className="relative">
      <div className="h-14">
        <label className="block font-bold text-[14px] text-[#333333DE] leading-[17px] font-inter mb-1">
          Agent Language
        </label>
        <p className="text-xs text-gray-500">
          Specify the primary language of your Agent
        </p>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full border text-black pl-10 pr-8 py-2 rounded-md border-gray-300 bg-white text-left focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full overflow-hidden border border-gray-200 bg-gray-50">
          <img
            src={selectedLanguage.flag}
            alt={selectedLanguage.name}
            className="w-full h-full object-contain"
          />
        </div>
        {selectedLanguage.name}
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
            {languages.map((language) => (
              <div
                key={language.code}
                className="flex items-center gap-2 px-4 py-2 hover:bg-purple-50 cursor-pointer"
                onClick={() => {
                  setSelectedLanguage(language);
                  setIsOpen(false);
                }}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 bg-gray-50">
                  <img
                    src={language.flag}
                    alt={language.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {language.name}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const AdditionalLanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: "cn",
    name: "Chinese (Mandarin)",
    flag: "https://flagcdn.com/w40/cn.png",
  });

  const languages = [
    {
      code: "cn",
      name: "Chinese (Mandarin)",
      flag: "https://flagcdn.com/w40/cn.png",
    },
    {
      code: "jp",
      name: "Japanese (Japan)",
      flag: "https://flagcdn.com/w40/jp.png",
    },
    {
      code: "kr",
      name: "Korean (South Korea)",
      flag: "https://flagcdn.com/w40/kr.png",
    },
    {
      code: "it",
      name: "Italian (Italy)",
      flag: "https://flagcdn.com/w40/it.png",
    },
    {
      code: "br",
      name: "Portuguese (Brazil)",
      flag: "https://flagcdn.com/w40/br.png",
    },
    {
      code: "custom",
      name: "Custom Language",
      flag: "https://flagcdn.com/w40/un.png",
    },
  ];

  return (
    <div className="relative">
      <div className="h-14">
        <label className="block font-bold text-[14px] text-[#333333DE] leading-[17px] font-inter mb-1">
          Additional Languages
        </label>
        <p className="text-xs text-gray-500">
          Specify additional languages which callers can choose from
        </p>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full border text-black pl-10 pr-8 py-2 rounded-md border-gray-300 bg-white text-left focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full overflow-hidden border border-gray-200 bg-gray-50">
          <img
            src={selectedLanguage.flag}
            alt={selectedLanguage.name}
            className="w-full h-full object-contain"
          />
        </div>
        {selectedLanguage.name}
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
            {languages.map((language) => (
              <div
                key={language.code}
                className="flex items-center gap-2 px-4 py-2 hover:bg-purple-50 cursor-pointer"
                onClick={() => {
                  setSelectedLanguage(language);
                  setIsOpen(false);
                }}
              >
                <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 bg-gray-50">
                  <img
                    src={language.flag}
                    alt={language.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                {language.name}
              </div>
            ))}
          </div>
        </>
      )}
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
    <div className="relative">
      <div className="h-14">
        <label className="block font-bold text-[14px] text-[#333333DE] leading-[17px] font-inter mb-1">
          Characteristics
        </label>
        <p className="text-xs text-gray-500">Specify Character of your Agent</p>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full border text-black px-4 py-2 rounded-md border-gray-300 bg-white text-left focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        {selectedCharacteristic.name}
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
                className="flex items-center gap-2 px-4 py-2 hover:bg-purple-50 cursor-pointer"
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

export default function AgentCustomization() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [activeTab, setActiveTab] = useState("create");
  const [useRag, setUseRag] = useState(true);
  const navigate = useNavigate();
  const landingPage = () => {
    navigate("/");
  };
  const handleCreateAgent = () => {
    navigate("/dashboard");
  };
  const handleAgentCustomization = () => {
    navigate("/agent-customization");
  };
  const handleVoice = () => {
    navigate("/voice");
  };
  const handleAnalysis = () => {
    navigate("/analysis");
  };
  const handleSecurity = () => {
    navigate("/security");
  };
  const handleAdvanced = () => {
    navigate("/advanced");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

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
              className="text-purple-700 font-bold text-base md:text-lg lg:text-xl"
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
              isDropdownOpen ? "text-purple-700" : ""
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
              onClick={handleCreateAgent}
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
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* Left side - Full width on mobile/tablet, 20% on desktop */}
            <div className="w-full lg:w-1/5 bg-white rounded-xl p-4">
              <button className="w-full bg-purple-700 text-white px-4 py-2 rounded-md 
              flex items-center justify-center gap-2 mb-6 text-sm md:text-base hover:bg-purple-800 transition-colors"
              onClick={handleCreateAgent}
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

            {/* Right side - Full width on mobile/tablet, 80% on desktop */}
            <div className="w-full lg:w-4/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                {/* Tab buttons - Stack vertically on mobile, horizontal scroll on tablet */}
                <div className="flex flex-col sm:flex-row overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 space-y-2 sm:space-y-0">
                  <span
                    onClick={() => {
                      setActiveTab("create");
                      handleAgentCustomization();
                    }}
                    className={`px-3 md:px-4 py-2 cursor-pointer sm:rounded-l-md whitespace-nowrap text-sm ${
                      activeTab === "create"
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

              <div className="space-y-6 mt-6 mb-24">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Agent Settings</h2>
                </div>

                <div className="bg-white border shadow rounded-lg">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 max-w-7xl mx-auto p-4 md:p-5"
                  >
                    {/* Grid layout - 1 column on mobile, 2 on tablet, 3 on desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      <div className="flex flex-col">
                        <AgentLanguageDropdown />
                      </div>
                      <div className="flex flex-col">
                        <AdditionalLanguageDropdown />
                      </div>
                      <div className="flex flex-col">
                        <CharacteristicsDropdown />
                      </div>
                    </div>

                    {/* Description and First Message - Stack on mobile/tablet, side by side on desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block font-bold text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter mb-1">
                          Description
                        </label>
                        <p className="text-xs sm:text-sm text-gray-500 mb-2">
                          The description is used to determine the persona of
                          the agent and the context of the conversation
                        </p>
                        <textarea
                          className="border border-gray-300 rounded-md w-full p-2 text-black h-[104px] resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm"
                          defaultValue="You are a support agent named Eric. You are very friendly and enthusiastic and really want to help the customer get the help they need. Answer in 3 to 7 sentences in most cases."
                        ></textarea>
                      </div>
                      <div>
                        <label className="block font-bold text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter mb-1">
                          First message
                        </label>
                        <p className="text-xs sm:text-sm text-gray-500 mb-2">
                          The first message the agent will say. If empty, the
                          agent will wait for the user to start the conversation
                        </p>
                        <div className="border border-gray-200 rounded-md px-2 sm:px-4 py-2 sm:h-[104px] flex items-center justify-center">
                          <div className="flex flex-col sm:flex-row gap-2 w-full">
                            <input
                              className="border border-gray-300 rounded-md flex-1 p-2 text-black resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm"
                              defaultValue="Hi, I'm Eric. How can I help you today?"
                            />
                            <button className="bg-black text-white px-2 sm:px-3 py-1 sm:py-2 rounded-md whitespace-nowrap text-xs sm:text-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
                              + Add Variable
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Variables */}
                    <div className="space-y-1">
                      <label className="block font-bold text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter">
                        Dynamic Variables
                      </label>
                      <div className="border border-gray-200 rounded-md p-2 sm:p-4">
                        <p className="text-xs sm:text-sm text-gray-500">
                          Variables like in your prompts and first message will
                          be replaced with actual values when the conversation
                          starts.{" "}
                          <a
                            href="#"
                            className="text-black underline hover:text-purple-700 focus:outline-none"
                          >
                            Learn more
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* LLM Section */}
                    <div className="space-y-1">
                      <label className="block font-bold text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter">
                        LLM
                      </label>
                      <div className="border border-gray-200 rounded-md p-2 sm:p-4">
                        <p className="text-xs sm:text-sm text-gray-500">
                          Select which provider and model to use for the LLM. If
                          your chosen LLM is not available at the moment or
                          something goes wrong, we will redirect the
                          conversation to another LLM. Currently, the LLM cost
                          is covered by us. In the future, this cost will be
                          passed onto you.
                        </p>
                      </div>
                    </div>

                    {/* Temperature and Token Usage - Stack on mobile, side by side on tablet/desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter mb-3">
                          Temperature
                        </label>
                        <div className="h-auto sm:h-[120px] border border-gray-200 rounded-md p-2 sm:p-4">
                          <p className="text-xs sm:text-sm text-gray-500 mb-2">
                            Temperature is a parameter that controls the
                            creativity or randomness of the responses generated
                            by the LLM.
                          </p>
                          <input
                            type="range"
                            className="w-full accent-black focus:outline-none"
                            min="0"
                            max="1"
                            step="0.1"
                            defaultValue="0.5"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-bold text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter mb-3">
                          Limit token usage
                        </label>
                        <div className="h-auto sm:h-[120px] border border-gray-200 rounded-md p-2 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                          <p className="text-xs sm:text-sm text-gray-500">
                            Configure the maximum number of tokens that the LLM
                            can predict. A limit will be applied if the value is
                            greater than 0.
                          </p>

                          <input
                            type="text"
                            className="border border-gray-300 rounded-md w-full sm:w-24 p-2 text-black focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm"
                            defaultValue="-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Knowledge Base */}
                    <div>
                      <label className="block font-bold text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter mb-3">
                        Knowledge base
                      </label>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between my-2">
                        <div className="w-full sm:flex sm:gap-2">
                          <div className="flex flex-col sm:flex-row gap-2 border border-gray-200 rounded-md p-2 sm:p-3 w-full">
                            <p className="text-xs sm:text-sm">
                              Provide the LLM with domain-specific information
                              to help it answer questions more accurately.
                            </p>
                            <button className="bg-black text-white px-4 py-2 rounded-md text-xs sm:text-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full sm:w-auto">
                              Add document
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Use RAG Section */}
                    <div>
                      <label className="block font-bold text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter mb-3">
                        Use RAG
                      </label>
                      <div className="border rounded-md p-2 sm:p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                        <p className="text-gray-600 text-xs sm:text-sm">
                          Retrieval-Augmented Generation (RAG) increases the
                          agent's maximum Knowledge Base size. The agent will
                          have access to relevant pieces of attached Knowledge
                          Base during answer generation.
                        </p>
                        <div className="flex items-center justify-end w-full sm:w-auto">
                          <label className="inline-flex items-center cursor-pointer sm:ml-4 my-1 sm:my-3">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={useRag}
                              onChange={() => setUseRag(!useRag)}
                            />
                            <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-500 rounded-full peer peer-checked:bg-purple-600">
                              <div className="absolute top-[2px] left-[2px] bg-white border rounded-full h-5 w-5 transition-all peer-checked:translate-x-full"></div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Tools Section */}
                    <div>
                      <label className="block font-bold text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter mb-3">
                        Tools
                      </label>
                      <div className="border rounded-md">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:px-4 sm:py-2 gap-2 sm:gap-0">
                          <div className="flex items-start sm:items-center gap-3 w-full sm:w-auto">
                            <div className="bg-gray-200 rounded-lg p-2 border border-gray-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                                />
                              </svg>
                            </div>
                            <div>
                              <span className="text-xs sm:text-sm font-medium text-black mr-2">
                                end_call
                              </span>
                              <span className="bg-gray-200 text-gray-600 text-xs sm:text-sm px-2 py-0.5 rounded-md">
                                System
                              </span>
                              <p className="text-gray-600 text-xs sm:text-sm my-1.5">
                                Gives agent the ability to end the call with the
                                user.
                              </p>
                            </div>
                          </div>
                          <div className="bg-gray-200 rounded-lg p-2 border border-gray-300 cursor-pointer self-end sm:self-auto">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-white cursor-pointer"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Workspace Secrets */}
                    <div>
                      <label className="block font-bold text-xs sm:text-sm md:text-base text-[#333333DE] leading-[17px] font-inter mb-3">
                        Workspace Secrets
                      </label>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between my-2">
                        <div className="w-full sm:flex sm:gap-2">
                          <div className="flex flex-col sm:flex-row gap-2 border border-gray-200 rounded-md p-2 w-full">
                            <p className="text-xs sm:text-sm">
                              Create and manage secure secrets that can be
                              accessed across your workspace
                            </p>
                            <button className="bg-black text-white px-5 py-2 rounded-md text-xs sm:text-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 w-full sm:w-auto">
                              Add Secret
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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
