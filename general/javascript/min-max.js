// max of mins of all windows sizes using sliding window
const maxMinWindow = () => {
  let n = arr.length;
  let res = [];

  // iterate over all window sizes
  for (let k = 1; k <= n; k++) {
    let dq = [];
    let maxMin = Number.MIN_SAFE_INTEGER;

    // process first k elements
    for (let i = 0; i < k; i++) {
      while (dq.length > 0 && arr[i] <= arr[dq[dq.length - 1]]) dq.pop();
      dq.push(i);
    }

    // slide the window
    for (let i = k; i < n; i++) {
      maxMin = Math.max(maxMin, arr[dq[0]]);

      while (dq.length > 0 && dq[0] <= i - k) dq.shift();
      while (dq.length > 0 && arr[i] <= arr[dq[dq.length - 1]]) dq.pop();

      dq.push(i);
    }

    maxMin = Math.max(maxMin, arr[dq[0]]);
    res.push(maxMin);
  }

  return res;
};

let arr = [10, 20, 30, 50, 10, 70, 30];
let res = maxMinWindow(arr);
console.log(res);