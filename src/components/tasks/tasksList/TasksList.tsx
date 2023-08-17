import TaskItem from '../taskItem/TaskItem';
import Dialog from '@mui/material/Dialog';
import AddTask from '../addTask/AddTask';
import Grid from '@mui/material/Grid';

import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AppState } from 'redux/store';
import { removeTask } from 'redux/listSlice';

type Props = {};

export default function TasksList({ }: Props) {
	const dispatch = useDispatch();
	const list = useSelector((state: AppState) => state.listSlice.todoList);

	const [activeUpdateTask, setActiveUpdateTask] = useState(false);

	const addTaskToList = () => {

		setActiveUpdateTask(true)
	}

	const closeDialog = () => {
		setActiveUpdateTask(false)
	}

	const deleteTask = (id: string) => {
		dispatch(removeTask(id))
	}

	const tasksList = useMemo(() => list.map(item => <TaskItem key={item.id} item={item} deleteTask={deleteTask} />), [list])

	return (
		<div>
			<Grid container direction={"column"} rowGap={"20px"}>
				{tasksList}
			</Grid>

			<button onClick={addTaskToList}>Add</button>
			<Dialog open={activeUpdateTask} sx={{p: 0}}>
				<AddTask closeDialog={closeDialog} />
			</Dialog>
		</div>
	)
}