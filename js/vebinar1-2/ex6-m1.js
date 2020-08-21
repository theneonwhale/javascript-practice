// for (let i = 100; i > 10; i -= 1) {
//   console.log(i);
// }
// console.log(464);

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 9;
// let totalSalary = 0;

// for (let i = 1; i < employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//   console.log(`Salary ${i} - ${salary}`);
//   totalSalary += salary;
// }
// console.log('Total salary ', totalSalary);

const min = 0;
const max = 370;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log('Even:', i);
    continue;
  }
  total += i;
  console.log('Odd:', i);
  // console.log(i);
}
console.log('total', total);
