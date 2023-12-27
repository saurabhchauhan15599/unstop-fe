import React from "react";
import css from "./sidebar.module.scss";
import {
  CrossBlackIcon,
  Typography,
} from "@saurabh-chauhan/sc-components-library";
import {
  primarySideBarContents,
  secondarySideBarContents,
} from "../../../helpers/constants";
import DottedIcon from "../../../assets/icons/DottedIcon";
import { Chip } from "@mui/material";

interface ISidebar {
  activeStep: number;
  handleClick?: () => void;
}

const Sidebar: React.FC<ISidebar> = ({ activeStep, handleClick }) => {
  return (
    <div className={css.container}>
      <section className={css.menu}>
        <Typography className={css.text}>Menu</Typography>
        <CrossBlackIcon color={"#1C4980"} />
      </section>
      <section className={css.primaryContents}>
        {primarySideBarContents.map((val, index) => {
          return (
            <section
              onClick={handleClick}
              className={[
                css.content,
                activeStep === index ? css.active : "",
              ].join(" ")}
              key={index}
            >
              <val.icon />
              <Typography className={css.text}>{val.title}</Typography>
            </section>
          );
        })}
      </section>
      <DottedIcon />
      <section className={css.secondaryContents}>
        {secondarySideBarContents.map((val, index) => {
          return (
            <section className={css.content} key={index} onClick={handleClick}>
              <val.icon />
              <Typography className={css.text}>{val.title}</Typography>
              <Chip label={val.statusText} color="error" />
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Sidebar;
