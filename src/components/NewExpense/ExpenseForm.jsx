import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	//Managing Multiple States//
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

	//Multiple to One State format//
	// const initialData = {
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// };
	// const [userInput, setUserInput] = useState(initialData);

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);

		//Multiple to One State - Syntax to Update State//
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		//Multiple to One State - Syntax to Update State//
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredAmount: event.target.value };
		// });
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			price: enteredAmount,
			date: new Date(enteredDate),
		};
		// console.log(expenseData);
		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						value={enteredTitle}
						id="title"
						onChange={titleChangeHandler}
						required
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						value={enteredAmount}
						id="amount"
						onChange={amountChangeHandler}
						required
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						value={enteredDate}
						id="date"
						min="2023-01-01"
						max="2024-12-31"
						onChange={dateChangeHandler}
						required
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;