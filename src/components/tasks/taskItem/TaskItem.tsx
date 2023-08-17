import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import CheckBox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { editTask } from 'redux/listSlice';

//types
import type { ItaskItem } from "../types"

// styles and utils
import styles from "./TaskItem.module.css";
import { toDate } from "utils/utils";

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Create';

type Props = {
	item: ItaskItem,
	deleteTask: (id: string) => void
	updateTask: (task: ItaskItem) => void
}

export default function TaskItem({ item, deleteTask, updateTask }: Props) {
	const dispatch = useDispatch();

	const updateTaskDoneState = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(editTask({...item, done: event.target.checked}))
	}

	const removeTask = () => {
		deleteTask(item.id)
	}

	const _updateTask = () => {
		updateTask(item)
	}

	return (
		<Stack className={styles.wrapper} sx={{ bgcolor: "primary.main", p: 0, borderRadius: "10px" }} alignItems="center" direction="row">
			<Box>
				<CheckBox checked={item.done} checkedIcon={<CheckBoxIcon color="secondary" />} onChange={updateTaskDoneState} />
			</Box>

			<Box>
				<Typography variant="h2">{item.title}</Typography>
				<Typography variant="subtitle1">{toDate(item.timestamp)}</Typography>
				<Typography variant="body2">{item.description}</Typography>
			</Box>

			<Stack marginLeft="auto" direction="row" gap={"10px"} useFlexGap>
				<Button variant='contained' color='secondary' type='submit' onClick={removeTask}>
					<DeleteIcon />
				</Button>

				<Button variant='contained' color='secondary' type='submit' onClick={_updateTask}>
					<EditIcon />
				</Button>
			</Stack>
		</Stack>
	)
}