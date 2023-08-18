import { Stack } from '@mui/material'
import { Lists } from 'components/lists'
import { TaskList } from 'components/tasks'

type Props = {}

export default function App({}: Props) {

	return (
		<Stack direction="row" columnGap="50px" useFlexGap>
			<Lists />
			<TaskList />
		</Stack>
	)
}