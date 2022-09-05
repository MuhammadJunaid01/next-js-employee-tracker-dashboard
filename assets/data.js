import Link from "next/link";
import profileImg from "../public/empolyee.jpg";
import {
  FaAddressCard,
  FaUserTie,
  FaUnlockAlt,
  FaSketch,
} from "react-icons/fa";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  UserSwitchOutlined,
  CodepenCircleOutlined,
  WechatOutlined,
  PieChartOutlined,
  UsergroupAddOutlined,
  DatabaseOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import Button from "../shared/Button";
import Employee from "../component/profile/Employee";
import Projects from "../component/projects/Projects";
import BankStateMent from "../component/bankStateMent/BankStateMent";
import Task from "../component/task/Task";
function getItem(label, key, icon, children, type, fn) {
  return {
    key,
    icon,
    children,
    label,
    type,
    fn,
  };
}

export const items = [
  getItem(
    <Button name="Dashboard" link="dashboard" />,
    "1",
    <PieChartOutlined />
  ),

  getItem("Employees", "sub1", <CodepenCircleOutlined />, [
    getItem(
      <Link href="/allEmployees">
        <a>All Employees</a>
      </Link>,
      "5"
    ),
    getItem(
      <Link href="/holyDays">
        <a>Holy Days</a>
      </Link>,
      "6"
    ),
    getItem(
      <Link href="/leavsEmploy">
        <a>Leaves(Employee)</a>
      </Link>,
      "7"
    ),
    getItem(
      <Link href="/attendence">
        <a>Attendence(Employee)</a>
      </Link>,
      "8"
    ),
    getItem(
      <Link href="/timeShift">
        <a>TimeShift</a>
      </Link>,
      "9"
    ),
    getItem(
      <Link href="/schedule">
        <a>Shift&Schedule</a>
      </Link>,
      "10"
    ),
    getItem(
      <Link href="/overTime">
        <a>Over Time</a>
      </Link>,
      "11"
    ),
  ]),
  getItem(
    <Button name="Clients" link="clients" />,
    "12",
    <UsergroupAddOutlined />
  ),

  getItem("Projects", "sub2", <FaAddressCard />, [
    getItem(
      <Link href="/project">
        <a>Projects</a>
      </Link>,
      "13"
    ),
    getItem(<Button name="Task" link="task" />, "14"),
    getItem(
      <Link href="/taskBoard">
        <a>Tasks Board</a>
      </Link>,
      "15"
    ),
    getItem(
      <Link href="/lead">
        <a>Lead</a>
      </Link>,
      "16"
    ),
  ]),
  getItem("Pages", "sub3", <ContainerOutlined />, [
    getItem("Profile", "sub4", <FaUserTie />, [
      getItem(<Button name="Clients Profile" link="allEmployees" />, "17"),
      getItem(<Button name="Employee Profile" link="employeProfile" />, "18"),
    ]),
    getItem("Authentication", "sub5", <FaUnlockAlt />, [
      getItem(<Button name="Login" link="login" />, "19"),
      getItem(<Button name="Register" link="register" />, "20"),
    ]),
  ]),
  getItem("Apps", "sub6", <FaSketch />, [
    getItem(<Button name="Chat" link="chat" />, "21"),
    getItem(<Button name="Calendar" link="calendar" />, "22"),
  ]),
];

// EMPLOYEE PROFILE DATA

export const employeeProfileData = [
  {
    name: "Muhammad Junaid",
    profileImg: profileImg,
    title: "frontEndDeveloper",
    employeeId: "00134",
    joiningDate: "1st Jan 2022",
    phone: "01634900664",
    email: "m.junaidbkh@gmail.com",
    birthDay: "02/07/1998",
    address: "110 bahaddar Hat,chittgong",
    gender: "MALE",
    profileDetails: [
      {
        passport: "01873263656526",
        passportExp: "74676436",
        phone: "+8801634900664",
        nattionality: "Bangladeshi",
        religion: "ISLAM",
        maritalStatus: "unMarried",
      },
    ],
    emerGencyContact: [
      {
        name: "jhon Doe",
        rela: "Father",
        phone: "879337783783",
        scNmae: "Kelvin",
        scRela: "Brother",
        scPhone: "873876672786653",
      },
    ],
    bankInfo: [{ bankName: "ICB BANK", acc: "8378726365263567678" }],
    experience: [
      {
        first: "FronEnd Developer",
        firstjobDate: "Jan 2013  - Dec 2018(5 years)",
        secound: "React Developer",
        secoundjobDate: "Jan 2018 - July 2020(2 years)",
        third: "Full Stack Developer",
        thirdjobDate: "July 2020 -- Present(2 years)",
      },
    ],
  },
];

export const tabsData = [
  { name: "Profile", to: "profile", comp: <Employee /> },
  { name: "Project", to: "project", comp: <Projects /> },
  { name: "Task", to: "task", comp: <Task isTask={true} /> },
  {
    name: "Bank & Statutory (Admin Only)",
    to: "project",
    comp: <BankStateMent />,
  },
];
