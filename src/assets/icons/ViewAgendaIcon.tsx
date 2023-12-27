import React from "react";
import { SVGProps } from "../../helpers/types";

const ViewAgendaIcon: React.FC<SVGProps> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="view_agenda" clip-path="url(#clip0_0_483)">
        <path
          id="Vector"
          d="M15.8333 4.16667V7.5H3.33332V4.16667H15.8333ZM15.8333 12.5V15.8333H3.33332V12.5H15.8333ZM16.6667 2.5H2.49999C2.04166 2.5 1.66666 2.875 1.66666 3.33333V8.33333C1.66666 8.79167 2.04166 9.16667 2.49999 9.16667H16.6667C17.125 9.16667 17.5 8.79167 17.5 8.33333V3.33333C17.5 2.875 17.125 2.5 16.6667 2.5ZM16.6667 10.8333H2.49999C2.04166 10.8333 1.66666 11.2083 1.66666 11.6667V16.6667C1.66666 17.125 2.04166 17.5 2.49999 17.5H16.6667C17.125 17.5 17.5 17.125 17.5 16.6667V11.6667C17.5 11.2083 17.125 10.8333 16.6667 10.8333Z"
          fill="#6548EE"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_483">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ViewAgendaIcon;
