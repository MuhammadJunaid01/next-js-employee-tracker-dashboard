import Link from "next/link";
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
const Button = ({ name, link }) => {
  return (
    <div style={{ display: "flex" }}>
      <Link href={`/${link}`}>
        <a style={{ color: "white" }}>{name}</a>
      </Link>
    </div>
  );
};
export const items = [
  getItem(<Button name="Dashboard" link="/" />, "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
  getItem("Employees", "sub1", <CodepenCircleOutlined />, [
    getItem(
      <Link href="/allEmployees">
        <a>All Employees</a>
      </Link>,
      "5"
    ),
    getItem(
      <Link href="/">
        <a>Holy Days</a>
      </Link>,
      "6"
    ),
    getItem(
      <Link href="/">
        <a>Leaves(Employee)</a>
      </Link>,
      "7"
    ),
    getItem(
      <Link href="/">
        <a>Attendence(Employee)</a>
      </Link>,
      "8"
    ),
    getItem(
      <Link href="/">
        <a>TimeShift</a>
      </Link>,
      "9"
    ),
    getItem(
      <Link href="/">
        <a>Shift&Schedule</a>
      </Link>,
      "10"
    ),
    getItem(
      <Link href="/">
        <a>Over Time</a>
      </Link>,
      "11"
    ),
  ]),
  getItem(<Button name="Clients" link="/" />, "12", <UsergroupAddOutlined />),

  getItem("Projects", "sub2", <FaAddressCard />, [
    getItem(
      <Link href="/">
        <a>Projects</a>
      </Link>,
      "13"
    ),
    getItem(<Button name="Clients" link="task" />, "14"),
    getItem(
      <Link href="/">
        <a>Tasks Board</a>
      </Link>,
      "15"
    ),
    getItem(
      <Link href="/">
        <a>Lead</a>
      </Link>,
      "16"
    ),
  ]),
  getItem("Pages", "sub3", <ContainerOutlined />, [
    getItem("Profile", "sub4", <FaUserTie />, [
      getItem(<Button name="Clients Profile" link="allEmployees" />, "17"),
      getItem(<Button name="Employee Profile" link="/" />, "18"),
    ]),
    getItem("Authentication", "sub5", <FaUnlockAlt />, [
      getItem(<Button name="Login" link="login" />, "19"),
      getItem(<Button name="Register" link="/" />, "20"),
    ]),
  ]),
  getItem("Apps", "sub6", <FaSketch />, [
    getItem(<Button name="Chat" link="chat" />, "21"),
    getItem(<Button name="Calendar" link="calendar" />, "22"),
  ]),
];
