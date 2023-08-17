import MenuItem from '@mui/material/MenuItem';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/listSlice';

import type{ ItaskItem } from '../types';

type Props = {
	clsoeDialog: () => void
}

type selectValOption = ItaskItem["priority"];

export default function AddTask({clsoeDialog }: Props) {
	const dispatch = useDispatch();

	const onFormSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget);

		dispatch(addTask({
			title: formData.get("title") as string,
			description: formData.get("description") as string,
			priority: formData.get("priority") as selectValOption
		}));

		clsoeDialog()
	}
	return (
		<>
			<DialogTitle>Add new Task</DialogTitle>

			<DialogContent>
				<form onSubmit={onFormSubmitted}>

					<TextField
						label="Task title"
						variant="standard"
						name='title'
						fullWidth
					/>
					<TextField
						label="Task description"
						multiline
						rows={4}
						maxRows={4}
						fullWidth
						margin='normal'
						name='description'

					/>
					<TextField
						label="Priority"
						select
						fullWidth
						helperText="Please select prioirty of task"
						margin='normal'
						name="priority"
					>
						<MenuItem value="low">Low</MenuItem>
						<MenuItem value="medium">Medium</MenuItem>
						<MenuItem value="high">High</MenuItem>
					</TextField>


					<Stack direction="row" spacing={2} justifyContent={'flex-end'} useFlexGap>
						<Button variant="outlined" color="secondary" onClick={clsoeDialog}>
							Cancel
						</Button>
						<Button variant='contained' color='secondary' type='submit'>
							Add
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