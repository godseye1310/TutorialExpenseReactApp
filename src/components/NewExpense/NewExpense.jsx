import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const saveExpenseDataHandeler = (enteredExpenseData) => {
		// console.log(enteredExpenseData);
		const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
		// console.log(expenseData);
		props.onAppExpenseData(expenseData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandeler} />
		</div>
	);
};

export default NewExpense;
