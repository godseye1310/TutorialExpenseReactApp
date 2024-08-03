import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {
	// console.log(props.chartData);
	//Received FilteredExpensesForChart Data from Expenses.jsx//
	return (
		<div>
			<Chart chartExpenses={props.filteredExpensesForChart} />
		</div>
	);
}

export default ExpensesChart;
