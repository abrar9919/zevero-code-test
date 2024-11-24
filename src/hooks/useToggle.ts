import {useState} from "react"

const useToggle = (initialValue = false) => {
	const [toggle, setToggle] = useState(initialValue)

	function onToggle() {
		setToggle(!toggle)
	}
	function close() {
		setToggle(false)
	}

	function open() {
		setToggle(true)
	}
	return {toggle, onToggle, open, close}
}

export default useToggle
