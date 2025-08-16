var topKFrequent = function(nums, k) {
    // Bucket Sort
    const count = {};
    const freq = Array.from({length: nums.length + 1}, () => []);
    // 각 숫자의 빈도수 세기
    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
    }
    // freq 배열의 인덱스 값(=빈도수)에 숫자 넣기
    for (n in count) {
        freq[count[n]].push(parseInt(n));
    }
    // freq 배열을 거꾸로 돌며 빈도수가 높은(=인덱스 번호가 큰) 값을 k 만큼 배열에 담아 반환
    const res = [];
    for (let i=freq.length-1; i>0; i--) {
        for (const n of freq[i]) {
            res.push(n);
            if (res.length === k) return res;
        }
    }
};
