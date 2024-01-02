import AdminMedsIcon from "../assets/icons/AdminMedsIcon";
import DashboardIcon from "../assets/icons/DashboardIcon";
import NoteIcon from "../assets/icons/NoteIcon";
import QuizIcon from "../assets/icons/QuizIcon";

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
]

export const ASCII_KEYS = {
  backspace: 'Backspace',
  arrowRight: 'ArrowRight',
  arrowLeft: 'ArrowLeft',
  arrowUp: 'ArrowUp',
  arrowDown: 'ArrowDown',
  space: 'Space',
  escape: 'Escape',
  enter: 'Enter',
};

export const DIGIT_REGEX = new RegExp(/^\d+$/);
