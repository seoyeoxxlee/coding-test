function solution(food) {
    let left = "";
    let right = "";
    
    for(let i=1 ; i<food.length; i++) {
        let count = Math.floor(food[i]/2);
        left += String(i).repeat(count);
        right = String(i).repeat(count) + right;
    }
    
    return left + '0' + right;
}