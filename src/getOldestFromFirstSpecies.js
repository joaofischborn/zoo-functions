const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const peoples = employees.filter((people) =>
    id.includes(people.id)).map((responsible) => responsible.responsibleFor[0]);
  const animals = species.find((animal) => animal.id.includes(peoples)).residents;
  const ages = animals.reduce((acc, elemento) => elemento.age);
  const result = animals.find((animal) => animal.age >= ages);
  return [result.name, result.sex, result.age];
}

module.exports = getOldestFromFirstSpecies;
