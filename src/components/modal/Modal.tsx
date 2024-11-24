import React from "react"
import {
	DialogPanel,
	DialogTitle,
	Dialog as HeadlessDialog,
} from "@headlessui/react"
import {IoMdClose} from "react-icons/io"
import Button from "../button/Button"
import clsx from "clsx"

interface DialogProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: React.ReactNode
	size?: "sm" | "md" | "lg"
	className?: string
}

const Modal: React.FC<DialogProps> = ({
	isOpen,
	onClose,
	title,
	children,
	className,
}) => {
	return (
		<HeadlessDialog
			open={isOpen}
			onClose={onClose}
			transition
			className='fixed inset-0 flex w-screen items-center justify-center  bg-gray-950/70 p-4 transition duration-300 ease-out data-[closed]:opacity-0'
		>
			<DialogPanel
				className={clsx("w-lg rounded-lg space-y-4 bg-white p-4", className)}
			>
				<div className='flex justify-between pb-4 items-center'>
					<DialogTitle className='pr-4'>{title}</DialogTitle>
					<Button onClick={onClose}>
						<IoMdClose />
					</Button>
				</div>
				{children}
			</DialogPanel>
		</HeadlessDialog>
	)
}

export default Modal
