'use strict';

/*
We're building a football betting app!

1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any array is the goalkeeper and the others are field players
For Bayern Munich (Team 1) create one variable ('gk') with the goalkeeper's name and one array ('fieldPlayers') with all the remaining 10 field players

3.  Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. so create a new array('players1Final') containing all the original team1 players, plus 'Thiago', 'Coutinho', 'Perisic'

5. based on the game.odds object, create one variable for each odd (called 'team1', 'draw', 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of players names (NOT AN ARRAY) 

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using the if/else statement or the ternary operator

TEST DATA for 6: Use players 'Davies', 'Muller', 'Lewandowski', 'Kimmich. Then call the function again with players from game.scorerd
*/

class Team {
  players = [];
  score = 0;
  teamName = '';
  opposingTeam = '';

  constructor(teamName, opposingTeam) {
    this.teamName = teamName;
  }

  setScore(score) {
    this.score += score;
  }
  printGoals(...players) {
    this.setScore(players.length);
    console.log(
      `Players who scored: ${players} and scored ${players.length} points!`
    );
  }

  addPlayers(...newPlayers) {
    this.players = [...this.players, ...newPlayers];
  }

  getFieldPositions() {
    let [gk, ...others] = this.players;
    return gk, others;
  }
}

class Game {
  team1 = '';
  team2 = '';
  odds = {
    team1: 0,
    x: 0,
    team2: 0,
  };
  score = '';

  constructor(team1, team2, odds) {
    this.team1 = team1;
    this.team2 = team2;
    this.odds = odds;
  }

  setScore() {
    this.score = this.team1.score + ':' + this.team2.score;
  }

  allPlayers() {
    return [...this.team1.players, ...this.team2.players];
  }

  likelyWinner() {
    let winningMessage = (this.odds.team1 > this.odds.team2 && `${this.team1.teamName} is more likely to win.`);
    let winningMessage =
      this.odds.team1 < this.odds.team2 &&
      `${this.team2.teamName} is more likely to win.`;
    return winningMessage;
  }


}

let BayernMunich = new Team('Bayern Munich', 'Borrussia Dortmund');
BayernMunich.addPlayers(
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski'
);
BayernMunich.score = 4;
let BorrussiaDortmund = new Team('Borrussia Dortmund', 'Bayern Munich');
BorrussiaDortmund.addPlayers(
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze'
);

BayernMunich.printGoals('Ted', 'Truly', 'Plural');

let matchUp = new Game(BayernMunich, BorrussiaDortmund, {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
});

matchUp.setScore();

matchUp.team2.printGoals('unruly', 'ruly');

matchUp.setScore();

console.log(matchUp.score);

console.log(matchUp.allPlayers());

let gk,
  others = matchUp.team1.getFieldPositions();
console.log(others);

console.log(matchUp.likelyWinner());


export default Team;
export default Game;