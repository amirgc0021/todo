import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import TaskItem from './TaskItem';
import TaskDialog from './TaskDialog';

import { Dialog, Grid, Stack, Box, MenuItem, TextField, Button } from '@mui/material';

import type { AppState } from 'redux/store';
import type { ItaskItem } from '../types';

import AddIcon from '@mui/icons-material/Add';
import Header from './Header';

type TaskDialogType = {
	open: boolean,
	taskData: ItaskItem | null
}

type sortBy = "priority" | "time";

export default function TasksList() {
	const list = useSelector((state: AppState) => state.listSlice.lists[state.listSlice.activeList]);

	const [tasksList, setTasksList] = useState<ItaskItem[]>(list.tasks);

	const [activeUpdateTask, setActiveUpdateTask] = useState<TaskDialogType>({ open: false, taskData: null });
	const [searchVal, setSearchVal] = useState<string>("");
	const [activeSort, setActiveSort] = useState<sortBy | "">("");

	// since we don't want to always change the redux state (e.x in sort)
	// I created another "local state" that will listen for any update from original state
	// but will also responsible to display local changes (sort) 
	useEffect(() => {
		setTasksList(list.tasks)
	}, [list])

	// open the task dialog in "new" mode
	const openNewTaskDialog = () => {
		setActiveUpdateTask({
			open: true,
			taskData: null
		})
	}

	// close dialog
	const closeDialog = useCallback(() => {
		setActiveUpdateTask({
			open: false,
			taskData: null
		})
	}, [])

	const handleSortByChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const sortBy = e.target.value as sortBy;
		const copyTasks = [...tasksList];
		// update sort state
		setActiveSort(sortBy);

		if (sortBy === "time") {
			const newList = copyTasks.sort((a, b) => a.timestamp - b.timestamp)
			setTasksList(newList)
		} else {
			const ranks = {
				"high": 0,
				"medium": 1,
				"low": 2
			}

			const newList = copyTasks.sort((a, b) => ranks[a.priority] - ranks[b.priority]);
			setTasksList(newList)
		}
	}, [tasksList]);

	const handleSerach = (e:React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const regex = new RegExp(value, "gi");

		setSearchVal(value);

		const newList = list.tasks.filter(task => regex.test(task.title))
		setTasksList(newList)
	}

	// memo task list component to not rerender on unrealted updates
	const tasksListMemo = useMemo(() => {
		if (!tasksList.length) {
			return <img src="/emptyImage.jpg" width="500px" />
		}

		// this function going here to prevent new instance of this function
		const openTaskDialogInEditMode = (task: ItaskItem) => {
			setActiveUpdateTask({
				open: true,
				taskData: task
			})
		}

		return tasksList.map(item => (
			<TaskItem
				key={item.id}
				item={item}
				listId={list.id}
				openEditTaskDialog={openTaskDialogInEditMode}
			/>
		))
	}, [tasksList, list]);

	return (
		<Box>
			<Stack direction="row" marginBottom="10px" marginTop="20px">
				<Header text={list.title} listId={list.id} />
			</Stack>

			<Box marginBottom={"40px"}>
				<Button variant="text" sx={{ color: "#000" }} startIcon={<AddIcon color="secondary" />} onClick={openNewTaskDialog}>
					New Task
				</Button>
			</Box>

			<Stack useFlexGap rowGap={"10px"}>
				<Box width={"100%"}>
					<TextField
						color='secondary'
						label="Search"
						variant="standard"
						fullWidth
						value={searchVal}
						onChange={handleSerach}
					/>
				</Box>

				<Box>
					<TextField
						color='secondary'
						select
						variant='outlined'
						label="Sort By"
						margin="normal"
						value={activeSort}
						onChange={handleSortByChange}
						sx={{ minWidth: "150px" }}
					>
						<MenuItem value="" disabled>Choose sort by</MenuItem>
						<MenuItem value="priority">Sort by priority (high - low)</MenuItem>
						<MenuItem value="time">Sort by time (early - later)</MenuItem>
					</TextField>
				</Box>
			</Stack>

			<Grid container direction={"column"} rowGap={"10px"}>
				{tasksListMemo}
			</Grid>

			<Dialog open={activeUpdateTask.open} sx={{ p: 0 }} onClose={closeDialog}>
				<TaskDialog task={activeUpdateTask.taskData} closeDialog={closeDialog} listId={list.id} />
			</Dialog>
		</Box>
	)
}