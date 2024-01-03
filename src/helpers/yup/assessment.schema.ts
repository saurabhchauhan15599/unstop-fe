import * as yup from "yup";

export const assessmentValidations = yup.object().shape({
  name: yup.string().required("Field is required!"),
  purpose:yup.string().required("Field is required!"),
  description: yup.string().required("Field is required!"),
  duration: yup.string().required("Field is required!"),
});
