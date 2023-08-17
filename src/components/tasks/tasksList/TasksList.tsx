import TaskItem from '../taskItem/TaskItem';
import Dialog from '@mui/material/Dialog';
import AddTask from '../addTask/AddTask';
import Grid from '@mui/material/Grid';

import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import type { AppState } from 'redux/store';

type Props = {};

export default function TasksList({ }: Props) {
	const list = useSelector((state: AppState) => state.listSlice.todoList);

	const [activeUpdateTask, setActiveUpdateTask] = useState(false);

	const addTaskToList = () => {

		setActiveUpdateTask(true)
	}

	const closeDialog = () => {
		setActiveUpdateTask(false)
	}

	const tasksList = useMemo(() => list.map(item => <TaskItem key={item.id} item={item} />), [list])

	return (
		<div>
			<Grid container direction={"column"} rowGap={"20px"}>
				{tasksList}
			</Grid>

			<button onClick={addTaskToList}>Add</button>
			<Dialog open={activeUpdateTask} sx={{p: 0}}>
				<AddTask clsoeDialog={closeDialog} />
			</Dialog>
		</div>
	)
}