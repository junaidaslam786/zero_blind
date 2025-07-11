import React from "react";

const AutomationRules = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
        <h2 className="text-4xl font-bold">Automation Rules</h2>
        <button className="bg-accent-yellow text-dark-background font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity duration-200 shadow-lg">
          + Add Rule
        </button>
      </div>

      <div
        className="rounded-lg shadow-xl p-6"
        style={{ background: "rgb(var(--color-dark-background-rgb) / 0.8)" }}
      >
        <div className="mb-4">
          <code className="bg-dark-background/50 p-4 rounded-md block text-cyber-teal border border-gray-700 text-lg">
            IF{" "}
            <span className="text-neon-blue font-semibold">Status = New</span>{" "}
            THEN{" "}
            <span className="text-neon-blue font-semibold">
              Flag as Critical
            </span>
          </code>
        </div>
        <div>
          <code className="bg-dark-background/50 p-4 rounded-md block text-cyber-teal border border-gray-700 text-lg">
            IF{" "}
            <span className="text-neon-blue font-semibold">Port 22 Open</span>{" "}
            THEN{" "}
            <span className="text-neon-blue font-semibold">
              Notify Security
            </span>
          </code>
        </div>
      </div>
    </section>
  );
};

export default AutomationRules;
