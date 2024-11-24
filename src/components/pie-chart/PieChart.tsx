import {ResponsivePie} from "@nivo/pie"
import PieChartData from "../../types/PieChart"
import {LegendProps} from "@nivo/legends"
import {Margin} from "@nivo/core"

interface PieChartProps {
	data: PieChartData[]
	legends?: LegendProps[]
	enableArcLinkLabels?: boolean
	enableArcLabels?: boolean
	margins?: Partial<Margin>
}

const PieChart = ({
	data,
	margins,
	enableArcLabels = false,
	enableArcLinkLabels = false,
	legends,
}: PieChartProps) => {
	return (
		<ResponsivePie
			data={data}
			enableArcLabels={enableArcLabels}
			enableArcLinkLabels={enableArcLinkLabels}
			legends={legends}
			margin={margins}
			tooltip={({datum}) => (
				<div className='bg-white p-2 shadow rounded border'>
					<strong>{datum.label}:</strong> {datum.value}
				</div>
			)}
		/>
	)
}

export default PieChart
