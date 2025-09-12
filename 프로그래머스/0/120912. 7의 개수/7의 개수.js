function solution(array) {
    const str = array.join("");
    return str.split("").filter(ch => ch === "7").length;
}