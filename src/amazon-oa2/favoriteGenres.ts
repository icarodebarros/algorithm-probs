/**
Given a map Map<String, List<String>> userMap, where the key is a username and the value is a list of user's songs. Also given a map Map<String, List<String>> genreMap, where the key is a genre and the value is a list of songs belonging to this genre. The task is to return a map Map<String, List<String>>, where the key is a username and the value is a list of the user's favorite genres. Favorite genre is a genre with the most song.

Example :
Input:

userMap = {
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
genreMap = {
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}
Output:
{
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}
Explanation:
David has 2 Rock, 2 Techno and 1 Jazz song. So he has 2 favorite genres.
Emma has 2 Pop and 1 Dubstep song. Pop is Emma's favorite genre.
*/

function main(): string {
    const userMap = new Map<string, string[]>();
    const genreMap = new Map<string, string[]>();

    userMap.set("David", ["song1", "song2", "song3", "song4", "song8"]);
    userMap.set("Emma", ["song5", "song6", "song7"]);

    genreMap.set("Rock", ["song1", "song3"]);
    genreMap.set("Dubstep", ["song7"]);
    genreMap.set("Techno", ["song2", "song4"]);
    genreMap.set("Pop", ["song5", "song6"]);
    genreMap.set("Jazz", ["song8", "song9"]);

    return favoriteGenres(userMap, genreMap);
}

function favoriteGenres(userMap: Map<string, string[]>, genreMap: Map<string, string[]>): string {
    
    const songMap = new Map<string, string>(); // song1 -> Rock, song2 -> Techno, ...
    for (const [key, value] of genreMap) {
        value.forEach((song: string) => songMap.set(song, key));
    }

    const favoriteGenreMap = new Map<string, string[]>();
    for (const [user, songs] of userMap) {
        const genreCountMap = new Map<string, number>(); // Rock -> 2, Tech -> 2, ...
        let maxCount = 0;
        songs.forEach((song: string) => {
            const genre = songMap.get(song);

            let count = genreCountMap.get(genre) || 0;
            count++;
            if (count > maxCount) maxCount = count;
            genreCountMap.set(genre, count);
        });

        const favorites: string[] = [];
        for (const [genre, count] of genreCountMap) {
            if(count === maxCount) favorites.push(genre);
        }
        favoriteGenreMap.set(user, favorites); // David -> [Rock, Techno], Emma -> [Pop]
    }

    return toString(favoriteGenreMap);
}

function toString(map: Map<string, string[]>){
    let str = '';
    for (const [k,v] of map) str += `${k} => [${v}] `;
    return str;
}

export default main;