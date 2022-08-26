import { Col, Row } from "antd";
import MenuBar from "../../component/navBar/MenuBar";
import SideBarMenu from "../../component/sideBar_menu/SideBarMenu";
import styles from "../../styles/layout.module.css";
import { useSelector } from "react-redux";
const MainLayoute = ({ children }) => {
  const { coollapse } = useSelector((stae) => stae.collapse);

  return (
    <div>
      <MenuBar />
      <Row>
        {coollapse ? (
          <Col xs={24} md={2}>
            <SideBarMenu />
          </Col>
        ) : (
          <Col xs={24} md={5}>
            <SideBarMenu />
          </Col>
        )}
        {coollapse ? (
          <Col xs={24} md={22}>
            <div className={styles.container}>{children}</div>
          </Col>
        ) : (
          <Col xs={24} md={19}>
            <div className={styles.container}>{children}</div>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default MainLayoute;
