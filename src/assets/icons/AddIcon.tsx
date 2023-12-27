import React from "react";
import { SVGProps } from "../../helpers/types";

const AddIcon: React.FC<SVGProps> = ({ ...props }) => {
  return (
    <svg
      width="29"
      height="30"
      viewBox="0 0 29 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="add" clip-path="url(#clip0_0_1337)">
        <path
          id="Vector"
          d="M22.8333 16.1905H15.6904V23.3334H13.3095V16.1905H6.16663V13.8095H13.3095V6.66669H15.6904V13.8095H22.8333V16.1905Z"
          fill="#0073E6"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1337">
          <rect
            width="28.5714"
            height="28.5714"
            fill="white"
            transform="translate(0.214233 0.714294)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AddIcon;
