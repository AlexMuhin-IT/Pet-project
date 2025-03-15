// import React, { useEffect, useState } from 'react';

import {useContext, useEffect, useState} from "react";
import {UserComp} from "./UserComp.tsx";
import {AuthContext} from "../../routes/__root.tsx";

const Home = () => {
	const {isAuthenticated} = useContext(AuthContext);
	const [users, setUsers] = useState([]);


	useEffect(() => {
		// Функция для получения данных с сервера
		const fetchUsers = async () => {
			const token = localStorage.getItem("token");
			if (!token) {
				return
			}
			try {
				const response = await fetch('http://localhost:5000/api/users', {
					method: "GET",
					headers: {
						'Authorization': `Bearer ${token}`
					}
				});
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
				{isAuthenticated ? (
					<div>{users.map(user => (
						<UserComp key={user.id} user={user}/>
					))}
					</div>
				) : (
					<span> 'Нужно авторизоваться'</span>)
				}
			</ul>
		</div>
	);
};

export default Home;
