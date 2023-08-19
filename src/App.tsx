import { Stack } from '@mui/material'
import { Lists } from 'components/lists'
import { TaskList } from 'components/tasks'

export default function App() {

	return (
		<Stack direction="row" columnGap="50px" useFlexGap>
			<Lists />
			<TaskList />
		</Stack>
	)
}