import FsIcon from "@/components/FsIcon/FsIcon";
import styles from "./styles/typingCount.module.scss";
const TypingCount = () => {
  return (
    <div className={styles["typing-count-container"]}>
      <div className={styles["count-item"]}>
        <div className={styles["status"]}></div>
        <div className={styles["data"]}>打字中</div>
      </div>
      <div className={styles["count-item"]}>
        <FsIcon name="clock" size={25} />
        <div className={styles["data"]}>100</div>
      </div>
      <div className={styles["count-item"]}>
        <FsIcon name="rate" size={18} />
        <div className={styles["data"]}>15%</div>
      </div>
      <div className={styles["count-item"]}>
        <FsIcon name="wrong" size={19} />
        <div className={styles["data"]}>45</div>
      </div>
      <div className={styles["count-item"]}>
        <FsIcon name="speed" size={23} />
        <div className={styles["data"]}>100 字符/分钟</div>
      </div>
    </div>
  );
};

export default TypingCount;
