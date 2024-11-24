import React, {ButtonHTMLAttributes} from "react"
import clsx from "clsx"
import {Button as HeadlessUiButton} from "@headlessui/react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	className?: string
}

const Button: React.FC<ButtonProps> = ({
	children,
	isLoading = false,
	leftIcon,
	rightIcon,
	className,
	...props
}) => {
	return (
		<HeadlessUiButton
			{...props}
			disabled={isLoading || props.disabled}
			className={clsx(
				"inline-flex items-center justify-center font-medium rounded",

				{
					"opacity-50 cursor-not-allowed": isLoading,
				},
				className
			)}
		>
			{leftIcon && <span className='mr-2'>{leftIcon}</span>}
			{children}
			{rightIcon && <span className='ml-2'>{rightIcon}</span>}
		</HeadlessUiButton>
	)
}

export default Button
