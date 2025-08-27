function solution(genres, plays) {
    const totals = new Map(); // 장르별 총 재생수
    const byGenre = new Map(); // 장르별 곡 리스트 [{id, plays}]
    
    for (let i=0; i<genres.length; i++) {
        const g = genres[i];
        const p = plays[i];
        
        // 합계 누적 totals:  Map { 'classic' => 1450, 'pop' => 3100, ... }
        totals.set(g, (totals.get(g) ?? 0) + p);
        // 장르별 곡 리스트 누적 byGenre: Map {'pop' => [ {id:1, plays:600}, {id:4, plays:2500} ], ...}
        if (!byGenre.has(g)) byGenre.set(g, []);
        byGenre.get(g).push({id: i, plays: p});
    }
    // 총 재생수 기준 내림차순으로 정렬해서 장르 순서 정하고, 구조분해로 장르 이름만 추출
    const orederedGenres = Array.from(totals.entries()).sort((a, b) => b[1] - a[1]).map(([g]) => g);
    // entries → [ ['classic',1450], ['pop',3100] ]
    // sort    → [ ['pop',3100], ['classic',1450] ]
    // map     → [ 'pop', 'classic' ]
    
    const answer = [];
    for (const g of orederedGenres) {
        // 장르 별 곡: 재생수 내림차순, 같으면 id 오름차순
        const songs = byGenre.get(g).sort((a, b) => (b.plays - a.plays) || (a.id - b.id));
        if (songs[0]) answer.push(songs[0].id);
        if (songs[1]) answer.push(songs[1].id); // 장르별로 최대 두 곡씩
    }
    return answer;
}