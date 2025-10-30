function solution(num_list) {
    let mul = 1;
    let sum = 0;
    
    for (let num of num_list) {
        mul *= num;
        sum += num;
    }
    
    return mul < sum*sum ? 1 : 0;
}