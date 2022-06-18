function findOdd(A) {
  for (let i = 0; i < A.length; i++) {
    let count = A.filter((v) => v === A[i]).length;
    if (count % 2 === 1) {
      return A[i];
    }
  }
}

console.log(findOdd([1, 1, 1, 2, 2, 3, 3]));
