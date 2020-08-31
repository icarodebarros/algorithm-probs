/**
You have a map that marks the locations of treasure islands. Some of the map area has jagged rocks and dangerous reefs. Other areas are safe to sail in.
There are other explorers trying to find the treasure. So you must figure out a shortest route to one of the treasure island.
Assume the map area is a two dimensional grid, represented by a matrix of characters.
You must start from one of the starting point(marked as 'S') of the map and can move one block up, down, left or right at a time.
The treasure island is marked as 'X' in a block of the matrix.
Any block with dangerous rocks or reefs will be marked as 'D'. You must not enter dangerous blocks. You cannot leave the map area.
Other areas 'O' are safe to sail in.
Output the minimum number of steps to get to any of the treasure.
e.g.
Input
[
['S', 'O', 'O', 'S', 'S'],
['D', 'O', 'D', 'O', 'D'],
['O', 'O', 'O', 'O', 'X'],
['X', 'D', 'D', 'O', 'O'],
['X', 'D', 'D', 'D', 'O'],
]

Output
3
Explanation
You can start from (0,0), (0, 3) or (0, 4). The treasure locations are (2, 4) (3, 0) and (4, 0). Here the shortest route is (0, 3), (1, 3), (2, 3), (2, 4).
 */

import { sail } from './treasureIsland1-dfs2.js';

function main(): string {
    const area = [
        ['S', 'O', 'O', 'S', 'S'],
        ['D', 'O', 'D', 'O', 'D'],
        ['O', 'O', 'O', 'O', 'X'],
        ['X', 'D', 'D', 'O', 'O'],
        ['X', 'D', 'D', 'D', 'O'],
    ];
    
    return treasureIsland2(area);
}

interface Coordinate {
    x: number;
    y: number;
}

function treasureIsland2(area: string[][]): string { // busca em profundidade (DFS) com recursividade
    const possibleStarts: Coordinate[] = [];

    for(let x=0; x<area.length; x++) {
        for(let y=0; y<area[x].length; y++) {
            if (area[x][y] === 'S') possibleStarts.push({ x, y });
        }
    }
    console.log('Possible starts:', possibleStarts);

    const steps = { value: area.length * area[0].length };
    const visitedPositions = new Map<string, boolean>();

    let betterRoute = { start: possibleStarts[0], steps: steps.value };
    for(const possibleStart of possibleStarts) {
        sail(area, possibleStart, visitedPositions, steps, 0);
        
        if (betterRoute.steps !== steps.value) {
            betterRoute = { start: possibleStart, steps: steps.value };
        }
    }

    return `The minimum route takes ${betterRoute.steps} steps, starting from (${betterRoute.start.x}, ${betterRoute.start.y})`;
}

export default main;