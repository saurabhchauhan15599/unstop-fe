/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AlertErrorIcon,
  Chip,
  SelectLabel,
  TextField,
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
  const { control, setValue: setPurposeValue } = useFormContext();

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
          />
        )}
      />
      <Controller
        name="purpose"
        control={control}
        render={({ field, fieldState }) => (
          <SelectLabel
            {...field}
            value={{
              label: field.value,
              value: field.value,
            }}
            required
            label="Purpose of the test is"
            placeholder="select"
            options={PURPOSE_DROPDOWN}
            onChange={(newValue: any) =>
              setPurposeValue("purpose", newValue.value)
            }
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
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
          />
        )}
      />
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
        <Controller
          name="skills"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              required
              label="Skills"
              placeholder="type"
              onKeyDown={handleKeyDown}
              helperText={fieldState.error?.message}
              endIcon={fieldState.invalid && <AlertErrorIcon />}
            />
          )}
        />
      </section>

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
          />
        )}
      />
    </div>
  );
};

export default AssessmentForm;
