import React from "react";

const ZeroBlindEyeIcon = ({
  color = "#00F0FF",
  className = "",
}) => (
  <svg
    className={className}
    width="30"
    height="24"
    viewBox="0 0 30 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 20C19.4183 20 23 16.4183 23 12C23 7.58172 19.4183 4 15 4C10.5817 4 7 7.58172 7 12C7 16.4183 10.5817 20 15 20Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12C7 4 23 4 27 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="15" cy="12" r="3" fill={color} />
  </svg>
);

export default ZeroBlindEyeIcon;
