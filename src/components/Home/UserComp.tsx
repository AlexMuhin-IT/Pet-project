// import React from 'react';

export const UserComp = (props) => {
	const {user} = props
	return (
		<li key={user.id} className="review-card">
			<div className="user">{user.userName}</div>
			<span>{user.text}</span>
		</li>
	);
};

