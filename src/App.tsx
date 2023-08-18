import { Stack } from '@mui/material'
import { Lists } from 'components/lists'
import { TaskList } from 'components/tasks'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import type { AppState } from 'redux/store'

type Props = {}

export default function App({}: Props) {

	return (
		<Stack direction="row" columnGap="50px" useFlexGap>
			<Lists />
			<TaskList />
		</Stack>
	)
}