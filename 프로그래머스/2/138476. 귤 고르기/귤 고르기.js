function solution(k, tangerine) {
    
    const freq = new Map();

    for (const x of tangerine) {
        freq.set(x, (freq.get(x) ?? 0) + 1);
    }
    
    const counts = Array.from(freq.values()).sort((a, b) => b - a);
    
    let sum = 0;
    let kinds = 0;
    for (const c of counts) {
        sum += c;
        kinds++;
        if (sum >= k) break;
    }
    return kinds;
}