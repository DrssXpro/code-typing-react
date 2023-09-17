import { message } from "antd";
import menus from "@/config/nav-config";
import styles from "./navMenu.module.scss";

const NavMenu = () => (
  <div className={styles["nav-menu-container"]}>
    {menus.map((i, index) => (
      <div className={styles["nav-item"]} key={index} onClick={() => message.warning("线上项目展示暂无该功能")}>
        {i.text}
      </div>
    ))}
    <div className={styles["nav-item"]}></div>
  </div>
);

export default NavMenu;
