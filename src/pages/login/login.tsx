import {useForm} from 'react-hook-form'
import {useContext, useState} from 'react'
import axios from "axios";
import {AuthContext} from "../__root.tsx";
import {useNavigate} from "@tanstack/react-router";
import {Button} from "../../components/common";

export type LoginType = {
	email: string
	password: string
}

export function Login() {
	const {
		register,
		handleSubmit,
		// reset,
		formState: {errors},
	} = useForm<LoginType>()
	const [isPasswordStrong, setIsPasswordStrong] = useState(false)

	const {login} = useContext(AuthContext)
	const navigate = useNavigate();

	const onSubmit = async (data: LoginType) => {
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

	const validatePassword = (password: string) => {
		const strongPasswordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,20}$/i
		return strongPasswordRegex.test(password)
	}

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const password = e.target.value
		setIsPasswordStrong(validatePassword(password))
	}

	return (
		<div className="p-2">
			<h3 className="m-auto flex justify-center gap-10 text-4xl text-black-200 bg-green-200 mb-4">Введите зарегистрированные данные: </h3>
			<div>
				<div>
					<form className="flex flex-col items-center "
						// className={s.container}
						    onSubmit={handleSubmit(onSubmit)}>
						<input className="border-2 rounded-md p-2 mb-2"
							// className={s.loginItem}
							     placeholder={'Введите почту'}
							     type="email"
							     value={'your_email@example.com'}
							     {...register('email', {
								     required: 'Email is required',
								     pattern: {
									     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
									     // value = {formData.email},
									     message: 'Please enter your email address',
								     },
							     })}
						/>
						{errors.email && <span>{errors.email.message}</span>}

						<input className="border-2 rounded-md p-2 mb-2"
							// className={s.loginItem}
							     type="password"
							     placeholder={'Введите пароль'}
							     value={'YourPasswo12!!'}
							     {...register('password', {
								     required: 'Password is required',
								     pattern: {
									     value: /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,20}$/i,
									     message:
										     'Пароль должен содержать не менее 5 символов и обязательно должны быть: Заглавная буква A-Z, Цифра 0-9, и Спец символ',
								     },
								     onChange: handlePasswordChange,
							     })}
						/>
						{errors.password && <span>{errors.password.message}</span>}
						{isPasswordStrong && (
							<span
								// style={{color: 'green'}}
							>Пароль надежный</span>
						)}
						<Button name={'Login'}
						        className="border-2 rounded-md p-2 mb-2 max-w-32 hover:bg-fuchsia-500"
							// className={s.buttonLogin}
						/>
					</form>
				</div>
			</div>
		</div>
	)
}
