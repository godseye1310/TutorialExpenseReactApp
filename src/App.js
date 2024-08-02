import React, { useState } from "react";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const defaultExpenses = [
		{
			id: "1",
			date: new Date(2023, 7, 15),
			title: "Insurance",
			price: 100,
			location: "Bangalore",
		},
		{
			id: "2",
			date: new Date(2024, 3, 25),
			title: "Book",
			price: 10,
			location: "Delhi",
		},
		{
			id: "3",
			date: new Date(2025, 10, 11),
			title: "Pen",
			price: 1,
			location: "Hyderabad",
		},
		{
			id: "4",
			date: new Date(2024, 1, 14),
			title: "Laptop",
			price: 200,
			location: "Mumbai",
		},
	];

	//Adding the New Expense to the expense list so that it can also be rendered
	const [expenses, setExpenses] = useState(defaultExpenses);
	const receiveNewExpenseDataHandler = (receivedNewExpense) => {
		console.log(receivedNewExpense);
		setExpenses((prevExpense) => {
			return [receivedNewExpense, ...prevExpense];
		});
	};
	////////////////////////////////////////////////////////////////////////////////

	return (
		<div className="App">
			{/* <h1>Let's get Started</h1>
			<p>I am learning React</p> */}

			{/* Receiving expense data from expense form */}
			<NewExpense onAppExpenseData={receiveNewExpenseDataHandler} />
			<Expenses myExpense={expenses} />
		</div>
	);
}

export default App;
