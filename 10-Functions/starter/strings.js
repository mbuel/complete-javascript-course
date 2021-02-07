'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival; bru0943384722; fao93766109; 11:45+_Delayed_Arrival; hel7439299980; fao93766109; 12:05+_Departure; fao93766109; lis2323639855;12:30';

let flightsSplit = flights.split('+');

const retStr = flightsSplit.map(flight => {
  let [type, depart, arrive, time] = flight.split(';');
  const padding = flight.length;
  console.log(
    `${type.includes('Delayed') ? '🛑' : '           '} ${type.replace(
      /_/g,
      ' '
    )} from ${depart
      .trim()
      .substring(0, 3)
      .toUpperCase()} to ${arrive
      .trim()
      .substring(0, 3)
      .toUpperCase()} (${time.replace(':', 'h')})`.padStart(padding)
  );

  //   return details.reduce((totalDetails, currentDetail) => {
  //     return (
  //       totalDetails + currentDetail.replace(/_/g, ' ').replace(':', 'h') + ' '
  //     );
  //   }, '');
});
