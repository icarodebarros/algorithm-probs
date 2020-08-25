/**
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

(Answer: 232792560)
 */
function main(): number {
    // const k = 10;
    const k = 20;

    // const min = 2 * 3 * 5 * 7; // primes between 1 and k
    const min = 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19; // primes between 1 and k
    let n = 0;
    let i: number;

    while (i !== k+1) {
        n+=min;
        for(i=2; i<=k; i++) {
            if (n%i !== 0) break;
        }         
    }
    
    return n;
}

export default main;