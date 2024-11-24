import React, {ReactNode} from "react"
import clsx from "clsx"

interface ContainerProps {
	children: ReactNode
	className?: string
	title: string
}

const Container: React.FC<ContainerProps> = ({children, className, title}) => {
	return (
		<div className={clsx("bg-container rounded-xl px-4 py-4", className)}>
			<h1 className='pb-4 text-h1'>{title}</h1>
			{children}
		</div>
	)
}

export default Container
