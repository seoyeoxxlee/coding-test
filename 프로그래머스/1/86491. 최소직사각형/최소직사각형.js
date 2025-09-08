function solution(sizes) {
    let w = [];
    let h = [];
    
    for (let i=0; i<sizes.length; i++) {
        w.push(Math.max(...sizes[i]));
        h.push(Math.min(...sizes[i]));
    }
    return Math.max(...w)*Math.max(...h);
}