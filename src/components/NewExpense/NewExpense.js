import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [addingExpense, setAddingExpense] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    // Fetching data from Expense Form
    const expenseData = {
      ...enteredExpenseData,
      // Give random id number
      id: Math.random().toString(),
    };

    // Using function from App.js
    props.onAddExpense(expenseData);
    // Close form after submitting
    setAddingExpense(false);
  };

  const addingExpenseHandler = () => {
    setAddingExpense(true);
  };

  const stopAddingExpenseHandler = () => {
    setAddingExpense(false);
  };

  return (
    <div className="new-expense">
      {!addingExpense && (
        <button onClick={addingExpenseHandler}>Add New Expense</button>
      )}
      {addingExpense && (
        <ExpenseForm
          onFormSubmit={saveExpenseData}
          onCancel={stopAddingExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
