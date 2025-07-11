import React from "react";

const AutomationIcon = ({
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
      d="M19 12H22V17H19V12ZM19 7H22V10H19V7ZM17 2H7C4.79 2 3 3.79 3 6V18C3 20.21 4.79 22 7 22H17C19.21 22 21 20.21 21 18V6C21 3.79 19.21 2 17 2ZM17 18H7V6H17V18Z"
      fill={color}
    />
  </svg>
);

export default AutomationIcon;
