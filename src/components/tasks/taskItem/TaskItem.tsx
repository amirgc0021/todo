import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import CheckBox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from "react-redux";
import { editTask } from 'redux/listSlice';
import { PrioityLabel } from "components/priority";

//types
import type { ItaskItem } from "../types"

// styles and utils
import styles from "./TaskItem.module.css";
import { toDate } from "utils/utils";

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Create';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';

type Props = {
	item: ItaskItem,
	deleteTask: (id: string) => void
	openEditTaskdialog: (task: ItaskItem) => void
}

export default function TaskItem({ item, deleteTask, openEditTaskdialog }: Props) {
	const dispatch = useDispatch();
	const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
	const open = Boolean(anchorEl);

	const updateTaskDoneState = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(editTask({ ...item, done: event.target.checked }))
	}

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
    setAnchorEl(null);
  };

	const removeTask = () => {
		deleteTask(item.id)
	}

	const openEditDialog = () => {
		openEditTaskdialog(item);
		handleClose()
	}

	return (
		<Stack className={styles.wrapper} sx={{ bgcolor: "primary.light", p: 0, borderRadius: "10px"}} alignItems="center" direction="row">
			<Box>
				<CheckBox checked={item.done} checkedIcon={<CheckBoxIcon sx={{color: "primary.contrastText"}} />} onChange={updateTaskDoneState} />
			</Box>

			<Box>
				<Typography variant="h2">{item.title}</Typography>
				<Typography variant="subtitle1">{toDate(item.timestamp)}</Typography>
				<Typography variant="body2">{item.description}</Typography>
			</Box>

			<Box margin="0 50px 0 auto">
				<PrioityLabel label={item.priority} />
			</Box>

			<Stack direction="row" gap={"10px"} useFlexGap>
				<IconButton aria-label="delete" onClick={handleClick}>
					<MoreHorizIcon />
				</IconButton>

				<Menu
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					MenuListProps={{
						'aria-labelledby': 'more options',
					}}
				>
					<MenuItem  onClick={removeTask}>
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

					<MenuItem onClick={openEditDialog}>
						<ListItemIcon color='primary' aria-label="info">
							<InfoIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText>Info</ListItemText>
					</MenuItem>
				</Menu>
			</Stack>
		</Stack>
	)
}