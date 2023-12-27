import React from "react";
import { SVGProps } from "../../helpers/types";

const DashboardIcon: React.FC<SVGProps> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <g id="dashboard" clip-path="url(#clip0_0_1620)">
        <path
          id="Vector"
          d="M15.8333 4.16667V5.83333H12.5V4.16667H15.8333ZM7.5 4.16667V9.16667H4.16667V4.16667H7.5ZM15.8333 10.8333V15.8333H12.5V10.8333H15.8333ZM7.5 14.1667V15.8333H4.16667V14.1667H7.5ZM17.5 2.5H10.8333V7.5H17.5V2.5ZM9.16667 2.5H2.5V10.8333H9.16667V2.5ZM17.5 9.16667H10.8333V17.5H17.5V9.16667ZM9.16667 12.5H2.5V17.5H9.16667V12.5Z"
          fill="#1C4980"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1620">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DashboardIcon;
