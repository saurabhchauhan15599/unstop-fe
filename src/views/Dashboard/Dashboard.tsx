import { Button } from "@saurabh-chauhan/sc-components-library";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import AssessmentForm from "../../components/common/AssessmentForm/AssessmentForm";
import { IAssessmentForm, ISkills } from "../../helpers/types";

const Dashboard = () => {
  const [skills, setSkills] = useState<ISkills[]>([]);
  const assessmentForm = useForm<IAssessmentForm>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    // resolver: yupResolver(),
    defaultValues: {
      name: "",
      purpose: "",
      description: "",
      skills: "",
      duration: "",
    },
  });

  const { handleSubmit } = assessmentForm;

  const onSubmit: SubmitHandler<IAssessmentForm> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...assessmentForm}>
          <AssessmentForm skills={skills} setSkills={setSkills} />
        </FormProvider>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default Dashboard;
