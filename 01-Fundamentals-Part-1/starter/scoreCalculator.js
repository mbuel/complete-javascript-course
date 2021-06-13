const game1 = () => {
  const dolphins = [96, 108, 89];
  const koalas = [97, 112, 101];
  determineWinner(dolphins, koalas);
};

const game2 = () => {
  const dolphins = [97, 112, 101];
  const koalas = [109, 95, 123];
  determineWinner(dolphins, koalas);
};

const game3 = () => {
  const dolphins = [97, 112, 101];
  const koalas = [109, 95, 106];
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
  if (team_a_average > team_b_average) {
    console.log("Dolphins have a higher average score. 🚗");
  } else if (team_b_average > team_a_average) {
    console.log("Koala's have a higher average score!");
  } else {
    console.log("teams tied");
  }
};
