function solution(s) {
    const st = [];
    for (const ch of s) {
        if (st.length && st[st.length-1] === ch) st.pop();
        else st.push(ch);
    }
    return st.length === 0 ? 1 : 0;
}