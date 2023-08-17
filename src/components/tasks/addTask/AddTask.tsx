import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

type Props = {}

export default function AddTask({ }: Props) {
	return (
		<Box>
			<input />
			<textarea />

			<InputLabel id="demo-simple-select-label">Priority</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				label="Age"
			>
				<MenuItem value="Low">Low</MenuItem>
				<MenuItem value="Medium">Medium</MenuItem>
				<MenuItem value="High">High</MenuItem>
			</Select>

			<button>Save</button>
		</Box>
	)
}