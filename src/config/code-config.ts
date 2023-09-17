export interface ICodeDetail {
  title: string; // 代码名称
  author: string; // 作者
  content: string; // 代码详情
  lines: number; // 代码行数
  charCount: number; // 代码字符数
  lan: string; // 使用语言
  challengeCount: number; // 已挑战人数
  fastTime: number; // 最快完成时间
  mostRate: number; // 最高正确率
}

const codeList: ICodeDetail[] = [
  {
    title: "归并排序",
    author: "__Async__",
    lines: 18,
    charCount: 202,
    challengeCount: 124,
    lan: "JavaScript",
    fastTime: 79,
    mostRate: 80,
    content: `function merge_sort(arr, l, r) {
      if (l >= r) return;
      let mid = (l + r) >> 1;
      merge_sort(arr, l, mid);
      merge_sort(arr, mid + 1, r);
      let k = 0,
        i = l,
        j = mid + 1;
      const temp = [];
      while (i <= mid && j <= r) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
      }
      while (i <= mid) temp[k++] = arr[i++];
      while (j <= r) temp[k++] = arr[j++];
    
      for (i = l, j = 0; i <= r; i++, j++) arr[i] = temp[j];
    }`,
  },
  {
    title: "快速排序",
    author: "__Async__",
    lines: 19,
    charCount: 202,
    challengeCount: 124,
    lan: "JavaScript",
    fastTime: 79,
    mostRate: 80,
    content: `function quick_sort(arr, l, r) {
      if (l >= r) return;
      let x = arr[(l + r) >> 1],
        i = l - 1,
        j = r + 1;
      while (i < j) {
        do i++;
        while (arr[i] < x);
        do j--;
        while (arr[j] > x);
        if (i < j) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      quick_sort(arr, l, j);
      quick_sort(arr, j + 1, r);
    }`,
  },
  {
    title: "全排列",
    author: "__Async__",
    lines: 21,
    charCount: 221,
    challengeCount: 122,
    lan: "JavaScript",
    fastTime: 79,
    mostRate: 80,
    content: `const orderAll = function (arr) {
      const res = [],
        path = [];
      backtracking(arr, arr.length, []);
      return res;
      function backtracking(arr, len, used) {
        if (path.length == len) {
          res.push(Array.from(path));
          return;
        }
        for (let i = 0; i < len; i++) {
          if (used[i]) continue;
          used[i] = true;
          path.push(arr[i]);
          backtracking(arr, len, used);
          used[i] = false;
          path.pop();
        }
      }
    };`,
  },
  {
    title: "冒泡排序",
    author: "__Async__",
    lines: 11,
    charCount: 144,
    challengeCount: 124,
    lan: "JavaScript",
    fastTime: 79,
    mostRate: 80,
    content: `function bubble_sort(arr) {
      for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
    }`,
  },
  {
    title: "手写instanceof",
    author: "__Async__",
    lines: 9,
    charCount: 102,
    challengeCount: 124,
    lan: "JavaScript",
    fastTime: 79,
    mostRate: 80,
    content: `const _instanceof = (target, Fn) => {
      if (typeof target !== "object" || target == null) return false;
      let proto = Fn.prototype;
      while (proto) {
        if (target.__proto__ === proto) return true;
        proto = proto.prototype;
      }
      return false;
    };`,
  },
];

export default codeList;
