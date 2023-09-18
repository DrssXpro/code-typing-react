import { forwardRef, useImperativeHandle, useState } from "react";
import { Modal } from "antd";
import styles from "./styles/codeModal.module.scss";
import { ICodeDetail } from "@/config/code-config";
import FsCode from "@/components/FsCode/FsCode";

interface ICodeModalProps {
  codeDetail: ICodeDetail;
}

export interface modalType {
  controllModal: (show: boolean) => void;
}

const CodeModal = forwardRef((props: ICodeModalProps, ref) => {
  const { title, author, lines, charCount, lan, challengeCount, fastTime, mostRate, content } = props.codeDetail;
  const [open, setOpen] = useState(false);

  const controllModal = (show: boolean) => {
    setOpen(show);
  };

  useImperativeHandle(ref, () => ({ controllModal } as modalType), []);

  return (
    <Modal
      className={styles["code-modal"]}
      open={open}
      onCancel={() => controllModal(false)}
      footer={null}
      title="代码详情"
    >
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
        <div className={styles["high-code"]}>
          <FsCode code={content} />
        </div>
      </div>
    </Modal>
  );
});

export default CodeModal;
