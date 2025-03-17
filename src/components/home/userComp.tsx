// import React from 'react';
import {UserType} from "./home.tsx";

interface UserCompProps {
	user: UserType;
}

export const UserComp = (props:UserCompProps) => {
	const {user} = props
	return (
		<li key={user.id} className="review-card">
			<div className="user">{user.userName}</div>
			<span>{user.text}</span>
		</li>
	);
};

