import React from "react";

const ExpenseListItem = ({ expense }) => {
  return (
    <tr>
      <td>
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date(expense.date))}
      </td>
      <td>{expense.typeName}</td>
      <td>{expense.name}</td>
      <td>
        {new Intl.NumberFormat("tr-TR", {
          style: "currency",
          currency: "TRY",
        }).format(expense.amount)}
      </td>
      <td>{expense.paidCount}</td>
      <td style={expense.unPaidCount > 0 ? { color: "red" } : null}>
        {expense.unPaidCount}
      </td>
    </tr>
  );
};

export default ExpenseListItem;
