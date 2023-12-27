import React from "react";
import { SVGProps } from "../../helpers/types";

const UploadAddIcon: React.FC<SVGProps> = ({ ...props }) => {
  return (
    <svg
      width="51"
      height="50"
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="0.5" width="50" height="50" rx="25" fill="white" />
      <g clip-path="url(#clip0_0_1336)">
        <path
          d="M33.8333 26.1905H26.6904V33.3334H24.3095V26.1905H17.1666V23.8095H24.3095V16.6667H26.6904V23.8095H33.8333V26.1905Z"
          fill="#0073E6"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1336">
          <rect
            width="28.5714"
            height="28.5714"
            fill="white"
            transform="translate(11.2142 10.7143)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UploadAddIcon;
