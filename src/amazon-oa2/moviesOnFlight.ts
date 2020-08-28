/**
You are on a flight and wanna watch two movies during this flight.
You are given int[] movie_duration which includes all the movie durations.
You are also given the duration of the flight which is d in minutes.
Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min).
Find the pair of movies with the longest total duration. If multiple found, return the pair with the longest movie.

e.g.
Input
movie_duration: [90, 85, 75, 60, 120, 150, 125]
d: 250

Output
[90, 125]
90min + 125min = 215 is the maximum number within 220 (250min - 30min)
 */
function main(): [number, number] {
    const durations = [90, 85, 75, 60, 120, 150, 125];
    // const durations = [85, 75, 90, 60, 120, 150, 125];
    // const durations = [85, 75, 125, 60, 120, 90, 150];
    const d = 250;
    
    return moviesOnFlight(durations, d - 30);
}

function moviesOnFlight(durations: number[], d: number): [number, number] { // COM ORDENAÇÃO
    let selecteds: [number, number] = [0, 0];

    durations.sort((a: number, b: number) => a > b ? 1 : a < b ? -1 : 0); // [60, 75, 85, 90, 120, 125, 150]
    
    let l = 0, r = durations.length-1;
    while (l < r) {
        if (durations[l] + durations[r] <= d) {
            if ((durations[l] + durations[r] > selecteds[0] + selecteds[1]) || 
                    ((durations[l] + durations[r] === selecteds[0] + selecteds[1]) &&
                    (Math.max(durations[l], durations[r]) > Math.max(selecteds[0], selecteds[1])))) {
                selecteds = [durations[l], durations[r]];
            }
            l++;
        } else {
            r--;
        }
    }

    return selecteds;
}

// function moviesOnFlight(durations: number[], d: number): [number, number] { // SEM ORDENAÇÃO
//     let combination: [number, number] = [0, 0];

//     for(let i=0; i<durations.length; i++) {
//         for(let j=i+1; j<durations.length; j++) {
//             if (durations[i] + durations[j] <= d) {
//                 if ((durations[i] + durations[j] > combination[0] + combination[1]) ||
//                 ((durations[i] + durations[j] === combination[0] + combination[1]) &&
//                 ((durations[i] > combination[0] && durations[i] > combination[1]) ||
//                 (durations[j] > combination[0] && durations[j] > combination[1])))) {
//                     combination = [durations[i], durations[j]];
//                 }
//             }
//         }
//     }

//     return combination;
// }

export default main;