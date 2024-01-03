import AdminMedsIcon from "../assets/icons/AdminMedsIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import GlobeRedIcon from "../assets/icons/GlobeRedIcon";
import NoteIcon from "../assets/icons/NoteIcon";
import PeopleIcon from "../assets/icons/PeopleIcon";
import QuizIcon from "../assets/icons/QuizIcon";
import ViewAgendaIcon from "../assets/icons/ViewAgendaIcon";

export const primarySideBarContents = [
  { title: "Dashboard", icon: DashboardIcon, status: null },
  { title: "Assessment", icon: NoteIcon, status: null },
  { title: "My Library", icon: QuizIcon, status: null },
];

export const secondarySideBarContents = [
  {
    title: "Round Status",
    icon: AdminMedsIcon,
    statusText: "Admin",
    status: "Error",
  },
];

export const assignmentContents = [
  {
    assignmentName: "Math Assessment",
    assignmentType: "Job",
    assignmentTime: "20 Apr 23",
    duration: "00",
    questions: "00",
    number: 1,
  },
  {
    assignmentName: "Math Assessment",
    assignmentType: "Job",
    assignmentTime: "20 Apr 23",
    duration: "00",
    questions: "00",
    number: 324,
  },
  {
    assignmentName: "Math Assessment",
    assignmentType: "Job",
    assignmentTime: "20 Apr 23",
    duration: "00",
    questions: "00",
    number: 324090,
  },
  {
    assignmentName: "Math Assessment",
    assignmentType: "Job",
    assignmentTime: "20 Apr 23",
    duration: "00",
    questions: "00",
    number: 2,
  },
];

export const PURPOSE_DROPDOWN = [
  { id: 1, label: "Job", value: "Job" },
  { id: 2, label: "Self", value: "Self" },
  { id: 3, label: "Others", value: "Others" },
];

export const ASCII_KEYS = {
  backspace: "Backspace",
  arrowRight: "ArrowRight",
  arrowLeft: "ArrowLeft",
  arrowUp: "ArrowUp",
  arrowDown: "ArrowDown",
  space: "Space",
  escape: "Escape",
  enter: "Enter",
};

export const DIGIT_REGEX = new RegExp(/^\d+$/);

export const ASSESSMENT_OVERVIEW = [
  {
    Icon: ViewAgendaIcon,
    title: "Total Assessment",
    secondaryCount: 0,
    primaryCount: 34,
    subTitle: "",
  },
  {
    Icon: PeopleIcon,
    title: "Candidates",
    secondaryCount: 89,
    primaryCount: 11145,
    subTitle: "Total Candidates",
  },
  {
    secondaryCount: 89,
    primaryCount: 114,
    subTitle: "Who Attempted",
  },
  {
    Icon: GlobeRedIcon,
    title: "Candidates Source",
    secondaryCount: 11000,
    primaryCount: 89,
    subTitle: "E-mail",
  },
  {
    primaryCount: 145,
    secondaryCount: 89,
    subTitle: "Social Share",
  },
  {
    primaryCount: 145,
    secondaryCount: 89,
    subTitle: "Unique Link",
  },
  {
    Icon: NoteIcon,
    title: "Total Purpose",
    secondaryCount: 0,
    primaryCount: 11,
    subTitle: "E-mail",
  },
];
