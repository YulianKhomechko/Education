import React from 'react';

import classes from './UsersList.module.css';

import Card from '../UI/Card';

function UsersList(props) {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.length === 0 && <p>No users found</p>}
				{props.users.map(user => (
					<li onClick={props.onDeleteUser.bind(this, user.id)} key={user.id}>
						{user.username} ({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
}

export default UsersList;
