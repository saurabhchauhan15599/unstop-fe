import React from "react";
import { SVGProps } from "../../helpers/types";

const DottedIcon: React.FC<SVGProps> = ({ width = "275", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="2"
      viewBox="0 0 275 2"
      fill="none"
      {...props}
    >
      <path d="M0 1H275" stroke="#BACBD5" stroke-dasharray="2 2" />
    </svg>
  );
};

export default DottedIcon;
