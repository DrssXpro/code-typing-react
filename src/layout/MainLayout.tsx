import { Outlet } from "react-router-dom";
import NavHeader from "./components/NavHeader";
import NavMenu from "./components/NavMenu";
import styles from "./mainLayout.module.scss";
import NavFooter from "./components/NavFooter";

const MainLayout = () => (
  <div className={styles["layout-container"]}>
    <div className={styles["nav-header"]}>
      <NavHeader />
    </div>

    <div className={styles["nav-content"]}>
      <Outlet />
    </div>
    <div className={styles["nav-footer"]}>
      <NavFooter />
    </div>

    <NavMenu />

    {/* <user-count-modal ref="userModalRef" /> */}
  </div>
);

export default MainLayout;
