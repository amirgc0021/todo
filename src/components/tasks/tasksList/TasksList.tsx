import TaskItem from '../taskItem/TaskItem';
import Dialog from '@mui/material/Dialog';
import AddTask from '../addTask/AddTask';
import Grid from '@mui/material/Grid';

import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from 'redux/listSlice';

import type { AppState } from 'redux/store';
import type{ ItaskItem } from '../types';

type Props = {};

type TaskDialog = {
	open: boolean,
	taskData: ItaskItem | null
}

export default function TasksList({ }: Props) {
	const dispatch = useDispatch();
	const list = useSelector((state: AppState) => state.listSlice.todoList);

	const [activeUpdateTask, setActiveUpdateTask] = useState<TaskDialog>({open: false, taskData: null});

	const closeDialog = () => {
		setActiveUpdateTask({
			open: false,
			taskData: null
		})
	}

	const addTaskToList = () => {
		setActiveUpdateTask({
			open: true,
			taskData: null
		})
	}

	const deleteTask = (id: string) => {
		dispatch(removeTask(id))
	}

	const updateTask = (task: ItaskItem) => {
		setActiveUpdateTask({
			open: true,
			taskData: task
		})
	}

	const tasksList = useMemo(() => list.map(item => <TaskItem key={item.id} item={item} deleteTask={deleteTask} updateTask={updateTask} />), [list])

	return (
		<div>
			<Grid container direction={"column"} rowGap={"20px"}>
				{tasksList}
			</Grid>

			<button onClick={addTaskToList}>Add</button>
			<Dialog open={activeUpdateTask.open} sx={{p: 0}}>
				<AddTask task={activeUpdateTask.taskData} closeDialog={closeDialog} />
			</Dialog>
		</div>
	)
}