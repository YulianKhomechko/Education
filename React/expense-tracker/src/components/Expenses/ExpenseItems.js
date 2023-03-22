import { useState } from 'react';

import './ExpenseItems.css';

import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function ExpenseItems(props) {
	const { expenses } = props;

	const [filterYear, setFilterYear] = useState('2022');

	function filterChangeHandler(selectedYear) {
		setFilterYear(selectedYear);
	}

	const filteredExpenses = expenses.filter(expense => {
		return expense.date.getFullYear() + '' === filterYear;
	});

	return (
		<div className="expense-items">
			<ExpenseFilter
				defaultYear={filterYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList expenses={filteredExpenses} />
		</div>
	);
}

export default ExpenseItems;
