// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function decimalToBinary(n) {
    let bin = '', rem;
    while(n != 0) {
        rem = n % 2;
        n = parseInt(n/2);
        bin = rem + bin;
    }
    return bin;
}

function getLongestBinaryGap(strBin) {
    // const strBin = bin+'';
    let longestGap = 0;
    let currentGap = 0;
    for(let i=0; i<strBin.length; i++) {
        const el = strBin[i];
        if (el == '0') {
            currentGap++;
        } else if (el == '1' && currentGap > 0) {
            if (currentGap > longestGap) {
                longestGap = currentGap;

                // Otimização
                if (longestGap >= (strBin.length-1) - i) {
                    console.log(longestGap, strBin.length, i)
                    break;
                }
            }
            currentGap = 0;
        }
    }
    return longestGap;
}

const bin = decimalToBinary(66561);
console.log(bin);
console.log(getLongestBinaryGap(bin));