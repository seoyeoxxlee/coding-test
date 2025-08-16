var groupAnagrams = function(strs) {
    const result = new Map([]);

    for (let str of strs) {
        const sortedStr = str.split("").sort().join(""); // "bcad" -> "abcd"
        // sortedStr 배열이 존재하면 해당 배열에 str push
        if (result.has(sortedStr)) {
            const arr = result.get(sortedStr);
            arr.push(str);
        } else {
            result.set(sortedStr, [str]);
        }
    }
    // Map의 value만 모아서 2차원 배열로 반환
    return Array.from(result.values());
};
