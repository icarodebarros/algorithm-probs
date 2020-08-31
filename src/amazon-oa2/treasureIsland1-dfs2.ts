/**
You have a map that marks the location of a treasure island. Some of the map area has jagged rocks and dangerous reefs. Other areas are safe to sail in.
There are other explorers trying to find the treasure. So you must figure out a shortest route to the treasure island.
Assume the map area is a two dimensional grid, represented by a matrix of characters.
You must start from the top-left corner of the map and can move one block up, down, left or right at a time.
The treasure island is marked as 'X' in a block of the matrix. 'X' will not be at the top-left corner.
Any block with dangerous rocks or reefs will be marked as 'D'. You must not enter dangerous blocks. You cannot leave the map area.
Other areas 'O' are safe to sail in. The top-left corner is always safe.
Output the minimum number of steps to get to the treasure.
e.g.
Input
[
['O', 'O', 'O', 'O'],
['D', 'O', 'D', 'O'],
['O', 'O', 'O', 'O'],
['X', 'D', 'D', 'O'],
]

Output from aonecode.com
Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps.
 */

function main(): string {
    const area = [
        ['O', 'O', 'O', 'O'],
        ['D', 'O', 'D', 'O'],
        ['O', 'O', 'O', 'O'],
        ['X', 'D', 'D', 'O'],
    ];

    // const area = [
    //     ['O', 'O', 'O', 'O'],
    //     ['D', 'O', 'D', 'O'],
    //     ['D', 'D', 'D', 'O'],
    //     ['X', 'O', 'O', 'O'],
    // ];
    
    return treasureIsland1(area);
}

interface Coordinate {
    x: number;
    y: number;
}

function treasureIsland1(area: string[][]): string { // busca (2.0) em profundidade (DFS) com recursividade
    const currentPosition: Coordinate = {x: 0, y: 0};

    const steps = { value: area.length * area[0].length };
    const visitedPositions = new Map<string, boolean>();

    sail(area, currentPosition, visitedPositions, steps, 0);

    return `The minimum route takes ${steps.value} steps.`;
}

export function sail(area: string[][], currentPosition: Coordinate, visitedPositions: Map<string, boolean>,
        steps: { value: number}, currentStep: number): void {

    console.log('Iteração', currentPosition, visitedPositions, steps, currentStep);
    
    const x = currentPosition.x;
    const y = currentPosition.y;
    
    if (area[x][y] === 'X') {
        if (currentStep < steps.value) {
            steps.value = currentStep;
        }
    } else {
        visitedPositions.set(x+''+y, true);   
    
        const possibleMoves: Coordinate[] = [];
        const potentialMoves: Coordinate[] = [
            { x, y: y - 1 }, // left
            { x, y: y + 1 }, // right
            { x: x + 1, y }, // down
            { x: x - 1, y }, // up
        ];
        
        for(const potMove of potentialMoves) {
            if (isPossiblePosition(area, potMove, visitedPositions)) possibleMoves.push(potMove);
        }
        console.log('Possible moves:', possibleMoves);
    
        const copyVisitedPositions = new Map<string, boolean>(visitedPositions);
        for(const possibleMove of possibleMoves) {
            sail(area, possibleMove, copyVisitedPositions, steps, currentStep + 1);
        }
    }           
}

function isPossiblePosition(area: string[][], position: Coordinate, visitedPositions: Map<string, boolean>): boolean {
    // out of the map
    if (position.x < 0 || position.x >= area[0].length ||
        position.y < 0 || position.y >= area.length) {
            return false;
    }
    // verify visited positions
    if (visitedPositions.get(position.x +''+ position.y)) {
        return false;
    }
    // verify position content
    if (area[position.x][position.y] === 'D' || area[position.x][position.y] === 'S') {
        return false;
    }

    return true;
}

export default main;