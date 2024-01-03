/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertErrorIcon,
  Chip,
  SelectLabel,
  TextField,
  Typography,
} from "@saurabh-chauhan/sc-components-library";
import { Controller, useFormContext } from "react-hook-form";
import { v4 } from "uuid";
import { ASCII_KEYS, PURPOSE_DROPDOWN } from "../../../helpers/constants";
import { ISkills } from "../../../helpers/types";
import css from "./AssessmentForm.module.scss";

interface IAssessment {
  skills: ISkills[];
  value?: string;
  setValue?: (value: string) => void;
  setSkills: (skills: ISkills[]) => void;
}

const AssessmentForm: React.FC<IAssessment> = ({ skills, setSkills }) => {
  const { control, setValue: setPurposeValue, clearErrors } = useFormContext();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.currentTarget as HTMLInputElement;
    const value = target.value;
    const { enter } = ASCII_KEYS;

    switch (event.key) {
      case enter:
        event.preventDefault();
        setSkills([...skills, { name: value, id: v4() as string }]);
        break;
      default:
        break;
    }
  };

  const handleClose = (index: string) => {
    if (index) {
      const deletedEle = skills.filter((val) => val.id !== index);
      setSkills(deletedEle);
    }
  };

  return (
    <div className={css.container}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            required
            label="Name of assessment"
            placeholder="Type here"
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
            endIcon={fieldState.invalid && <AlertErrorIcon />}
            rootClassName={css.text}
          />
        )}
      />
      <Controller
        name="purpose"
        control={control}
        render={({ field, fieldState }) => (
          <SelectLabel
            {...field}
            value={
              field.value ? { label: field.value, value: field.value } : ""
            }
            required
            label="Purpose of the test is"
            placeholder="Select..."
            options={PURPOSE_DROPDOWN}
            onChange={(newValue: any) => {
              setPurposeValue("purpose", newValue.value);
              clearErrors("purpose");
            }}
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
            rootClassName={css.text}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            required
            label="Description"
            placeholder="type here"
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
            endIcon={fieldState.invalid && <AlertErrorIcon />}
            rootClassName={css.text}
          />
        )}
      />
      <div>
        <Typography className={css.text}>
          <span>Skills</span>
        </Typography>
        <section className={css.wrapper}>
          <div className={css.chips}>
            {skills.map((val) => {
              return (
                <Chip
                  itemType="Button"
                  label={val.name}
                  key={val.id}
                  showCloseIcon
                  onClose={() => handleClose(val.id)}
                />
              );
            })}
          </div>
          <TextField required placeholder="type" onKeyDown={handleKeyDown} />
        </section>
      </div>

      <Controller
        name="duration"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            required
            label="Duration of assessment"
            placeholder="HH:MM:SS"
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
            endIcon={fieldState.invalid && <AlertErrorIcon />}
            rootClassName={css.text}
          />
        )}
      />
    </div>
  );
};

export default AssessmentForm;
