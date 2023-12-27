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
