/**
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1
and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum
of the even-valued terms.

(Answer: 4613732)
 */
function main(): number {
    let penultimate = 1;
    let last = 2;
    
    let sum = 2; // 1 is odd, 2 is even
    
    let newTerm = penultimate + last;

    while(newTerm <= 4000000) {
        if (newTerm % 2 === 0) {
            sum += newTerm;
        }

        penultimate = last;
        last = newTerm;
        newTerm = penultimate + last;
    }

    return sum;
}

export default main;