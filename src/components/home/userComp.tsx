// import React from 'react';
import {UserType} from "./home.tsx";

interface UserCompProps {
	user: UserType;
}

export const UserComp = (props: UserCompProps) => {
	const {user} = props
	return (
		<li key={user.id}
		    className="border-10 rounded-lg border-green-600 pb-4 font-bold m-8 text-center">
			<div className="">{user.userName}</div>
			<span>{user.text}</span>
		</li>
	);
};

