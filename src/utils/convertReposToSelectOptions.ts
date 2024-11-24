import {SelectProps} from "../components/select/Select"
import Repository from "../types/Repository"

const convertReposToSelectOptions = (
	repos: Repository[]
): SelectProps["options"] => [
	{value: "", label: ""}, // Empty option to allow the user to unselect
	...repos.map(({languages_url, name}) => ({
		value: languages_url,
		label: name,
	})),
]
export default convertReposToSelectOptions
