import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppState } from 'redux/store';
import TaskItem from '../taskItem/TaskItem';
import Modal from '@mui/material/Modal';
import AddTask from '../addTask/AddTask';
import { addTask } from 'redux/listSlice';
import Grid from '@mui/material/Grid';

type Props = {};

export default function TasksList({ }: Props) {
	const list = useSelector((state: AppState) => state.listSlice.todoList);
	const dispatch = useDispatch();

	const [activeUpdateTask, setActiveUpdateTask] = useState(null);

	const addTaskToList = () => {
		dispatch(addTask({
			title: "amir",
			description: "new task",
			priority: "high"
		}))
	}

	const tasksList = useMemo(() => list.map(item => <TaskItem key={item.id} item={item} />), [list])

	return (
		<div>
			<Grid container direction={"column"} rowGap={"20px"}>
				{tasksList}
			</Grid>

			<button onClick={addTaskToList}>Add</button>
			<Modal open={false}>
				<AddTask />
			</Modal>
		</div>
	)
}