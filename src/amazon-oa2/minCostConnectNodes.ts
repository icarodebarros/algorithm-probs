/**

 Min Cost to Connect All Nodes (Minimum Spanning Tree I)
 Given an undirected graph with n nodes labeled 1..n. Some of the nodes are already connected. The i-th edge connects nodes edges[i][0] and edges[i][1] together. Your task is to augment this set of edges with additional edges to connect all the nodes. Find the minimum cost to add new edges between the nodes such that all the nodes are accessible from each other.

 Input:
n, an int representing the total number of nodes.
edges, a list of integer pair representing the nodes already connected by an edge.
newEdges, a list where each element is a triplet representing the pair of nodes between which an edge can be added and the cost of addition, respectively (e.g. [1, 2, 5] means to add an edge between node 1 and 2, the cost would be 5).

Example:
Input:
n = 6, edges = [[1, 4], [4, 5], [2, 3]], newEdges = [[1, 2, 5], [1, 3, 10], [1, 6, 2], [5, 6, 5]]
Output: 7
Explanation:
There are 3 connected components [1, 4, 5], [2, 3] and [6].
We can connect these components into a single component by connecting node 1 to node 2 and node 1 to node 6 at a minimum cost of 5 + 2 = 7.

hint: what’s the time complexity of your algorithm? Can you make the running time O(E * log(E)) by using Union Find?
*/
type Edge = [number, number];
type NewEdge = [number, number, number];

function main(): number {
    const n = 6;
    const edges: Edge[] = [[1,4], [4,5], [2,3]];
    // const edges: Edge[] = [[1,4], [6, 5], [4,5]];
    const newEdges: NewEdge[] = [[1,2,5], [1,3,10], [1,6,2], [5,6,5]];
    // const newEdges: NewEdge[] = [[1,2,15], [1,6,12], [5,6,5], [1,3,10]];
    // const newEdges: NewEdge[] = [[1,2,15], [1,6,12], [1,3,10], [5,6,5]];

    return connectNodes(n, edges, newEdges);
}

function connectNodes(n: number, edges: Edge[], newEdges: NewEdge[]): number {
    const groups = []; // : [number[]]
    const indexNodeGroup = new Map<number, number>(); // < Node, Index of the group it belongs to >

    for (let i=1; i<=n; i++) {
        let group: number[] = null;
        group = groups[indexNodeGroup.get(i)];
        
        if(!group) {
            group = [i];
            groups.push(group);
            indexNodeGroup.set(i, groups.length-1);
        }
        for(const edge of edges) {
            if (i === edge[0] && group !== groups[indexNodeGroup.get(edge[1])]) {
                group.push(edge[1]);
                indexNodeGroup.set(edge[1], indexNodeGroup.get(i));
            } else if (i === edge[1] && group !== groups[indexNodeGroup.get(edge[0])]) {
                group.push(edge[0]);
                indexNodeGroup.set(edge[0], indexNodeGroup.get(i));
            }
        }
    }
    
    // console.log('Final groups', [...groups]);
    newEdges.sort((a, b) => a[2] > b[2] ? 1 : a[2] < b[2] ? -1 : 0);
    // console.log('Sorted newEdges', [...newEdges]);

    let cost = 0;
    for(const newEdge of newEdges) {
        const indexG1ToConnect = indexNodeGroup.get(newEdge[0]);
        const indexG2ToConnect = indexNodeGroup.get(newEdge[1]);

        if (indexG1ToConnect !== indexG2ToConnect) {
            groups[indexG1ToConnect] = groups[indexG1ToConnect].concat(groups[indexG2ToConnect]);
            groups.splice(indexG2ToConnect, 1);
            cost += newEdge[2];
            if(groups.length === 1) {
                break;
            }
        }
    }

    return cost;
}

export default main;