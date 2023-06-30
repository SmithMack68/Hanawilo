/**
 * 
  There's an algorithms tournament taking place in which teams of programmers
  compete against each other to solve algorithmic problems as fast as possible.
  Teams compete in a round robin, where each team faces off against all other
  teams. Only two teams compete against each other at a time, and for each
  competition, one team is designated the home team, while the other team is the
  away team. In each competition there's always one winner and one loser; there
  are no ties. A team receives 3 points if it wins and 0 points if it loses. The
  winner of the tournament is the team that receives the most amount of points.

 * Example 1:
  * Inputs: 
    * competitions  = [
        ["HTML", "C#"],
        ["C#", "Python"],
        ["Python", "HTML"],
      ]
    * results = [0,0,1]    
  * Output: 
    "Python"
    // C# beats HTML, Python Beats C#, and Python Beats HTML.
    // HTML - 0 points
    // C# -  3 points
    // Python -  6 points
 */

function tournamentWinner(competitions, results) {
  // Write your code here.
  return "";
}


 // beatmap = {'C#' => 'HTML', 'Python' => 'C#', 'Python' => 'HTML'}







// NOT ME BELOW JUST a reference
// Results[i] denote the winner of competitions[i], where 1 in the results array mean the home team won and 0 means the away team won.

// This is my code and pseudo-code so far:

// function tournamentWinner(competitions, results) {


// let currentWinningTeam = "";

//   const scoreTracker = new Map();
//   scoreTracker.set(currentWinningTeam, 0);
//   // since competitions and results have same length, use for loop to go through both of the arrays
//   // they are in order of results to competitionns
//   // use hash map to keep track of eachTeams points
//   // final loop to find the team with the highest points
//   for (const index in competitions) {
//     const result = results[index];
//     // 0 0 1
//     // console.log(result);

//     // ["HTML", "C#"] C# > HTML
//     const [homeTeam, awayTeam] = competitions[index];

//     // console.log(index);
//     // #C, Python, Python
//     const teamWhoWon = result === 0 ? awayTeam : homeTeam;

//     console.log(teamWhoWon)

//     updateScores(teamWhoWon, 3, scoreTracker)

//     console.log(scoreTracker)
//   }
//   return currentWinningTeam;
// }

// function updateScores(teamWhoWon, points, scoreTracker) {
//   if (!scoreTracker.has(teamWhoWon)) {
//     scoreTracker.set(teamWhoWon, 0)
//   } else {
//     scoreTracker.set(teamWhoWon, )
//   }
// }

// console.log(
//   tournamentWinner(
//     [
//       ['HTML', '#C'],
//       ['#C', 'Python'],
//       ['Python', 'HTML'],
//     ],
//     [0, 0, 1]
//   )
// );
//??? sort of understand this
// m.set(team, (m.get(team) || 0) + 1)
// const
//     tournamentWinner = (competitions, results) => {
//         return [...results.reduce((m, r, i) => 
//                 (team => m.set(team, (m.get(team) || 0) + 1))
//                 (competitions[i][+!r]),
//             new Map)];
//     };

// console.log(tournamentWinner([['HTML', '#C'], ['#C', 'Python'], ['Python', 'HTML']], [0, 0, 1]));
// function tournamentWinner(competitions, results) {
//   let champ = "";
//   const leaderboard = { "": 0 };

//   for (let i = 0; i < results.length; i++) {
//     const result = results[i];
//     const [home, away] = competitions[i];
//     const winner = result === 1 ? home : away;
//     updateLeaderboard(winner, 3, leaderboard);

//     if (leaderboard[winner] > leaderboard[champ]) {
//       champ = winner;
//     }
//   }

//   return champ;
// }

// function updateLeaderboard(team, points, leaderboard) {
//   if (!leaderboard[team]) {
//     leaderboard[team] = 3;
//   } else {
//     leaderboard[team] += 3;
//   }
// }

// A tournament just ended and you need to find the winner. 
// Each round has a pair of teams facing off and only one team wins.
// The winning team is awarded 3 points. 
// Create a function called tournamentWinner that takes two arrays as input
// and return the winner of the tournament. 
// The first array, called competitions, consists of arrays of two team names 
// that faced each other in the round and will be in the form ["homeTeam", "awayTeam"]. 
// The second argument is an array called results 
// whose elements will be either a 1 or a 0. 
// The same index at both arrays shows the teams that faced off and 
// which of the teams won for that round.
// For example, at index i, the teams at competitions[i] 
// competed against each other and the team represented by results[i] 
// is the winner from that pair.
// Note that results[i] will be either a 1 or a 0,
// with 1 representing a win for the homeTeam, and a 0 representing a win for the awayTeam.

