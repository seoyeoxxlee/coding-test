function solution(balls, share) {
    let top = 1;
    let bot = 1;
    
    for (let i=0; i<share; i++) {
        top *= balls-i;
    }
    
    for (let i=0; i<share; i++){
        bot *= share-i;
    }
    
    return top / bot;
}