import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
	// console.log(props.chartExpenses);//Got Chart Expense Data from ExpenseChart.jsx//

	//Creating an Array of only Prices for Each Month//
	const expensesOnlyArray = props.chartExpenses.map((monthExpenseData) => {
		return monthExpenseData.price;
	}); // console.log(expensesOnlyArray);
	//Finding the MaxValue Price from all months from thae above price array//
	const maxValue = Math.max(...expensesOnlyArray);
	// console.log(maxValue);

	//Created a dummy Default Data for Chart Values
	const chartData = [
		{ expenseMonth: "Jan", expenseValue: 0 },
		{ expenseMonth: "Feb", expenseValue: 0 },
		{ expenseMonth: "Mar", expenseValue: 0 },
		{ expenseMonth: "Apr", expenseValue: 0 },
		{ expenseMonth: "May", expenseValue: 0 },
		{ expenseMonth: "Jun", expenseValue: 0 },
		{ expenseMonth: "Jul", expenseValue: 0 },
		{ expenseMonth: "Aug", expenseValue: 0 },
		{ expenseMonth: "Sep", expenseValue: 0 },
		{ expenseMonth: "Oct", expenseValue: 0 },
		{ expenseMonth: "Nov", expenseValue: 0 },
		{ expenseMonth: "Dec", expenseValue: 0 },
	];

	//Adding Expense Price to expenseValue//
	for (let expense of props.chartExpenses) {
		chartData[expense.date.getMonth()].expenseValue += expense.price;
	}

	//Rendering Chart Bar with its Values using MAP fn. //
	return (
		<div className="chart">
			{chartData.map((monthData) => {
				return (
					<ChartBar
						key={monthData.expenseMonth}
						label={monthData.expenseMonth}
						value={monthData.expenseValue}
						maxValue={maxValue}
					/>
				);
			})}
		</div>
	);
};

export default Chart;
