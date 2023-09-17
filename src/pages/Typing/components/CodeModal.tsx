import { FC, useState } from "react";
import { Modal } from "antd";
import styles from "./styles/typingCount.module.scss";
import { ICodeDetail } from "@/config/code-config";

interface ICodeModalProps {
  codeDetail: ICodeDetail;
}

const CodeModal: FC<ICodeModalProps> = (props: ICodeModalProps) => {
  const { title, author, lines, charCount, lan, challengeCount, fastTime, mostRate } = props.codeDetail;
  const [open] = useState(false);
  return (
    <Modal className={styles["code-modal"]} open={open} footer={null} title="代码详情">
      <div className={styles["code-content"]}>
        <div className={styles["info-title"]}>
          <span>
            {title} -- <span style={{ fontWeight: "normal" }}>{author}</span>
          </span>
        </div>
        <div className={styles["info-detail"]}>
          <div className={styles["info-item"]}>
            <div className={styles["title"]}>代码行数</div>
            <div className={styles["count"]}>{lines}</div>
          </div>
          <div className={styles["info-item"]}>
            <div className={styles["title"]}>字符数量</div>
            <div className={styles["count"]}>{charCount}</div>
          </div>
          <div className={styles["info-item"]}>
            <div className={styles["title"]}>编程语言</div>
            <div className={styles["count"]}>{lan}</div>
          </div>
          <div className={styles["info-item"]}>
            <div className={styles["title"]}>已挑战人数</div>
            <div className={styles["count"]}>{challengeCount}</div>
          </div>
          <div className={styles["info-item"]}>
            <div className={styles["title"]}>最快完成时间</div>
            <div className={styles["count"]}>{fastTime}</div>
          </div>
          <div className={styles["info-item"]}>
            <div className={styles["title"]}>最高正确率</div>
            <div className={styles["count"]}>{mostRate}</div>
          </div>
        </div>
        <div className={styles["high-code"]}></div>
      </div>
    </Modal>
  );
};

export default CodeModal;
