import React from "react";
// import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card";

function ExpenseItem(props) {
	// const expenseDate = new Date(2023, 7, 15).toISOString();
	// const expenseTitle = "Insurance";
	// const expenseAmount = 50;
	// const expenseLocation = "Bangalore";

	// const [title, setTitle] = useState(props.title);

	// function buttonClickHandler(event) {
	// 	setTitle("New Title");
	// 	console.log("Button clicked");
	// }

	return (
		<Card className="expense-item">
			{/* This is an expense item!
			<p>Food - $5</p>
			<p>Petrol - $20</p>
			<p>Movie - $10</p> */}
			{/* <div>{expenseDate}</div>
			<div className="expense-item__location">{expenseLocation}</div>
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
				<div className="expense-item__price">${expenseAmount}</div>
			</div> */}
			{/* <div>{props.date.toISOString()}</div> */}

			<ExpenseDate calenderDate={props.date} />
			<div className="expense-item__location">{props.location}</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.price}</div>
			</div>
			{/* <button onClick={buttonClickHandler}>Change Title</button> */}
		</Card>
	);
}

export default ExpenseItem;
