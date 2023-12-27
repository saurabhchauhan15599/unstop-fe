import { Typography } from "@saurabh-chauhan/sc-components-library";
import UploadAddIcon from "../../../assets/icons/UploadAddIcon";
import css from "./index.module.scss";

interface UploadDocumentProps {
  onClose?: () => void;
}

const AddAssessment: React.FC<UploadDocumentProps> = () => {
  return (
    <div className={css.wrapper}>
      <section className={css.primary}>
        <UploadAddIcon />
        <Typography className={css.text}>New Assessment</Typography>
      </section>
      <section className={css.secondary}>
        <Typography className={css.subText}>
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </Typography>
      </section>
    </div>
  );
};

export default AddAssessment;