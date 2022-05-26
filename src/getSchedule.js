const data = require('../data/zoo_data');

const { species, hours } = data;

const days = Object.keys(hours);

const animals = species.map((specie) => specie.name);

function getDay(day) {
  if (day === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species.filter((element) => element.availability
      .includes(day)).map((element) => element.name),
  };
}

function getSchedule(scheduleTarget) {
  if (animals.includes(scheduleTarget)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }
  if (days.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: getDay(scheduleTarget),
    };
  }
  return days.reduce((acc, element) => {
    acc[element] = getDay(element);
    return acc;
  }, {});
}

module.exports = getSchedule;
