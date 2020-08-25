/**
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

(Answer: 906609)
 */
function main(): number {
    let n1 = 999;
    let n2 = 999;

    let palindrome = 0;
    
    while(n2 >= 100) {
        while(n1 >= 100) {
            const product = n1*n2;
            if (product < palindrome) break;

            if (isPalindrome(product) && product > palindrome) {
                console.log('n1', n1, 'n2', n2);
                palindrome = product;
            }
            n1--;
        }
        n2--;
        n1 = n2;
    }

    return palindrome;
}

function isPalindrome(n: number): boolean {
    const strNumber = n.toString();
    const size = strNumber.length;
    for (let i=0; i<size/2; i++) {
        if (strNumber[i] !== strNumber[size-1-i]) return false;
    }

    return true;
}

export default main;