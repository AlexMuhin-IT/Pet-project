// import React, { useEffect, useState } from 'react';

import {useContext, useEffect, useState} from "react";
import {UserComp} from "./userComp.tsx";
import {AuthContext} from "../../pages/__root.tsx";
import {Login} from "../../pages/login/login.tsx";
import {Posts} from "../../pages/post/posts.tsx";

export interface AuthContextType {
	isAuthenticated: boolean;
	login: (token: string) => void,
	logout: () => void,
}

export interface UserType {
	id: number;
	userName: string;
	text: string;
	isLoggedIn: boolean;
}

const Home = () => {
	const {isAuthenticated} = useContext<AuthContextType>(AuthContext);
	const [users, setUsers] = useState<UserType[]>([]);


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
					new Error('Network response was not ok');
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
			<ul >
				{isAuthenticated ? (
					<div className="review-list">{users.map(user => (
							<UserComp key={user.id} user={user}/>))}
					</div>
					): (<Login/>)
				}
			</ul>
			{isAuthenticated ? <Posts/> : null}
		</div>
	);
};

export default Home;
