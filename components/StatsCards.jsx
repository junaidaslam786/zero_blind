import React from "react";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div
        className="p-6 border border-[#00F0FF] rounded-xl shadow-xl"
        style={{ background: "rgb(var(--color-dark-background-rgb) / 0.8)" }}
      >
        <div className="text-5xl font-extrabold text-neon-blue mb-2">67</div>
        <div className="text-sm text-gray-400">Total Assets</div>
      </div>
      <div
        className="p-6 border border-[#00F0FF] rounded-xl shadow-xl"
        style={{ background: "rgb(var(--color-dark-background-rgb) / 0.8)" }}
      >
        <div className="text-5xl font-extrabold text-cyber-teal mb-2">5</div>
        <div className="text-sm text-gray-400">Active Exposures</div>
      </div>
      <div
        className="p-6 border border-[#00F0FF] rounded-xl shadow-xl"
        style={{ background: "rgb(var(--color-dark-background-rgb) / 0.8)" }}
      >
        <div className="text-5xl font-extrabold text-neon-blue mb-2">12</div>
        <div className="text-sm text-gray-400">Automation Triggers</div>
      </div>
    </div>
  );
};

export default StatsCards;
