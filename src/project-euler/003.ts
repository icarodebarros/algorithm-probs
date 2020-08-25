/**
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

(Answer: 6857)
 */
// function main(): number {
//     // const subject = 13195;
//     const subject = 600851475143;

//     let divisionResult = 2;
//     let factor = subject / divisionResult;

//     while(divisionResult <= subject/2 && (!isInteger(subject, divisionResult) || !isPrime(subject, divisionResult))) {
//         divisionResult++;
//     }
//     factor = subject / divisionResult;

//     return factor; 
// }

// function isInteger(dividend: number, divisor: number): boolean {
//     const isInt = dividend%divisor === 0;

//     return isInt;
// }

// function isPrime(dividend: number, divisor: number): boolean {
//     const n = dividend / divisor;

//     for(let i=2; i <= n/2; i++) {
//         if (n%i === 0) return false;
//     }

//     return true;
// }

// export default main;

// -----------------------------------------------------------------------------

function main(): number {
    // let n = 13195;
    let n = 600851475143;

    let factor = 2;
    let lastFactor = 1;

    while(n>1) {
        if (n%factor === 0) {
            lastFactor = factor;
            n = n/factor;
            while(n%factor === 0) n = n/factor;
        }
        factor++;
    }

    return lastFactor; 
}

export default main;