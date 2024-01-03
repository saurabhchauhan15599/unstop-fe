import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Divider,
  Typography,
} from "@saurabh-chauhan/sc-components-library";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import AddAssessment from "../../components/common/AddAssessment";
import AssessmentCard from "../../components/common/AssessmentCard/AssessmentCard";
import AssessmentForm from "../../components/common/AssessmentForm/AssessmentForm";
import AssessmentOverview from "../../components/common/AssessmentOverview/AssessmentOverview";
import Modal from "../../components/common/Modal/Modal";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import { ASSESSMENT_OVERVIEW } from "../../helpers/constants";
import { IAssessmentForm, ISkills } from "../../helpers/types";
import { assessmentValidations } from "../../helpers/yup/assessment.schema";
import css from "./Dashboard.module.scss";

const Dashboard = () => {
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [assessment, setAssessment] = useState<IAssessmentForm[]>([]);
  const [open, setOpen] = useState(false);

  const assessmentForm = useForm<IAssessmentForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: yupResolver(assessmentValidations),
    defaultValues: {
      name: "",
      purpose: "",
      description: "",
      duration: "",
    },
  });

  const { handleSubmit, reset } = assessmentForm;

  const onSubmit: SubmitHandler<IAssessmentForm> = (data) => {
    const formData = { ...data, skills, time: new Date() };
    setAssessment([...assessment, formData]);
    setOpen(false);
    reset();
  };

  return (
    <div className={css.container}>
      <Sidebar activeStep={1} />
      <div className={css.primary}>
        <section className={css.rowWrapper}>
          <Typography className={css.title}>Assessment</Typography>
          <Divider className={css.divider} />
          <Typography className={css.subtitle}>My Assessments</Typography>
        </section>
        <section className={css.assessOverview}>
          <Typography className={css.heading}>Assessments Overview</Typography>
          <AssessmentOverview assessmentOverviewData={ASSESSMENT_OVERVIEW} />
        </section>
        <section className={css.colWrapper}>
          <Typography className={css.heading}>My Assessment</Typography>
          <div className={css.rowWrapper}>
            <AddAssessment onClick={() => setOpen(true)} />
            {assessment.map((val) => {
              return (
                <AssessmentCard
                  assignmentName={val.name}
                  assignmentType={val.purpose}
                  assignmentTime={"20 Apr 2023"}
                  duration={val.duration}
                  questions={"00"}
                  number={0}
                />
              );
            })}
          </div>
        </section>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          keepMounted
          header={
            <>
              <Typography className={css.title}>Create new assessment</Typography>
            </>
          }
        >
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <FormProvider {...assessmentForm}>
              <AssessmentForm skills={skills} setSkills={setSkills} />
            </FormProvider>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Dashboard;
