/**

Eight houses, represented as cells, are arranged in a straight line. Each day every cell competes with its adjacent cells (neighbors). An integer value 1 represents an active cell and a value of 0 represents an inactive cell. If the neighbors on both the sides of a cell are either active or inactive, the cell becomes inactive on the next day; otherwise the cell becomes active. The two cells on each end have a single adjacent cell, so assume that the unoccupied space on the opposite side is an inactive cell. Even after updating the cell state, consider its previous state when updating the state of other cells. The state information of all cells should be updated simultaneously.
Write an algorithm to output the state of the cells after the given number of days.

Input
The input to the function/method consists of two arguments:
states, a list of integers representing the current state of cells;
days, an integer representing the number of days.

Output
Return a list of integers representing the state of the cells after the given number of days.

Examples 1
Input:
[1, 0, 0, 0, 0, 1, 0, 0], 1

Output:
0 1 0 0 1 0 1 0

Examples 2
Input:
[1, 1, 1, 0, 1, 1, 1, 1], 2

Output:
0 0 0 0 0 1 1 0
*/

function main(): number[] {
    // const states = [1, 0, 0, 0, 0, 1, 0, 0];
    // const n = 1;

    // const states = [1, 1, 1, 0, 1, 1, 1, 1];
    // const n = 2;

    // const states = [1, 1, 1, 0, 1, 1, 1, 1];
    // const n = 20; // Result: 0,1,1,0,0,0,1,1

    const states = [1, 1, 1, 0, 1, 1, 1, 1];
    const n = 100; // Result: 0,0,0,0,0,1,1,0

    return cellStateAfterNDays(states, n);
}

function cellStateAfterNDays(states: number[], n: number): number[] {
    let newStates = [...states];
    const seen = new Set<string>();
    let cycle = false;
    let i = 0;
    for(i=0; i<n; i++) {
        newStates = nextDay(newStates);

        const key = newStates.toString();
        if(seen.has(key)) {
            cycle = true;
            break;
        }
        seen.add(key);
    }

    if(cycle) {
        return cellStateAfterNDays(states, n % i);
    }
    return newStates;
}

function nextDay(states: number[]): number[] {
    const newStates = [];
    for(let i=0; i<states.length; i++) {
        const prior = i === 0 ? 0 : states[i-1];
        const next = i === states.length-1 ? 0 : states[i+1];

        newStates[i] = prior === next ? 0 : 1;
    }
    return newStates;
}

export default main;