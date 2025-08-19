function solution(a, b, n) {
    let bottle = n; // 처음 가지고 있는 병의 개수는 20개
    let get = 0; // 교환으로 받게 된 병의 개수
    
    // 가지고 있는 병의 개수가 a보다 작으면 종료;
    while (bottle >= a) {
        let bundle = parseInt(bottle / a); // 몇 묶음을 줘야 하는지 = 돌려받는 병의 개수
        
        bottle = bottle - (a * bundle) + (bundle * b);
        get += bundle * b;

    }
    return get;
}