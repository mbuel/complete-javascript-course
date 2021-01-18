const findExtremeTemps = temps => {
    console.log(temps);
    let results = {
      min: temps[0],
      max: temps[0],
    };
    for (let temp of temps) {
      results.min = temp < results.min ? temp : results.min;
      results.max = temp > results.max ? temp : results.max;

    }
    return results;
}

console.log(findExtremeTemps([-5, 5, -13, 54, 23, 55]));

console.table(findExtremeTemps([-5, 5, -13, 54, 23, 55]));