// useState is a React hook
// import { useState } from 'react';

// Import css to use in component
import './ExpenseItem.css';

// Import another component into this component
import Card from './../UI/Card';
import ExpenseDate from './ExpenseDate';

// Repeat the filename in the name of function

// A component in React is just a JavaScript function
function ExpenseItem(props) {
	const { title, amount, date } = props;
	// we will get one parameter in any component we use. It will be an object which holds all recieved attribues as properties(props)

	// useState returns array. First value is value itself. Second element is update function. Name funciton with set prefix

	// return jsx code
	return (
		// Wrap HTML code into parentheses
		// We can return only one root element
		<Card className="expense-item">
			{/* you can run basic JavaScript expressions inside curly braces */}
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{amount}$</div>
			</div>
		</Card>
	);
}

// Export component
export default ExpenseItem;

// This is stateless / presentational component
