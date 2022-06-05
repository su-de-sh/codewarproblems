function bouncingBall(h, bounce, window) {
  if (h < 0 || bounce < 0 || bounce >= 1 || h <= window) return -1;
  let ballPassCount = 1;
  h = h * bounce;
  while (h > window) {
    ballPassCount += 2;
    h = h * bounce;
  }
  return ballPassCount;
}

console.log(bouncingBall(3.0, 0.66, 1.5));
