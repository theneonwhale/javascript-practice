const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  if (Object.keys(employees).length === 0) {
    return '';
  }
  const employeesArr = Object.keys(employees);
  const tasksArr = Object.values(employees);
  let max = tasksArr[0];
  let index = 0;
  let best = '';
  for (let i = 0; i < tasksArr.length; i += 1) {
    if (tasksArr[i] > max) {
      max = tasksArr[i];
      index = i;
    }
  }
  best += employeesArr[index];
  return best;

  // if (Object.keys(employees).length === 0) {
  //   return '';
  // }
  // const entries = Object.entries(employees);
  // let bestEmployee = entries[0];
  // for (const employee of entries) {
  //   if (employee[1] > bestEmployee[1]) {
  //     bestEmployee = employee;
  //   }
  // }
  // return bestEmployee[0];
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

const sell = {};
console.log(findBestEmployee(sell));

// Поиск наибольшего значения среди свойств объекта

// Напиши функцию findBestEmployee(employees),
// которая принимает объект сотрудников
// и возвращает имя самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".
