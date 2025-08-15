var evalRPN = function(tokens) {
    const operator = new Set(['+','-','*','/'])

    // tokens를 순회하면서 연산자가 나올 때 
    const calc = [];
        
    for (const token of tokens) {
        if (!operator.has(token)) {
            calc.push(Number(token));
            continue;
        } 
            
        const a = calc.pop();
        const b = calc.pop();
        let result;

        switch (token) {
            case '+' :
                result = b + a;
                break;
            case '-' :
                result = b - a;
                break;
            case '*' :
                result = b * a;
                break;
            case '/' :
                result = Math.trunc(b / a);
                break;
        }
        calc.push(result);
    }     
    return calc.pop();
};
