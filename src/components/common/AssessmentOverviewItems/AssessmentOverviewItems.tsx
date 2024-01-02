import { Divider, Typography } from "@saurabh-chauhan/sc-components-library";
import React from "react";
import { IAssessmentOverview } from "../../../helpers/types";
import css from "./AssessmentOverviewItems.module.scss";

interface IAssessData {
  data: IAssessmentOverview[];
}

const AssessmentOverviewItems: React.FC<IAssessData> = ({ data }) => {
  return (
    <>
      {data.map((val, index) => {
        return (
          <section className={css.wrapper} key={index}>
            <div className={css.primaryWrapper}>
              <Typography className={css.secondaryText}>{val.title}</Typography>
              <div className={css.total}>
                {val.Icon && <val.Icon />}
                <section className={css.column}>
                  <section className={css.row}>
                    <Typography className={css.primaryText}>
                      {val.primaryCount}
                    </Typography>
                    <Typography className={css.greenText}>
                      +{val.secondaryCount}
                    </Typography>
                  </section>
                  <Typography className={css.tertiaryText}>
                    {val.subTitle}
                  </Typography>
                </section>
              </div>
            </div>
            {data.length > 1 && index < data.length - 1 && (
              <Divider className={css.divider} />
            )}
          </section>
        );
      })}
    </>
  );
};

export default AssessmentOverviewItems;
