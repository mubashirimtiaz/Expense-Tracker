import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import Transactions from "./components/Transactions";
import NewTransaction from "./components/NewTransaction";
import ExpenseContextProvider from "./contexts/ExpenseContext";
import Footer from "../../covid19-tracker/src/components/Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default App;
