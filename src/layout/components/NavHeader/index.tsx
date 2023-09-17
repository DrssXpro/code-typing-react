import styles from "./navHeader.module.scss";
import classNames from "classnames";

const NavHeader = () => {
  const isNew = false;
  return (
    <div className={styles["nav-header-container"]}>
      <div className={styles["left-content"]}>
        <div className={styles["logo"]}>
          <div className={styles["title"]}>Code Typing</div>
          <div className={styles["desc"]}>一个属于程序员代码打字练习工具</div>
          <div className={styles["change-tab"]}>
            <div
              className={classNames({
                [styles["change-item"]]: true,
                [styles["change-active"]]: isNew,
              })}
              title="打字进行优化"
            >
              优化版
            </div>
            <div
              className={classNames({
                [styles["change-item"]]: true,
                [styles["change-active"]]: !isNew,
              })}
              title="性能较差"
            >
              旧版
            </div>
            <div className={styles["change-item"]} title="性能较差">
              每日排行
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
