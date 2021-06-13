const printTemps = temps => {
    return temps.reduce((accumulator, temp, index) => {
        return accumulator + ` ${temp}°C in ${index + 1} ${(index === 0) ? 'day' : 'days'} ...`;
    }, '...');
}

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

console.warn(printTemps(testData1));

console.warn(printTemps(testData2));