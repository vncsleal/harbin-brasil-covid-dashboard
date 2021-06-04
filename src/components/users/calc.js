import covidData from './covidData';

function calc(region) {
  const data = covidData();
  switch (region) {
    case 'Brasil':
      const distinctDate = [...new Set(data.results.map((r) => r.date))];
      const distinctData = distinctDate.map((date) =>
        data.results.filter((x) => x.date === date)
      );
      const regionDataConfirmed = distinctData.map((c) =>
        c.reduce((acc, curr) => {
          return acc + curr.last_available_confirmed;
        }, 0)
      );
      const regionDataNewConfirmed = distinctData.map((c) =>
        c.reduce((acc, curr) => {
          return acc + curr.new_confirmed;
        }, 0)
      );
      const regionDataDeaths = distinctData.map((c) =>
        c.reduce((acc, curr) => {
          return acc + curr.last_available_deaths;
        }, 0)
      );
      const regionDataNewDeaths = distinctData.map((c) =>
        c.reduce((acc, curr) => {
          return acc + curr.new_deaths;
        }, 0)
      );
      var regionData = [];
      for (let i = 0; i < regionDataConfirmed.length; i++) {
        regionData[i] = {
          city: 'Brasil',
          state: 'BR',
          date: distinctDate[i],
          last_available_confirmed: regionDataConfirmed[i],
          new_confirmed: regionDataNewConfirmed[i],
          last_available_deaths: regionDataDeaths[i],
          new_deaths: regionDataNewDeaths[i],
        };
      }

      break;

    default:
      regionData = data.results.filter((cities) => cities.city === region);
      break;
  }

  regionData = regionData.reverse();

  var regionDataLast = regionData.filter((last) => last.date === '2021-05-28');

  return [regionData, regionDataLast];
}

export default calc;
