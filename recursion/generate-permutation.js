const generatePermutation = (res, arr, idx) => {
  if (idx === arr.length - 1) {
    res.push([...arr]);
    return;
  }

  for (let i = idx; i < arr.length; i++) {
    [arr[i], arr[idx]] = [arr[idx], arr[i]];

    generatePermutation(res, arr, idx + 1);
    //backtrack
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
};

const viewRun = () => {
  res = [];
  generatePermutation(res, [1, 2, 3], 0);

  console.log("RESPONSE", JSON.stringify(res));
};

viewRun();
