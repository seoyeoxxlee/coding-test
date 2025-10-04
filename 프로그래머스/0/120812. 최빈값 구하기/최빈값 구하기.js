function solution(array) {
    const freq = {};
    
    for (let num of array) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    const maxFreq = Math.max(...Object.values(freq));
    const candidates = Object.keys(freq).filter(key => freq[key] === maxFreq);
    
    return candidates.length === 1 ? Number(candidates[0]) : -1;
}