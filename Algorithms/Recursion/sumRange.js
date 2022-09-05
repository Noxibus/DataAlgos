function sumRange(num) {
  //base case is when we have num = 1
  if (num === 1) return 1;
  //recursive call
  return num + sumRange(num - 1);
}
