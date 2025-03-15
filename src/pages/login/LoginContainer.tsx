import {Login} from "./login.tsx";
import {useContext} from "react";
import axios from "axios";
import {AuthContext} from "../../routes/__root.tsx";
import {useNavigate} from "@tanstack/react-router";

export const LoginContainer = () => {

	const {login} = useContext(AuthContext)
	const navigate = useNavigate();

	const onSubmitHandler = async (data: any) => {
		// console.log('Ваши данные улетели на сервер')
		try {
			const response = await axios.post('http://localhost:5000/api/auth/login',
				{
					email: data.email,
					password: data.password
				})
			if (!response.data.token) {
				throw new Error('Token not found in response');
			}
			login(response.data.token)
			navigate({to: '/'})
		} catch (error) {
			console.log('Ошибка при получении данных:', error);
			alert('Ошибка при входе. Проверьте email и пароль.');
		}
	}
	return <Login
		onSubmitHandler={onSubmitHandler}
	/>
}