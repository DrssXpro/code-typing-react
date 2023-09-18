import { useRef } from "react";
import { Button } from "antd";
import TypingCount from "./components/TypingCount";
import CodeModal, { type modalType } from "./components/CodeModal";
import styles from "./typing.module.scss";
import codeList from "@/config/code-config";
const Typing = () => {
  const modalRef = useRef<modalType>(null);

  const showModal = () => {
    modalRef.current?.controllModal(true);
  };
  return (
    <div className={styles["typing-container"]}>
      {/* 打字数据统计 */}
      <TypingCount />
      <Button type="primary" onClick={showModal}>
        show
      </Button>
      <CodeModal ref={modalRef} codeDetail={codeList[0]} />
    </div>
  );
};

export default Typing;
