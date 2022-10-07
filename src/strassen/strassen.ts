// strassen algorithm to multiply two matrices

const matrix = [
  [1, 2],
  [3, 4],
];

const matrix2 = [
  [5, 6],
  [7, 8],
];

// function to split a matrix into quarters
const split = (matrix: number[][]): number[][][] => {
  const n = matrix.length / 2;
  const a = matrix.slice(0, n).map((row) => row.slice(0, n));
  const b = matrix.slice(0, n).map((row) => row.slice(n));
  const c = matrix.slice(n).map((row) => row.slice(0, n));
  const d = matrix.slice(n).map((row) => row.slice(n));
  return [a, b, c, d];
};

// function to join 4 matrices into one

const join = (
  a: number[][],
  b: number[][],
  c: number[][],
  d: number[][]
): number[][] => {
  const n = a.length;
  const matrix: any[] = [];
  for (let i = 0; i < n; i++) {
    matrix.push([...a[i], ...b[i]]);
    matrix.push([...c[i], ...d[i]]);
  }
  return matrix;
};

// function to add two matrices
const add = (a: number[][], b: number[][]): number[][] => {
  const n = a.length;
  const matrix: any[] = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i].push(a[i][j] + b[i][j]);
    }
  }
  return matrix;
};

// function to subtract two matrices
const subtract = (a: number[][], b: number[][]): number[][] => {
  const n = a.length;
  const matrix: any[] = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      matrix[i].push(a[i][j] - b[i][j]);
    }
  }
  return matrix;
};

// function to multiply two matrices
const multiply = (a: number[][], b: number[][]): number[][] => {
  const n = a.length;
  const matrix: any[] = [];
  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += a[i][k] * b[k][j];
      }
      matrix[i].push(sum);
    }
  }
  return matrix;
};

// function to multiply two matrices using strassen algorithm
export const strassen = (a: number[][], b: number[][]): number[][] => {
  const n = a.length;
  if (n <= 2) {
    return multiply(a, b);
  } else {
    const [a11, a12, a21, a22] = split(a);
    const [b11, b12, b21, b22] = split(b);
    const p1 = strassen(a11, subtract(b12, b22));
    const p2 = strassen(add(a11, a12), b22);
    const p3 = strassen(add(a21, a22), b11);
    const p4 = strassen(a22, subtract(b21, b11));
    const p5 = strassen(add(a11, a22), add(b11, b22));
    const p6 = strassen(subtract(a12, a22), add(b21, b22));
    const p7 = strassen(subtract(a11, a21), add(b11, b12));
    const c11 = add(subtract(add(p5, p4), p2), p6);
    const c12 = add(p1, p2);
    const c21 = add(p3, p4);
    const c22 = add(subtract(add(p5, p1), p3), p7);
    return join(c11, c12, c21, c22);
  }
};
