import React, { createContext, useReducer, useEffect } from "react";
import { ExpenseReducer } from "../reducers/ExpenseReducer";

export const ExpenseContext = createContext();
const ExpenseContextProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(ExpenseReducer, [], () => {
    return JSON.parse(localStorage.getItem("transactions") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);
  return (
    <ExpenseContext.Provider value={{ transactions, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;
