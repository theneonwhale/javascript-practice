const logins = ['rotated', 'hugebig', 'littlepussy', 'batmanforever'];
// const loginToFind = 'littlepussy';
// let message = "User wasn't founded";

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = 'User was founded';
//     break;
// }
//   message = "User wasn't founded";
// }
// console.log(message, loginToFind);

// const message2 = logins.includes(loginToFind)
//   ? 'User was founded'
//   : "User wasn't founded";
// console.log(message2);

// console.log(logins.includes(loginToFind));

const findLogin = function (allLogins, loginToFind) {
  console.log(allLogins);
  console.log(loginToFind);

  return allLogins.includes(loginToFind)
    ? `User ${loginToFind} was founded`
    : `User ${loginToFind} wasn't founded`;
};

console.log(findLogin(logins, 'usgifu'));
console.log(findLogin(logins, 'hugebig'));
