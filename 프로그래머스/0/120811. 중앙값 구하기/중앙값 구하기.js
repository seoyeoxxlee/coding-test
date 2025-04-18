function solution(array) {
    array = array.sort((a, b) => a-b);
    let i = Math.floor(array.length / 2);
    return array[i];
}