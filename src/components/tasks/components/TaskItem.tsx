import React, { useState } from "react";

import { Typography, Checkbox, Stack, Box, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { useDispatch } from "react-redux";
import { editTask, removeTask } from 'redux/listSlice';
import { PrioityLabel } from "components/priority";

//types
import type { ItaskItem } from "../types"

// icons
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Create';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

type Props = {
	item: ItaskItem,
	listId: string,
	openEditTaskDialog: (task: ItaskItem) => void
}

export default function TaskItem({ item, listId, openEditTaskDialog }: Props) {
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
	const open = Boolean(anchorEl);

	// menu dialog open/close functions
	const openItemMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const closeTaskMenu = () => {
		setAnchorEl(null);
	};

	// updating item done state
	const updateTaskDoneState = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(editTask({
			listId,
			taskId: item.id,
			taskData: {
				done: event.target.checked
			}
		}))
	}

	// delete a task
	const deleteTask = () => {
		dispatch(removeTask({
			listId,
			taskId: item.id
		}))
	}

	const openEditDialog = () => {
		openEditTaskDialog(item);
		closeTaskMenu();
	}

	return (
		<Stack sx={{ bgcolor: "primary.main", p: 0, borderRadius: "10px", minWidth:"450px", maxWidth: "450px" }} alignItems="center" direction="row">
			<Box>
				<Checkbox color="secondary" checked={item.done} checkedIcon={<CheckBoxIcon />} onChange={updateTaskDoneState} />
			</Box>

			<Box marginRight={3}>
				<Typography variant="h2" sx={{fontSize: "20px"}}>{item.title}</Typography>
				{/* <Typography variant="subtitle1">{toDate(item.timestamp)}</Typography> */}
				<Typography variant="body2">{item.description}</Typography>
			</Box>

			<Box margin="0 50px 0 auto">
				<PrioityLabel label={item.priority} />
			</Box>

			<Box>
				<Tooltip title="More options">
				<IconButton aria-label="delete" onClick={openItemMenu}>
					<MoreHorizIcon />
				</IconButton>
				</Tooltip>

				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={closeTaskMenu}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					MenuListProps={{
						'aria-labelledby': 'more options',
					}}
				>
					<MenuItem onClick={deleteTask}>
						<ListItemIcon color='primary' aria-label="delete">
							<DeleteIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText>Delete</ListItemText>
					</MenuItem>

					<MenuItem onClick={openEditDialog}>
						<ListItemIcon color='primary' aria-label="edit">
							<EditIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText>Edit</ListItemText>
					</MenuItem>
				</Menu>
			</Box>
		</Stack>
	)
}