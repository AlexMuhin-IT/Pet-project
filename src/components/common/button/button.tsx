// import React from 'react';


interface ButtonProps {
	name: string;
	onClick?: () => void; // Необязательный обработчик события
	className?: string;   // Необязательный класс для стилизации
	disabled?: boolean;   // Необязательный флаг для отключения кнопки
}

export function Button(props: ButtonProps) {
	const {onClick, className, disabled} = props;
	return (
		<button onClick={onClick}
		        className={className}
		        disabled={disabled}
		>{props.name}</button>
	);
}

