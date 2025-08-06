function solution(players, callings) {
    const nameToIndex = {}
    
    players.forEach((name, idx) => {
        nameToIndex[name] = idx;
    });
    
    for (let i=0; i<callings.length; i++) {
        const called = callings[i];
        const curIndex = nameToIndex[called];
        const frontPlayer = players[curIndex-1];
        
        [players[curIndex-1], players[curIndex]] = [players[curIndex], players[curIndex-1]];
        
        nameToIndex[called] = curIndex-1;
        nameToIndex[frontPlayer] = curIndex;
    }
    
    return players;
}