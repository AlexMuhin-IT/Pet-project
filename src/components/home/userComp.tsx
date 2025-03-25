// import React from 'react';

import {UserType} from "../../app/api/home/type/type.ts";

interface UserCompProps {
	user: UserType;
}

export const UserComp = (props: UserCompProps) => {
	const {user} = props
	return (
		<li key={user.id}
		    className="border-5 rounded-lg border-green-600 pb-4 font-bold m-8 text-center w-100">
			<div className="">{user.userName}</div>
			<span>{user.text}</span>
		</li>
	);
};

