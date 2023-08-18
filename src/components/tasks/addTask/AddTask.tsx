import MenuItem from '@mui/material/MenuItem';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from 'redux/listSlice';

import type { ItaskItem } from '../types';
import { useState } from 'react';

type Props = {
	closeDialog: () => void,
	task: ItaskItem | null
}

type selectValOption = ItaskItem["priority"];

export default function AddTask({ closeDialog, task }: Props) {
	const dispatch = useDispatch();

	const [title, setTitle] = useState<string>(task?.title || "")
	const [description, setDescription] = useState<string>(task?.description || "")
	const [priority, setPriority] = useState<selectValOption>(task?.priority || "low")

	const onFormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget);

		if (!task) {
			dispatch(addTask({
				title: formData.get("title") as string,
				description: formData.get("description") as string,
				priority: formData.get("priority") as selectValOption
			}));
		} else {
			const editedTask: ItaskItem = {
				...task,
				title: formData.get("title") as string,
				description: formData.get("description") as string,
				priority: formData.get("priority") as selectValOption
			}

			dispatch(editTask(editedTask));
		}

		closeDialog();
	}

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value)
	}
	const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(e.target.value)
	}
	const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPriority(e.target.value as selectValOption)
	}

	return (
		<>
			<DialogTitle>{!task ? "Add new Task" : "Edit Task"}</DialogTitle>

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
					/>
					<TextField
						label="Task description"
						multiline
						rows={4}
						fullWidth
						margin='normal'
						name='description'
						value={description}
						onChange={handleDescriptionChange}
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
					>
						<MenuItem value="low">Low</MenuItem>
						<MenuItem value="medium">Medium</MenuItem>
						<MenuItem value="high">High</MenuItem>
					</TextField>

					<Stack direction="row" spacing={2} justifyContent={'flex-end'} useFlexGap>
						<Button variant="outlined" color="secondary" onClick={closeDialog}>
							Cancel
						</Button>
						<Button variant='contained' color='primary' type='submit'>
							{!task ? "Add" : "Edit"}
						</Button>
					</Stack>
				</form>


			</DialogContent>
			{/* <input />
			<textarea />

			<InputLabel id="demo-simple-select-label">Priority</InputLabel>

			<button>Save</button> */}
		</>
	)
}