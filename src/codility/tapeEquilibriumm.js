// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

/* SOLUTION 1 */
// function solution(a) {
//     const n = a.length;
//     let minDiff;
//     for(let p=1; p < n; p++) {
//         const part1 = a.slice(0,p).reduce((prev, curr) => prev + curr, 0);
//         const part2 = a.slice(p).reduce((prev, curr) => prev + curr, 0);
//         const diff = Math.abs(part1 - part2);
//         if (minDiff === undefined || diff < minDiff) {
//             minDiff = diff;
//         }
//     }
//     console.log(minDiff);
//     return minDiff;
// }

/* SOLUTION 2 */
function solution(a) {
    const n = a.length;
    const part1 = [];
    const part2 = [];

    let growingIndex = 0;
    let decreasingIndex = n-1;
    for(let p=1; p < n; p++) {
        let indexP2 = decreasingIndex-1;
        let sum1, sum2;
        if (growingIndex === 0) { // first iteration
            sum1 = a[growingIndex];
            sum2 = a[decreasingIndex]
        } else {
            sum1 = part1[growingIndex-1] + a[growingIndex];
            sum2 = part2[indexP2+1] + a[decreasingIndex];
        }

        part1[growingIndex] = sum1;
        part2[indexP2] = sum2;

        growingIndex++;
        decreasingIndex--;
    }

    console.log(part1);
    console.log(part2);

    let minDiff;
    for(let i=0; i<part1.length; i++) {
        const diff = Math.abs(part1[i] - part2[i]);
        if (minDiff === undefined || diff < minDiff) {
            minDiff = diff;
        }
    }

    console.log(minDiff);
    return minDiff;
}

// solution([3,1,2,4,3]);
solution([7,3,2,4,6,8,5]);