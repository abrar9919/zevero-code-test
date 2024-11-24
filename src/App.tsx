import Button from "./components/button/Button"
import Container from "./components/container/Container"
import {AiOutlinePlus} from "react-icons/ai"
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

import useToggle from "./hooks/useToggle"
import Modal from "./components/modal/Modal"
import Select from "./components/select/Select"
import {useState} from "react"
import {useQuery} from "@tanstack/react-query"
import GITHUB_API_URL from "./apis/github"
import Repository from "./types/Repository"
import convertReposToSelectOptions from "./utils/convertReposToSelectOptions"
import PieChartData from "./types/PieChart"
import PieChart from "./components/pie-chart/PieChart"
import convertLanguageData from "./utils/convertLanguageData"

function App() {
	const {close, toggle, onToggle} = useToggle()
	const [selectedValue, setSelectedValue] = useState("")
	const {data} = useQuery({
		queryKey: ["repositories"],
		queryFn: async () => {
			const response = await fetch(GITHUB_API_URL)

			const data = (await response.json()) as {items: Repository[]}
			const dataForOptions = convertReposToSelectOptions(data.items)
			return dataForOptions
		},
	})

	const {data: pieChartData} = useQuery<PieChartData[]>({
		queryKey: ["repositoryLanguage", selectedValue],
		queryFn: async () => {
			if (selectedValue) {
				const response = await fetch(selectedValue)

				const data = (await response.json()) as Record<string, number>

				return convertLanguageData(data)
			}

			return []
		},
	})
	return (
		<Container
			title='Github Repository Language'
			className='min-h-[calc(100vh-32px)] m-4'
		>
			<Button
				onClick={() => onToggle()}
				className='bg-button px-4 py-2 flex justify-between items-center gap-2 text-white rounded-md'
			>
				<span>Open Github repositories</span>
				<AiOutlinePlus />
			</Button>
			<Modal
				isOpen={toggle}
				onClose={() => {
					close()
					setSelectedValue("")
				}}
				className='w-[800px]'
				title='Github Repository Language Pie Chart'
			>
				<Select
					selectedValue={selectedValue}
					options={data ?? []}
					className='w-full rounded-lg h-11 border-[##D0D5DD] border shadow-xs'
					handleChange={(event) => setSelectedValue(event.target.value)}
					label='Select Github repository'
				/>
				<div className='h-[500px]'>
					<PieChart
						data={pieChartData ?? []}
						margins={{bottom: 20, top: 20, right: 20, left: 20}}
						legends={[
							{
								anchor: "top-left",
								direction: "column",
								justify: false,
								translateX: 10,
								translateY: 56,
								itemsSpacing: 5,
								itemWidth: 100,
								itemHeight: 18,
								itemTextColor: "#999",
								itemDirection: "left-to-right",
								itemOpacity: 1,
								symbolSize: 18,
								symbolShape: "square",
							},
						]}
					/>
				</div>
				<div className='flex items-center gap-1 text-button'>
					<a href='' className='text-bold'>
						View details
					</a>
					<span>
						<MdOutlineKeyboardArrowRight className='text-base' />
					</span>
				</div>
			</Modal>
		</Container>
	)
}

export default App
