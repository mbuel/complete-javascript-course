const game1 = () => {
  const dolphins = [44, 23, 71];
  const koalas = [65, 54, 49];
  determineWinner(dolphins, koalas);
};

const game2 = () => {
  const dolphins = [85, 54, 41];
  const koalas = [23, 34, 27];
  determineWinner(dolphins, koalas);
};

const getAverage = (scores) => {
  const sum = scores.reduce((sum, value) => sum + value);
  return sum / scores.length;
};

const determineWinner = (teamA, teamB) => {
  const team_a_average = getAverage(teamA);
  const team_b_average = getAverage(teamB);

  console.log(`team A: ${team_a_average}`);
  console.log(`team B: ${team_b_average}`);

  if (team_a_average / team_b_average >= 2) {
    console.log("Dolphins have a higher average score. 🏆");
  } else if (team_b_average / team_a_average >= 2) {
    console.log("Koala's have a higher average score! 🏆");
    // } else if (team_a_average === team_b_average) {
    //   console.log("teams tied");
  } else {
    console.log("teams are not tied, nor has either team won.");
  }
};
