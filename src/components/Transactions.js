import React, { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";
import TransactionsList from "./TransactionsList";

const Transactions = () => {
  const { transactions } = useContext(ExpenseContext);
  return transactions.length ? (
    <div className="mx-2">
      <h4 className="mt-3 text-secondary">History</h4>
      <ul className="p-0 px-2 mt-3" style={{ listStyleType: "none" }}>
        {transactions.map((transaction) => (
          <TransactionsList key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="mx-2">
      <h4 className="mt-3 text-secondary">History</h4>

      <p className="text-center text-muted" style={{ fontSize: "1.3rem " }}>
        No transaction to display{" "}
        <span role="img" aria-label="img">
          😊
        </span>
      </p>
    </div>
  );
};

export default Transactions;
