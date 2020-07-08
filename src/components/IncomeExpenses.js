import React, { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";
const IncomeExpenses = () => {
  const { transactions } = useContext(ExpenseContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((cash) => cash >= 0)
    .reduce((acc, curr) => {
      return (acc += curr);
    }, 0);
  const expense = amount
    .filter((cash) => cash < 0)
    .reduce((acc, curr) => {
      return (acc += curr);
    }, 0);
  return (
    <div
      className="IncomeExpenses d-flex text-center py-2 mx-2 bg-white"
      style={{ justifyContent: "space-around", alignItems: "center" }}
    >
      <div>
        <h4 className="text-primary">Income</h4>
        <p style={{ fontSize: "1.2rem" }} className="text-muted ">
          <span style={{ fontSize: "1.4rem" }} className="text-dark">
            $
          </span>
          {income}
        </p>
      </div>

      <div>
        <h4 className="text-danger">Expense</h4>
        <p style={{ fontSize: "1.2rem" }} className="text-muted">
          <span style={{ fontSize: "1.4rem" }} className="text-dark">
            $
          </span>
          {expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
