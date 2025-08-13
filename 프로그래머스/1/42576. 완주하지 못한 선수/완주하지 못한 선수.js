function solution(participant, completion) {  
    target = {};
    for (let i=0; i<participant.length; i++) {
         target[participant[i]] = (target[participant[i]] || 0) + 1;
         target[completion[i]] = (target[completion[i]] || 0) - 1;
    }
    for (const key in target) {
        if (target[key] !== 0) {
            return key;
        }
    }
    
}