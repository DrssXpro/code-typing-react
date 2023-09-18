import { type RefObject, forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

interface ICodeProps {
  code: string;
}

export interface CodeRef {
  codeEl: RefObject<HTMLElement>;
}

const FsCode = forwardRef(({ code }: ICodeProps, ref) => {
  const codeEl = useRef<HTMLElement>(null);

  useImperativeHandle(
    ref,
    () =>
      ({
        codeEl,
      } as CodeRef),
    []
  );
  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.highlightAll();
  }, []);

  return (
    <div>
      <pre>
        <code ref={codeEl} style={{ fontFamily: "Consolas, Courier New, monospace" }}>
          {code}
        </code>
      </pre>
    </div>
  );
});

export default FsCode;
