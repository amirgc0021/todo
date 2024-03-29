import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { createTask, editTask } from 'redux/listSlice';

import { MenuItem, TextField, DialogTitle, DialogContent, Button, Stack } from '@mui/material';
import type { ItaskItem } from '../types';

type Props = {
	closeDialog: () => void,
	task: ItaskItem | null,
	listId: string
}

type selectValOption = ItaskItem["priority"];

export default function TaskDialog({ closeDialog, task, listId }: Props) {
	const dispatch = useDispatch();

	const [title, setTitle] = useState<string>(task?.title || "");
	const [description, setDescription] = useState<string>(task?.description || "");
	const [priority, setPriority] = useState<selectValOption>(task?.priority || "low");

	// when form has been submitted
	const onFormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// get the submitted data 
		const formData = new FormData(e.currentTarget);

		// if task in falsy we are in new mode, so create new task
		if (!task) {
			dispatch(createTask({
				listId,
				taskData: {
					title: formData.get("title") as string,
					description: formData.get("description") as string,
					priority: formData.get("priority") as selectValOption
				}
			}));
		} else {
			// we are in edit mode so send the updated values
			dispatch(editTask({
				listId,
				taskId: task.id,
				taskData: {
					title: formData.get("title") as string,
					description: formData.get("description") as string,
					priority: formData.get("priority") as selectValOption
				}
			}));
		}

		closeDialog();
	}

	// input change handlers
	const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	}, [])

	const handleDescriptionChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(e.target.value);
	}, [])

	const handlePriorityChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setPriority(e.target.value as selectValOption);
	}, [])

	return (
		<>
			<DialogTitle>{!task ? "Add New Task" : "Edit Task"}</DialogTitle>

			<DialogContent>
				<form onSubmit={onFormSubmitted}>
					<TextField
						label="Task title"
						variant="standard"
						name='title'
						value={title}
						onChange={handleTitleChange}
						fullWidth
						required
						color='secondary'
					/>
					<TextField
						label="Task description"
						rows={4}
						margin='normal'
						name='description'
						value={description}
						onChange={handleDescriptionChange}
						multiline
						fullWidth
						color='secondary'
					/>

					<TextField
						label="Priority"
						select
						fullWidth
						helperText="Please select prioirty of task"
						margin='normal'
						name="priority"
						value={priority}
						onChange={handlePriorityChange}
						color='secondary'
					>
						<MenuItem value="low">Low</MenuItem>
						<MenuItem value="medium">Medium</MenuItem>
						<MenuItem value="high">High</MenuItem>
					</TextField>

					<Stack direction="row" spacing={2} justifyContent={'flex-end'} useFlexGap>
						<Button variant="outlined" onClick={closeDialog} color='secondary'>
							Cancel
						</Button>
						<Button variant='contained' type='submit' color='secondary' >
							{!task ? "Add" : "Edit"}
						</Button>
					</Stack>
				</form>
			</DialogContent>
		</>
	)
}