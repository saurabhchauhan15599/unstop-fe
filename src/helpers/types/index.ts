export type SVGProps = JSX.IntrinsicElements["svg"];

export type IIcon = React.FC<React.SVGProps<SVGSVGElement>>;

export interface IAssessmentOverview {
  title: string;
  Icon?: IIcon;
  primaryCount: number;
  secondaryCount?: number;
  subTitle?: string;
}

export interface IAssessmentForm {
  name: string,
  purpose: string,
  description: string,
  skills: string,
  duration: string,
}

export interface ISkills {
  name: string
  id: string
}