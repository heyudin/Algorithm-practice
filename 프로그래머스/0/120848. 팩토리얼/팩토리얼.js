function solution(n) {
    let num = 1;
    let i=1;
    while(num<n){
        num = i*num
        i++
    }
    return n===1 || n===2 ? num : (num===n ? i-1 :i-2)
}