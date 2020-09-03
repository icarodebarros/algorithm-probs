/**
Given N dices each face ranging from 1 to 6, return the minimum number of rotations necessary for each dice show the same face.
Notice in one rotation you can rotate the dice to the adjacent face. For example you can rotate the dice shows 1 to show 2, 3, 4, or 5. But to make it show 6, you need two rotations.

Example:
Input: [6, 5, 4]
Output: 2
Rotate 6 to 4, then rotate 5 to 4.

Input: [6, 6, 1]
Output: 2
Rotate 1 to 6, which needs two rotations.

Input: [6, 1, 5, 4]
Output: 3
Rotate 6 to 5, rotate 1 to 5, then rotate 4 to 5
 */
function main(): number {
    // const dices = [6, 5, 4];
    // const dices = [1, 1, 1];
    // const dices = [6, 6, 1];
    // const dices = [6, 6, 1, 1, 2];
    // const dices = [6, 6, 6, 6, 2];
    const dices = [2, 1, 1, 5, 2, 1];
    // const dices = [6, 1, 5, 4];

    return rollDices(dices);
}

function rollDices(dices: number[]): number {
    let minRotations = dices.length - 1;
    const verifieds = new Map<number, boolean>();
    
    for(let i=0; i<dices.length; i++) {
        const dicesCopy = [...dices];
        const selected = dicesCopy.splice(i, 1)[0];
        if (!verifieds.get(selected)) {
            let rotations = 0;
            for(let j=0; j<dicesCopy.length; j++) {
                if (selected !== dicesCopy[j]) {
                    rotations += (selected === 7 - dicesCopy[j]) ? 2 : 1;
                }
            }
            if (rotations === 0) return rotations;
            if (rotations < minRotations) minRotations = rotations;
            
            verifieds.set(selected, true);
        }
    }

    return minRotations;
}


export default main;