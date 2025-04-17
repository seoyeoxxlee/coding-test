function solution(s) {
    s = s.split(" ");
    
    for (let i=0; i<s.length; i++) {
        let word = s[i].split("");
        
        for(let j=0; j<word.length; j++) {
            word[j] = j % 2 === 0 ? word[j].toUpperCase() : word[j].toLowerCase();
        }
        s[i] = word.join("");
    }
    return s.join(" ");
}