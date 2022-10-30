export const plusMinus = (
  arr: number[]
): { positive: number; negative: number; zero: number } => {
  let positive: number = 0;
  let negative: number = 0;
  let zero: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  return {
    positive: positive / arr.length,
    negative: negative / arr.length,
    zero: zero / arr.length,
  };
};
