const data = require('../data/zoo_data');

const { employees, species } = data;

const myEmployees = (worker) => employees.find((employe) => employe
  .id === worker.id || employe.firstName === worker
  .name || employe.lastName === worker.name);

const mySpecies = (worker) => species.filter((specie) => {
  if (!worker) {
    throw new Error('Informações inválidas');
  }
  return worker.responsibleFor.includes(specie.id);
});

const allEmployees = () => employees.map((employee) => {
  const getSpecie = mySpecies(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecie.map((specie) => specie.name),
    locations: getSpecie.map((element) => element.location),
  };
});

function getEmployeesCoverage(objeto) {
  if (!objeto) {
    return allEmployees();
  }
  const getEmploye = myEmployees(objeto);
  const getSpecie = mySpecies(getEmploye);
  return {
    id: getEmploye.id,
    fullName: `${getEmploye.firstName} ${getEmploye.lastName}`,
    species: getSpecie.map((specie) => specie.name),
    locations: getSpecie.map((element) => element.location),
  };
}
module.exports = getEmployeesCoverage;
