import {
  Avatar,
  Chip,
  Divider,
  Typography,
} from "@saurabh-chauhan/sc-components-library";
import React from "react";
import BagIcon from "../../../assets/icons/BagIcon";
import ClipIcon from "../../../assets/icons/ClipIcon";
import DottedIcon from "../../../assets/icons/DottedIcon";
import ScheduleIcon from "../../../assets/icons/ScheduleIcon";
import VerticalDots from "../../../assets/icons/VerticalDots";
import css from "./AssessmentCard.module.scss";

const AssessmentCard: React.FC = () => {
  return (
    <div className={css.wrapper}>
      <section className={css.subWrapper}>
        <div className={css.primaryWrapper}>
          <BagIcon />
          <div className={css.primary}>
            <Typography>Math Assessment</Typography>
            <div className={css.abc}>
              <Typography>Job</Typography>
              <Divider className={css.divider} />
              <div className={css.schedule}>
                <ScheduleIcon />
                <Typography>20 Apr 23</Typography>
              </div>
            </div>
          </div>
        </div>
        <VerticalDots />
      </section>
      <DottedIcon />
      <section className={css.secondary}>
        <div>
          <Typography>00</Typography>
          <Typography>Duration</Typography>
        </div>
        <div>
          <Typography>00</Typography>
          <Typography>Questions</Typography>
        </div>
        <div>
          <Chip
            label={
              <>
                <ClipIcon />
                Share
              </>
            }
          />
        </div>
        <div>
          <Avatar src={"LP"} alt={"LP"} />
        </div>
      </section>
    </div>
  );
};

export default AssessmentCard;
