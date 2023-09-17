// 拆分代码字符项
export interface ICodeLetter {
  className: string; // 类名
  text: string; // 显示文本
  type: string; // 类型：前缀空格 文本内容 回车
  code: number; // ascii
  judge?: boolean; // 判断输入是否错误
}

export interface IArrayLetter {
  className: string; // 类名
  text: string; // 显示文本
  type: string; // 类型：前缀空格 文本内容 回车
  code: number; // ascii
  judge?: boolean; // 判断输入是否错误
  beforeOrNext?: number; // 存放下行/上行末尾索引，跳过前缀空格
}
