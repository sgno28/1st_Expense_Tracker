import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

  const saveExpenseData = (enteredExpenseData) => {
    // Fetching data from Expense Form
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    // Using function from App.js
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onFormSubmit={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
