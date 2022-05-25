const data = require('../data/zoo_data');

const array = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
function countEntrants(entrants) {
  return entrants.reduce((acc, curr) => {
    if (curr.age < 18) {
      acc.child += 1;
    }
    if (curr.age >= 18 && curr.age < 50) {
      acc.adult += 1;
    }
    if (curr.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}
function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  const { child: precoCrianca, adult: precoAdulto, senior: precoIdoso } = data.prices;
  return (child * precoCrianca + adult * precoAdulto + senior * precoIdoso);
}
console.log(calculateEntry(array));
module.exports = { calculateEntry, countEntrants };
