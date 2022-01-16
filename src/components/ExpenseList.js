import axios from "axios";
import React, { useEffect, useState } from "react";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = () => {
  const [expenseList, setExpenseList] = useState([]);

  useEffect(async () => {
    await axios.get("Expenses").then((res) => {
      if (res.data.success) {
        setExpenseList([...res.data.data]);
      }
    });
  }, []);

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-1">Tarih</th>
            <th className="col-2">Gider Türü</th>
            <th className="col-2">Gider İsmi</th>
            <th className="col-1">Tutar/Konut</th>
            <th className="col-3">Tamamlanan Ödeme</th>
            <th className="col-2">Bekleyen Ödeme</th>
          </tr>
        </thead>
        {expenseList && (
          <tbody>
            {expenseList.map((expense) => {
              return <ExpenseListItem key={expense.id} expense={expense}></ExpenseListItem>;
            })}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ExpenseList;
