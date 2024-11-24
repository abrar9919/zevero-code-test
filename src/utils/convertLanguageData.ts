import PieChartData from "../types/PieChart"

const convertLanguageData = (data: Record<string, number>): PieChartData[] => {
	return Object.entries(data).map(([language, lines]) => ({
		id: language,
		value: lines,
	}))
}

export default convertLanguageData
