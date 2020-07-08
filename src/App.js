import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Transactions from "./components/Transactions";
import NewTransaction from "./components/NewTransaction";
import ExpenseContextProvider from "./contexts/ExpenseContext";

function App() {
  return (
    <div className="App">
      <ExpenseContextProvider>
        <Header />
        <Balance />
        <IncomeExpenses />
        <Transactions />
        <NewTransaction />
      </ExpenseContextProvider>
    </div>
  );
}

export default App;
