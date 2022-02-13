// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/


function solution(A) {
    const mp = new Map();
    A.forEach(el => mp.set(el, true));

    for(let i=0; i<=A.length; i++) {
        if (!mp.get(i)) return i;
    }
}