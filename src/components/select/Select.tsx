import {Field, Select as HeadlessUISelect, Label} from "@headlessui/react"
import clsx from "clsx"

export interface SelectProps {
	options: {
		label: string
		value: string
	}[]
	selectedValue: string
	handleChange: React.ChangeEventHandler<HTMLSelectElement>
	label?: string
	className?: string
}

const Select = ({
	options,
	handleChange,
	selectedValue,
	label,
	className,
}: SelectProps) => {
	return (
		<>
			<Field>
				{label && <Label className='flex pb-1'>{label}</Label>}
				<HeadlessUISelect
					name='status'
					className={clsx(
						"border data-[hover]:shadow data-[focus]:bg-blue-100",
						className
					)}
					aria-label='Project status'
					onChange={handleChange}
					value={selectedValue}
				>
					{options.map(({value, label}) => (
						<option value={value} key={value}>
							{label}
						</option>
					))}
				</HeadlessUISelect>
			</Field>
		</>
	)
}

export default Select
