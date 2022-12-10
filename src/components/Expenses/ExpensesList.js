import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExepensesList = (props) => {
  let filteredYear = props.selectedYear  
  if (props.items.length === 0) {
    
    return <h2 className="expenses-list__fallback">Found no expenses for {filteredYear}.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          // Custom prop that helps react identify individual items
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExepensesList;
