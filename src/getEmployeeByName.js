const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((elemento) => employeeName === elemento
    .firstName || employeeName === elemento.lastName);
}
getEmployeeByName(employees);
module.exports = getEmployeeByName;
