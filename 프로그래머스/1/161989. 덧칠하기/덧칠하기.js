function solution(n, m, section) {
    let i=0;
    let count = 0;
    
    while (i < section.length) {
        const end = section[i] + m - 1;
        count++;
        
        let j = i+1;
        while (j < section.length && section[j] <= end) j++;
        i = j;
    }
    return count;
}

