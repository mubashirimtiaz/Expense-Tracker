import React, { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";
const Balance = () => {
  const { transactions } = useContext(ExpenseContext);
  const totalAmount = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, curr) => {
      return (acc += curr);
    }, 0)
    .toFixed(2);
  return (
    <div className="mx-2">
      <h3 className="text-secondary">YOUR BALANCE</h3>
      <p className="display-4">
        <span className="display-3">$</span>
        {totalAmount}{" "}
        <p
          className="text-danger font-weight-bold"
          style={{ fontSize: "1rem" }}
        >
          {totalAmount < 0 ? "You have become a debtor 😅" : ""}
        </p>
      </p>
    </div>
  );
};

export default Balance;
