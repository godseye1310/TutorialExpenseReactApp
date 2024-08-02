import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../Wrapper/Card";

function Expenses(props) {
	// console.log(props.myExpense);
	const [filteredYear, setFilteredYear] = useState("2023");

	const changeFilterHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.myExpense.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	let expenseContent = <p>No expense found</p>;
	let oneexpenseContent = <p>Only one expense here. Please add more</p>;

	if (filteredExpenses.length > 0) {
		expenseContent = filteredExpenses.map((expenseData) => {
			return (
				<ExpenseItem
					key={expenseData.id}
					date={expenseData.date}
					title={expenseData.title}
					price={expenseData.price}
					location={expenseData.location}
				/>
			);
		});
	}

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={changeFilterHandler}
			/>
			{expenseContent}
			{filteredExpenses.length === 1 && oneexpenseContent}
		</Card>
	);
}

export default Expenses;
