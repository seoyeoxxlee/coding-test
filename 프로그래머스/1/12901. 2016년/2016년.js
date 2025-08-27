function solution(a, b) {
    const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    let pastDays = monthDays.slice(0, a-1).reduce((s, d) => s + d, 0) + (b - 1);
    
    let start = days.indexOf("FRI");
    return days[(start + pastDays) % 7];
}