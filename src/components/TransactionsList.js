import React, { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

const TransactionsList = ({ transaction }) => {
  const { dispatch } = useContext(ExpenseContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  const handleRemoveTransaction = () => {
    dispatch({ type: "REMOVE_TRANSACTION", id: transaction.id });
  };
  return (
    <div>
      <li
        className={
          transaction.amount < 0
            ? "TransactionList-list minus"
            : "TransactionList-list plus"
        }
      >
        <span>{transaction.text}</span>
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <span
          className="TransactionList-list-delete"
          onClick={handleRemoveTransaction}
        >
          X
        </span>
      </li>
    </div>
  );
};

export default TransactionsList;
