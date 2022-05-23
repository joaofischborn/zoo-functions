const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((anm) => anm.name === animal)
    .residents.every((idade) => idade.age >= age);
}
getAnimalsOlderThan('otters', 7);

module.exports = getAnimalsOlderThan;
