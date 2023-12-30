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

interface AssignmentTypes {
  assignmentName: string;
  assignmentType: string;
  assignmentTime: string;
  duration: string;
  questions: string;
  number: number;
}

const AssessmentCard: React.FC<AssignmentTypes> = ({
  assignmentName,
  assignmentTime,
  assignmentType,
  duration,
  questions,
  number,
}) => {
  return (
    <div className={css.wrapper}>
      <section className={css.subWrapper}>
        <div className={css.primaryWrapper}>
          <BagIcon />
          <div className={css.primary}>
            <Typography className={css.primaryText}>
              {assignmentName}
            </Typography>
            <div className={css.upper}>
              <Typography className={css.primaryText}>
                {assignmentType}
              </Typography>
              <Divider className={css.divider} />
              <div className={css.schedule}>
                <ScheduleIcon />
                <Typography className={css.secondaryText}>
                  {assignmentTime}
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <VerticalDots />
      </section>
      <DottedIcon width={300} />
      <section className={css.secondary}>
        <div className={css.secondarySubWrapper}>
          <Typography className={css.primaryText}>{duration}</Typography>
          <Typography className={css.primaryText}>Duration</Typography>
        </div>
        <div className={css.secondarySubWrapper}>
          <Typography className={css.primaryText}>{questions}</Typography>
          <Typography className={css.primaryText}>Questions</Typography>
        </div>
        <div>
          <Chip
            label={
              <React.Fragment>
                <ClipIcon />
                <Typography className={css.primaryText}>Share</Typography>
              </React.Fragment>
            }
          />
        </div>
        <Avatar src={"LP"} alt={"LP"} />
        <Typography className={css.primaryText}>+{number}</Typography>
      </section>
    </div>
  );
};

export default AssessmentCard;
