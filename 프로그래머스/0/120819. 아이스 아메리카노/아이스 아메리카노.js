function solution(money) {
    let price = 5500
    let cup = 0;
    let change = 0;
    
    cup = parseInt(money / price);
    change = money - (price * cup);
    
    return [cup, change];
}