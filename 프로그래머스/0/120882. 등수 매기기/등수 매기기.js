function solution(score) {
  const avg = score.map(([eng, math]) => (eng + math) / 2);
  const sorted = [...avg].sort((a, b) => b - a);
  return avg.map(v => sorted.indexOf(v) + 1);
}
