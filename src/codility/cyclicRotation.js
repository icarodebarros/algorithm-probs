// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function rightRotate(A) {
    const lastEl = A.pop();
    A.unshift(lastEl);
}

function solution(A, K) {
    let numRotations = K;
    if (K >= A.length) {
        numRotations = K % A.length; // TODO: melhorar! (fazer mais divisões!)
    }

    while(numRotations > 0) {
        rightRotate(A);
        numRotations--;
    }
    return A;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7], 7));
