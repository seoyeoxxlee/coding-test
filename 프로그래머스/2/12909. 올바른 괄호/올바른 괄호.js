function solution(s){
    const bracketPairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    const stack = [];

    for (let char of s) {
        // 여는 괄호면 스택에 push
        if (!bracketPairs[char]) {
            stack.push(char);
        } else {
            // 닫는 괄호면 스택 peek와 매칭 확인
            if (stack.pop() !== bracketPairs[char]) {
                return false;
            }
        }
    }
    // 스택이 비었으면 true
    return stack.length === 0;
}