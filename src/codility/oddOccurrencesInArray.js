// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function solution(A) {
    const mp = new Map()
    A.forEach(el => mp.set(el, !mp.get(el)));
    
    for(const [key, value] of mp.entries()) {
        if (value) return key;
    }    
}

console.log(solution([9,3,9,3,9,7,9]));