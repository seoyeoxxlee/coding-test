function solution(chicken) {
    let service = 0;
    while (chicken >= 10) {
        const newService = Math.floor(chicken / 10);
        service += newService;
        chicken = chicken % 10 + newService;
    }
    return service;
}