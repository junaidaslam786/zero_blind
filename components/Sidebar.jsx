import React from "react";
import DashboardIcon from "../icons/DashboardIcon";
import AttackSurfaceIcon from "../icons/AttackSurfaceIcon";
import ThreatsIcon from "../icons/ThreatsIcon";
import AutomationIcon from "../icons/AutomationIcon";
import SettingsIcon from "../icons/SettingsIcon";
import SupportIcon from "../icons/SupportIcon";

const Sidebar = () => {
  return (
    <aside
      className="w-64 p-6 rounded-lg shadow-xl"
      style={{ background: "rgb(var(--color-dark-background-rgb) / 0.8)" }}
    >
      <ul className="space-y-4 mb-8">
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 text-neon-blue font-semibold p-3 rounded-lg bg-dark-background/50 transition-colors duration-200"
          >
            <DashboardIcon
              color="rgb(var(--color-neon-blue))"
              className="w-6 h-6"
            />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-background/50 transition-colors duration-200 text-gray-300 hover:text-white"
          >
            <AttackSurfaceIcon color="currentColor" className="w-6 h-6" />{" "}
            {/* currentColor allows Tailwind text color to apply */}
            <span>Attack Surface</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-background/50 transition-colors duration-200 text-gray-300 hover:text-white"
          >
            <ThreatsIcon color="currentColor" className="w-6 h-6" />
            <span>Threats</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-background/50 transition-colors duration-200 text-gray-300 hover:text-white"
          >
            <AutomationIcon color="currentColor" className="w-6 h-6" />
            <span>Automation</span>
          </a>
        </li>
      </ul>
      <div className="pt-6 border-t border-gray-700 space-y-4">
        <li className="list-none">
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-background/50 transition-colors duration-200 text-gray-300 hover:text-white"
          >
            <SettingsIcon color="currentColor" className="w-6 h-6" />
            <span>Settings</span>
          </a>
        </li>
        <li className="list-none">
          <a
            href="#"
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-background/50 transition-colors duration-200 text-gray-300 hover:text-white"
          >
            <SupportIcon color="currentColor" className="w-6 h-6" />
            <span>Support</span>
          </a>
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
