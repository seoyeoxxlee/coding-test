function solution(A,B){
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    
    return A.reduce((total, cur, i) => total + cur * B[i], 0);
}

