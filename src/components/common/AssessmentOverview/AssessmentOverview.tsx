import React from "react";
import css from "./AssessmentOverview.module.scss";
import { Typography } from "@saurabh-chauhan/sc-components-library";
import DashboardIcon from "../../../assets/icons/DashboardIcon";

const AssessmentOverview: React.FC = () => {
  return (
    <div className={css.container}>
      <Typography>Assessments Overview</Typography>
      <section className={css.wrapper}>
        <div className={css.primaryWrapper}>
          <Typography>Total Assessment</Typography>
          <div className={css.total}>
            <DashboardIcon />
            <Typography>34</Typography>
          </div>
        </div>
        <div className={css.primaryWrapper}>
          <Typography>Total Assessment</Typography>
          <div className={css.total}>
            <DashboardIcon />
            <Typography>34</Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssessmentOverview;
