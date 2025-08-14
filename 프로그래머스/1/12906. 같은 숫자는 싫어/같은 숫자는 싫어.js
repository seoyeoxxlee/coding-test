function solution(arr) {
    const stack = [];
    
    for (num of arr) {
        // 스택의 peek와 다른 숫자만 스택에 push
        if (stack[stack.length-1] !== num) {
            stack.push(num);
        }
    }
    return stack;
}
