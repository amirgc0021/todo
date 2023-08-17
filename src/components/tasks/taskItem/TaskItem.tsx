import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import CheckBox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Grid';

//types
import type { ItaskItem } from "../types"

// styles and utils
import styles from "./TaskItem.module.css";
import { toDate } from "utils/utils";

type Props = {
	item: ItaskItem,
	deleteTask: (id: string) => void
}

export default function TaskItem({ item, deleteTask }: Props) {
	const [isDone, setIsDone] = useState<boolean>(item.done);

	const updateTaskDoneState = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsDone(event.target.checked)
	}

	const removeTask = () => {
		deleteTask(item.id)
	}

	return (
		<Grid container item className={styles.wrapper} sx={{ bgcolor: "primary.main", p: 0 }} alignItems="center">
			<Grid item>
				<CheckBox checked={isDone} onChange={updateTaskDoneState} />
			</Grid>

			<Grid item>
				<Typography variant="h2">{item.title}</Typography>

				<span>{toDate(item.timestamp)}</span>
				<Typography variant="body2">{item.description}</Typography>
			</Grid>

			<Grid item justifySelf="end">
				<Button onClick={removeTask}>
					Delete
				</Button>
			</Grid>
		</Grid>
	)
}