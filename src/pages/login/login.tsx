import { useForm } from 'react-hook-form'
import s from './login.module.css'
import {useState} from 'react'


type LoginProps = {
  onSubmitHandler: (data: LoginType) => void
}

export type LoginType = {
  email: string
  password: string
}

export function Login({onSubmitHandler}: LoginProps) {
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<LoginType>()
  const [isPasswordStrong, setIsPasswordStrong] = useState(false)

  const onSubmit = (data: LoginType) => {
    onSubmitHandler(data)
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
      <h3>Welcome Login component!</h3>
      <div>
        <div>
          <form className={s.container} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={s.loginItem}
              placeholder={'Введите почту'}
              type="email"
              value = {'your_email@example.com'}
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

            <input
              className={s.loginItem}
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
              <span style={{ color: 'green' }}>Пароль надежный</span>
            )}
            <button type="submit" className={s.buttonLogin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
