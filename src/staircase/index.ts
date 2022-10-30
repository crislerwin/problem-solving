export const staircase = (n: number): string => {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = "".repeat(n - i) + "#".repeat(i);
  }
  return str;
};
