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

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={changeFilterHandler}
			/>
			{props.myExpense.map((expenseData) => {
				return (
					<ExpenseItem
						key={expenseData.id}
						date={expenseData.date}
						title={expenseData.title}
						price={expenseData.price}
						location={expenseData.location}
					/>
				);
			})}
		</Card>
	);
}

export default Expenses;
