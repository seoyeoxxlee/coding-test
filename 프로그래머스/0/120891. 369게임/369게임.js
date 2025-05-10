function solution(order) {
    const targets = ['3', '6', '9'];
    const clap = order.toString().split('').reduce((acc, cur) => targets.includes(cur) ? acc + 1 : acc, 0);
    
    return clap;
}