import React from "react";
import SearchIcon from "../icons/SearchIcon";
import LockIcon from "../icons/LockIcon";
import MailIcon from "../icons/MailIcon";

const AttackSurfaceTable = () => {
  return (
    <section className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <h2 className="text-4xl font-bold">Attack Surface</h2>
        <div className="flex flex-col md:flex-row items-stretch md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              className="p-3 pl-10 rounded-md bg-dark-background/50 border border-[#00F0FF] text-white placeholder-gray-500 focus:ring-1 focus:ring-neon-blue outline-none w-full"
            />
            <SearchIcon
              color="rgb(var(--color-neon-blue-rgb))"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>
          <select className="p-3 rounded-md bg-dark-background/50 border border-[#00F0FF] text-white focus:ring-1 focus:ring-neon-blue outline-none cursor-pointer w-full md:w-auto">
            <option>All Status</option>
            <option>New</option>
            <option>Monitored</option>
            <option>Critical</option>
          </select>
        </div>
      </div>

      <div
        className="overflow-x-auto rounded-lg shadow-xl"
        style={{ background: "rgb(var(--color-dark-background-rgb) / 0.8)" }}
      >
        <table className="min-w-full border border-[#00F0FF] rounded-xl">
          <thead>
            <tr className="border-b border-[#00F0FF] text-left">
              <th className="py-4 px-6 text-sm font-semibold text-gray-400">
                Asset
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-400">
                Type
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-400">
                Risk
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-400">
                Source
              </th>
              <th className="py-4 px-6 text-sm font-semibold text-gray-400">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#00F0FF] hover:bg-dark-background/60 transition-colors duration-200">
              <td className="py-4 px-6 flex items-center space-x-3">
                <LockIcon
                  color="rgb(var(--color-neon-blue))"
                  className="w-5 h-5"
                />
                <span>domain.gite.com</span>
              </td>
              <td className="py-4 px-6">Domain</td>
              <td className="py-4 px-6">
                <span className="bg-red-600/30 text-red-400 text-xs px-3 py-1 rounded-full font-semibold">
                  Critical
                </span>
              </td>
              <td className="py-4 px-6">Discovery</td>
              <td className="py-4 px-6">
                <span className="text-neon-blue font-semibold">New</span>
              </td>
            </tr>
            <tr className="border-b border-[#00F0FF] hover:bg-dark-background/60 transition-colors duration-200">
              <td className="py-4 px-6 flex items-center space-x-3">
                <LockIcon
                  color="rgb(var(--color-neon-blue))"
                  className="w-5 h-5"
                />
                <span>bbgsiteme.com</span>
              </td>
              <td className="py-4 px-6">Host</td>
              <td className="py-4 px-6">
                <span className="bg-red-600/30 text-red-400 text-xs px-3 py-1 rounded-full font-semibold">
                  Critical
                </span>
              </td>
              <td className="py-4 px-6">Internal</td>
              <td className="py-4 px-6">
                <span className="text-neon-blue font-semibold">New</span>
              </td>
            </tr>
            <tr className="hover:bg-dark-background/60 transition-colors duration-200">
              <td className="py-4 px-6 flex items-center space-x-3">
                <MailIcon
                  color="rgb(var(--color-neon-blue))"
                  className="w-5 h-5"
                />
                <span>email.server.com</span>
              </td>
              <td className="py-4 px-6">Email Server</td>
              <td className="py-4 px-6">
                <span className="bg-yellow-600/30 text-yellow-400 text-xs px-3 py-1 rounded-full font-semibold">
                  High
                </span>
              </td>
              <td className="py-4 px-6">Internal</td>
              <td className="py-4 px-6">
                <span className="text-gray-400">Monitored</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AttackSurfaceTable;
