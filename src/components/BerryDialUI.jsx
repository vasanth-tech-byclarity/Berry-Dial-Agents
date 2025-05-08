import React from "react";

export default function BerryDialUI() {
  return (
    <div className="h-screen flex flex-col font-sans text-sm text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center bg-white border-b px-4 py-2 shadow-sm">
        <div className="text-xl font-semibold">Berry Dial</div>
        <div className="text-sm font-medium">
          My <span className="text-blue-600">account▾</span>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-white border-r p-3 flex flex-col justify-between">
          <div>
            <ul className="space-y-1">
              <li className="flex items-center space-x-2 text-purple-700 font-medium">
                <span className="text-xs">●</span>
                <span>Create New Agent</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-black">●</span>
                <span>Agent Creation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>Call logs</span>
              </li>
              <li className="flex items-center space-x-2 text-xs text-gray-500">
                <span>📝</span>
                <span>Additional settings</span>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-1 text-xs">
              <li className="flex items-center space-x-2 text-gray-600">
                <span>↘</span>
                <span>Updates & FAQ</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-600">
                <span>↘</span>
                <span>Log out</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col bg-gray-50 items-center justify-center p-4">
          <div className="mb-4 text-xs font-medium text-gray-500 w-full px-4">Dashboard &gt; Default</div>

          <div className="bg-white text-center shadow-md px-6 py-8 rounded-md max-w-md mx-auto">
            <button className="bg-purple-700 text-white px-4 py-1 rounded text-sm mb-4">
              + Create New Agent
            </button>
            <p className="text-xs text-gray-700">
              You haven’t created any agents yet. Start by setting up your first AI voice agent to manage
              conversations effortlessly
            </p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t text-xs text-gray-500 flex justify-between items-center px-4 py-2">
        <div className="flex gap-3">
          <span>BerryDial</span>
          <span>Terms of use</span>
          <span>Privacy Policy</span>
          <span>Cookies</span>
        </div>
        <div>© 2025 BerryDial | All rights reserved</div>
      </footer>
    </div>
  );
}
