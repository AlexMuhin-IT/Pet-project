// import React, { useEffect, useState } from 'react';

import {useEffect, useState} from "react";
import {UserComp} from "./UserComp.tsx";

const MyFirstComponent = () => {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		// Функция для получения данных с сервера
		const fetchUsers = async () => {
			try {
				const response = await fetch('http://localhost:5000/api/users');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setUsers(data);
			} catch (error) {
				console.error('Ошибка при получении данных:', error);
			}
		};

		fetchUsers();
	}, []);

	// @ts-ignore
	return (
		<div>
			<h1>Список пользователей:</h1>
			<ul className="review-list">
				{users.map(user => (
					<UserComp key={user.id}
					          user={user}
					           />
				))}
			</ul>
		</div>
	);
};

export default MyFirstComponent;
