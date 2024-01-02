import React from "react";
import css from "./AssessmentOverview.module.scss";
import AssessmentOverviewItems from "../AssessmentOverviewItems/AssessmentOverviewItems";
import { IAssessmentOverview } from "../../../helpers/types";

interface IAssessmentOverviewWrapper {
  assessmentOverviewData: IAssessmentOverview[];
}

const AssessmentOverview: React.FC<IAssessmentOverviewWrapper> = ({
  assessmentOverviewData,
}) => {
  return (
    <div
      className={[
        css.container,
        assessmentOverviewData.length <= 1 ? css.single : "",
        assessmentOverviewData.length > 1 ? css.multiple : "",
      ].join(" ")}
    >
      <AssessmentOverviewItems data={assessmentOverviewData} />
    </div>
  );
};

export default AssessmentOverview;
