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

function treasureIsland1(area: string[][]): string { // busca em profundidade (DFS) com recursividade
    const currentPosition: Coordinate = {x: 0, y: 0};

    const visitedPositions = new Map<string, number>();

    const steps = sail(area, currentPosition, visitedPositions, 0);

    return `The minimum route takes ${steps} steps.`;
}

function sail(area: string[][], currentPosition: Coordinate, visitedPositions: Map<string, number>, steps: number): number {
    console.log('Iteração', currentPosition, visitedPositions, steps);
    const x = currentPosition.x;
    const y = currentPosition.y;
    if (area[x][y] === 'X') return steps;
        
    visitedPositions.set(x+''+y, steps);
    
    const possibleMoves: Coordinate[] = [];
    const potentialMoves: Coordinate[] = [
        { x, y: y-1 }, // left
        { x, y: y + 1 }, // right
        { x: x + 1, y }, // down
        { x: x - 1, y }, // up
    ];
    
    for(const potMove of potentialMoves) {
        if (isPossiblePosition(area, potMove, visitedPositions)) possibleMoves.push(potMove);
    }
    console.log('Possible moves:', possibleMoves);

    if (possibleMoves.length === 0) return null;

    const copyVisitedPositions = new Map<string, number>(visitedPositions);
    const possibilities = possibleMoves.map((move: Coordinate) => sail(area, move, copyVisitedPositions, steps + 1));
    
    console.log('possibilities', possibilities);

    return possibilities.reduce((acc: number, current: number) => {
        if (!acc) return current;
        return current && current < acc ? current : acc;
    }, null);
}

function isPossiblePosition(area: string[][], position: Coordinate, visitedPositions: Map<string, number>): boolean {
    // out of the map
    if (position.x < 0 || position.x >= area[0].length ||
        position.y < 0 || position.y >= area.length) {
            return false;
    }
    // verify pass positions
    if (visitedPositions.get(position.x +''+ position.y) !== undefined) {
        return false;
    }
    // verify position content
    if (area[position.x][position.y] === 'D') {
        return false;
    }

    return true;
}

export default main;