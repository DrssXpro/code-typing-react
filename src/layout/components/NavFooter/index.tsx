import FsIcon from "@/components/FsIcon/FsIcon";
import styles from "./navFooter.module.scss";
const NavFooter = () => (
  <div className={styles["nav-footer-container"]}>
    <a href="https://github.com/DrssXpro" target="_blank" className={styles["icon"]}>
      <FsIcon name="github" size={20} />
    </a>
    <a href="https://space.bilibili.com/18125345" target="_blank" className={styles["icon"]}>
      <FsIcon name="bilibili" size={20} />
    </a>
    <a className={styles["desc"]} href="https://beian.miit.gov.cn/" target="_blank">
      Copyrigth @2023 Code Space 豫ICP备2022015682号-01
    </a>
  </div>
);
export default NavFooter;
