import React from "react";

const ThreatsIcon = ({
  color = "currentColor",
  className = "",
}) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L1 21H23L12 2ZM13 8V14H11V8H13ZM13 16V18H11V16H13Z"
      fill={color}
    />
  </svg>
);

export default ThreatsIcon;
