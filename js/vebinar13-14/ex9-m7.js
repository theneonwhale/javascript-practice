import transactionHistory from './transactions.js';

const makeTransactionTableRawMarkup = ({
  id,
  amount,
  date,
  business,
  type,
  name,
  account,
}) => {
  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
};

console.log(transactionHistory);
console.log(makeTransactionTableRawMarkup(transactionHistory[0]));
const tableEl = document.querySelector('.js-transaction-table');
const makeTransactionTableRaws = transactionHistory
  .map(makeTransactionTableRawMarkup)
  .join('');
console.log('makeTransactionTableRaws', makeTransactionTableRaws);
tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRaws);
