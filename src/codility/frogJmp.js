// https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

function solution(X, Y, D) {
    const result = (Y-X)/D;
    return Math.ceil(result);
}

console.log(solution(50,85,35));