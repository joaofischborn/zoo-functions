const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const obj = {};
  if (animal === undefined) {
    species.forEach((specie) => {
      obj[specie.name] = specie.residents.length;
    });
    return obj;
  }
  const { residents } = species.find((specie) => specie.name === animal.specie);
  if (animal.sex) {
    return residents.filter((resident) => resident.sex === animal.sex).length;
  }
  return residents.length;
}

module.exports = countAnimals;
