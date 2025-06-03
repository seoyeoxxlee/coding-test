function solution(lottos, win_nums) {
    const countMin = lottos.filter(num => win_nums.includes(num)).length;
    const countMax = lottos.filter(num => num === 0).length + countMin;

    const getRank = (count) => {
        switch (count) {
            case 6: return 1;
            case 5: return 2;
            case 4: return 3;
            case 3: return 4;
            case 2: return 5;
            default: return 6;
        }
    };

    return [getRank(countMax), getRank(countMin)];
}
