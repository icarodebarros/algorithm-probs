/**
Find the k post offices located closest to you, given your location and a list of locations of all post offices available.
Locations are given in 2D coordinates in [X, Y], where X and Y are integers.
Euclidean distance is applied to find the distance between you and a post office.
Assume your location is [m, n] and the location of a post office is [p, q], the Euclidean distance between the office and you is SquareRoot((m - p) * (m - p) + (n - q) * (n - q)).
K is a positive integer much smaller than the given number of post offices. from aonecode.com

e.g.
Input
you: [0, 0]
post_offices: [[-16, 5], [-1, 2], [4, 3], [10, -2], [0, 3], [-5, -9]]
k = 3

Output from aonecode.com
[[-1, 2], [0, 3], [4, 3]]
 */
type Coordinate = [number, number];

function main(): string {
    const you: Coordinate = [0, 0];
    // const post_offices: Coordinate[] = [[-16, 5], [-1, 2], [4, 3], [10, -2], [0, 3], [-5, -9]];
    const post_offices: Coordinate[] = [[-16, 5], [-1, 2], [4, 3], [-3, 0], [3, 0], [10, -2], [0, 3], [-5, -9]];
    const k = 3;

    const closestPOs = KClosest(you, post_offices, k);

    const strPOs = closestPOs.map((po: Coordinate) => `[${po[0]}, ${po[1]}]`);
    return `The ${k} post offices closest to you: ${strPOs}`;
}

function KClosest(you: Coordinate, post_offices: Coordinate[], k: number): Coordinate[] {
    const PoDistances = new Map<number, Coordinate[]>();
    
    const distances: number[] = post_offices.map((po: Coordinate) => {
        const dist = euclideanDistance(you, po);
        const pod = PoDistances.get(dist);
        !pod ? PoDistances.set(dist, [po]) : pod.push(po);
        
        return dist;
    });
    
    console.log(PoDistances);
    distances.sort((a: number, b: number) => a > b ? 1 : a < b ? -1 : 0);
    
    let closestPOs: Coordinate[] = [];
    for(let i=0; i<k; i++) {
        closestPOs = closestPOs.concat(PoDistances.get(distances[i]));
        if (closestPOs.length >= k) break;
    }
    if (closestPOs.length > k) closestPOs = closestPOs.slice(0, k);

    return closestPOs;
}

function euclideanDistance(c1: Coordinate, c2: Coordinate): number {
    return Math.sqrt(Math.pow((c1[0] - c2[0]), 2) + Math.pow((c1[1], c2[1]), 2));
}

export default main;