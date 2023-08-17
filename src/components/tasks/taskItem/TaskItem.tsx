import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import CheckBox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
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
	openEditTaskdialog: (task: ItaskItem) => void
}

export default function TaskItem({ item, deleteTask, openEditTaskdialog }: Props) {
	const dispatch = useDispatch();

	const updateTaskDoneState = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(editTask({ ...item, done: event.target.checked }))
	}

	const removeTask = () => {
		deleteTask(item.id)
	}

	const openEditDialog = () => {
		openEditTaskdialog(item)
	}

	return (
		<Stack className={styles.wrapper} sx={{ bgcolor: "secondary.light", p: 0, borderRadius: "10px", color: "secondary.contrastText" }} alignItems="center" direction="row">
			<Box>
				<CheckBox checked={item.done} checkedIcon={<CheckBoxIcon />} onChange={updateTaskDoneState} />
			</Box>

			<Box>
				<Typography variant="h2">{item.title}</Typography>
				<Typography variant="subtitle1">{toDate(item.timestamp)}</Typography>
				<Typography variant="body2">{item.description}</Typography>
			</Box>

			<Stack marginLeft="auto" direction="row" gap={"10px"} useFlexGap>
				<IconButton aria-label="delete" color='primary' onClick={removeTask}>
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="edit" color='primary' onClick={openEditDialog}>
					<EditIcon />
				</IconButton>
				{/* <IconButton variant='contained' color='primary' type='submit' >
					<DeleteIcon />
				</IconButton>

				<IconButton variant='contained' sx={{ backgroundColor: 'primary.light' }} type='submit' >
					<EditIcon />
				</IconButton> */}
			</Stack>
		</Stack>
	)
}