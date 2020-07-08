import React, { useState, useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

const NewTransaction = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TRANSACTION", transaction: { text, amount } });
    setText("");
    setAmount(0);
  };
  return (
    <div>
      <h4 className="mt-3 text-secondary mx-2">New Transaction</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          name="text"
          value={text}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="amount">
          Amount{" "}
          <p className="text-muted">
            <small>(negative-expense, positive-income)</small>
          </p>
        </label>
        <input
          name="amount"
          type="Number"
          id="amount"
          value={amount}
          onChange={handleAmountChange}
          required
        />
        <button className="btn btn-info">Add Transaction</button>
      </form>
    </div>
  );
};

export default NewTransaction;
