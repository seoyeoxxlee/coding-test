function solution(wallpaper) {
  let minR = Infinity, minC = Infinity;
  let maxR = -1,      maxC = -1;

  for (let r = 0; r < wallpaper.length; r++) {
    const row = wallpaper[r];
    for (let c = 0; c < row.length; c++) {
      if (row[c] === '#') {
        if (r < minR) minR = r;
        if (c < minC) minC = c;
        if (r > maxR) maxR = r;
        if (c > maxC) maxC = c;
      }
    }
  }

  // 시작점 (lux, luy), 끝점 (rdx, rdy)
  return [minR, minC, maxR + 1, maxC + 1];
}
