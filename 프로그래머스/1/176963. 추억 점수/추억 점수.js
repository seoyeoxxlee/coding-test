function solution(name, yearning, photo) {
    const result = [];
    // name과 yearning을 딕셔너리 매핑 -> { may: 5, kein: 10, kain: 1, radi: 3 }
    const scoreByName = {};
    for (let i=0; i<name.length; i++) scoreByName[name[i]] = yearning[i];
    
    for (let i=0; i<photo.length; i++) {
        let score = 0;
        for (let j=0; j<photo[i].length; j++) {
            if (scoreByName[photo[i][j]] !== undefined) {
                score += scoreByName[photo[i][j]];
            }
        }
        result.push(score);
    }
    return result;
}