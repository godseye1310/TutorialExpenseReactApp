import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList/ExpenseList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
	// Changing the state for Selected Year//
	const [filteredYear, setFilteredYear] = useState("2023");
	const changeFilterHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	//Filtering the Expense List according to the Selected Year//
	const filteredExpenses = props.myExpense.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	// let expenseContent = <p>No expense found</p>;

	//Displaying the Expense List for the Selected Year USING MAP fn//
	// if (filteredExpenses.length > 0) {
	// 	expenseContent = filteredExpenses.map((expenseData) => {
	// 		return (
	// 			<ExpenseItem
	// 				key={expenseData.id}
	// 				date={expenseData.date}
	// 				title={expenseData.title}
	// 				price={expenseData.price}
	// 				location={expenseData.location}
	// 			/>
	// 		);
	// 	});
	// }

	//Render All React Elements//
	return (
		<li>
			<Card className="expenses">
				<ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} />

				<ExpensesChart filteredExpensesForChart={filteredExpenses} />

				{/* {expenseContent} */}
				<ExpenseList itemsDisplayed={filteredExpenses} />
				{filteredExpenses.length === 1 && (
					<h3 className="one-item-fallback">Only one expense here. Want to add more</h3>
				)}
			</Card>
		</li>
	);
}

export default Expenses;
