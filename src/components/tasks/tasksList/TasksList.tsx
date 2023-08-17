import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from 'redux/listSlice';

import TaskItem from '../taskItem/TaskItem';
import Dialog from '@mui/material/Dialog';
import AddTask from '../addTask/AddTask';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import type { AppState } from 'redux/store';
import type { ItaskItem } from '../types';

import AddIcon from '@mui/icons-material/Add';

type Props = {};

type TaskDialog = {
	open: boolean,
	taskData: ItaskItem | null
}

export default function TasksList({ }: Props) {
	const dispatch = useDispatch();
	const list = useSelector((state: AppState) => state.listSlice.todoList);

	const [activeUpdateTask, setActiveUpdateTask] = useState<TaskDialog>({ open: false, taskData: null });

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

	const openTaskDialogInEditMode = (task: ItaskItem) => {
		setActiveUpdateTask({
			open: true,
			taskData: task
		})
	}

	const tasksList = useMemo(() => list.map(item => <TaskItem key={item.id} item={item} deleteTask={deleteTask} updateTask={openTaskDialogInEditMode} />), [list])

	return (
		<Box maxWidth="650px" margin="20px auto 0">
			<Stack direction="row" marginBottom="30px">
				<Typography variant="h1">TODO app</Typography>
				<Button variant='contained' onClick={addTaskToList}><AddIcon /></Button>
			</Stack>

			<Grid container direction={"column"} rowGap={"10px"}>
				{tasksList}
			</Grid>

			<Dialog open={activeUpdateTask.open} sx={{ p: 0 }} onClose={closeDialog}>
				<AddTask task={activeUpdateTask.taskData} closeDialog={closeDialog} />
			</Dialog>
		</Box>
	)
}