import TypingCount from "./components/TypingCount";
import styles from "./typing.module.scss";
const Typing = () => (
  <div className={styles["typing-container"]}>
    {/* 打字数据统计 */}
    <TypingCount />
  </div>
);

export default Typing;
