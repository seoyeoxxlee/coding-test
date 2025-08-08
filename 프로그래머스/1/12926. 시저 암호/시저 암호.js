function solution(s, n) {
    return s.split('').map(char => {
        if (char === ' ') return ' ';
        
        const isUpper = char === char.toUpperCase();
        const base = isUpper ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        
        const shifted = (char.charCodeAt(0) - base + n) % 26;
        return String.fromCharCode(base + shifted);
    }).join('');
}