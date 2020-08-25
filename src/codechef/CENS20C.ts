/*
Cherry has a string S consisting of lowercase English letters. Using this string, he formed a pyramid of infinite length with certain rules:

N-th row of pyramid contains N characters.
Each row of pyramid begins with the first character of the string.
The subsequent characters of the row are appended to the string in cyclic fashion, until the size of string for that Row is reached (See example pyramid for better understanding).
He has another string T of smaller (or equal) size.

You are asked Q queries. Each query is provided with a row number N. The answer to the query is number of occurrences of string T in that particular row of pyramid. No of occurrences of String T in a string V would mean that you'd need to find number of substrings Vi,Vi+1...Vj which are equal to String T, where i≤j.

For eg: If the string is code, then the pyramid will be of the form:

c
co
cod
code
codec
codeco
codecod
codecode
codecodec
codecodeco
...
-------------------------------------------------------------------------------------------------------
Input:
The first line contains string S — consisting of lowercase English letters.
The second line contains string T — consisting of lowercase English letters.
Next line contains an integer Q — the number of queries.
Then follow Q lines with queries descriptions. Each of them contains a single integer N denoting the row number of pyramid.
-------------------------------------------------------------------------------------------------------
Output:
Print Q lines. The i-th of them should contain a integer denoting occurrences of string T in that particular row.
-------------------------------------------------------------------------------------------------------
Constraints
1≤|S|≤10^5
1≤|T|≤|S|
1≤Q≤10^5
1≤N≤10^9
-------------------------------------------------------------------------------------------------------
Sample Input:
codechef
chefcode
3
4
12
1455
-------------------------------------------------------------------------------------------------------
Sample Output:
0
1
181
-------------------------------------------------------------------------------------------------------
Explanation:
Pyramid will be formed as explained in the statement.

Query 1: Row number 4 of the pyramid is 'code'. The number of occurrences of 'chefcode' in 'code' is 0.

Query 2: Row number 12 of the pyramid is 'codechefcode'. The number of occurrences of 'chefcode' in 'codechefcode' is 1.
*/
function main(): number {
    const S = 'codechef';
    const T = 'chefcode';
    // const Q = 3;
    const N = [4, 12, 1455];

    return output(S, T, N[2]);
}

function output(s: string, t: string, n: number): number {
    let str = s;
    
    if (n > s.length) {
        let factor = Math.ceil(n / s.length);
        while (factor > 1) {
            str+=s;
            factor--;
        }  
    }
    str = str.substr(0, n);
    
    if (t.length > str.length) return 0;

    const arr = str.split(t);
    const newLength = arr.reduce((acc: number, current: string) => current.length + acc, 0);

    return (str.length - newLength) / t.length;
}

export default main;