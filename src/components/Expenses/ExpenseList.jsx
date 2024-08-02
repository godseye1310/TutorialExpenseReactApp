import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
	//Conditional Return Statement Rendering
	if (props.itemsDisplayed.length === 0) {
		return <h2 className="expenses-list__fallback">No expenses found. Add Expense</h2>;
	}
	//Rendering the Expense List for the Selected Year USING MAP fn//
	return (
		<ul className="expenses-list">
			{props.itemsDisplayed.map((expenseItemData) => {
				return (
					<ExpenseItem
						key={expenseItemData.id}
						date={expenseItemData.date}
						title={expenseItemData.title}
						price={expenseItemData.price}
						location={expenseItemData.location}
					/>
				);
			})}
		</ul>
	);
}

export default ExpenseList;
