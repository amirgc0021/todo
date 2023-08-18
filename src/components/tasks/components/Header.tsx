import React, { useEffect, useState } from 'react';
import { Box, IconButton, TextField, Typography } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { editList } from 'redux/listSlice';

type Props = {
	text: string,
	listId: string
};

export default function Header({ text, listId }: Props) {
	const dispatch = useDispatch();
	const [headerText, setHeaderText] = useState<string>(text);
	const [editTitle, setEditTitle] = useState<boolean>(false);

	// if list has changed reset values
	useEffect(() => {
		setHeaderText(text)
		setEditTitle(false)
	}, [listId])

	// handle header text change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setHeaderText(e.target.value)
	}

	// handle when clicking on the button to submit the changes
	const handleEditTitle = () => {
		// if value is empty use the prev value
		if(!headerText){
			setHeaderText(text);
			setEditTitle(false)
			return
		}

		// if we are in edit mode update state
		if (editTitle) {
			dispatch(editList({ listId, listData: { title: headerText } }))
		}

		// toggle between edit and view
		setEditTitle(state => !state)
	}

	return (
		<>
			{
				editTitle
					? <TextField value={headerText} onChange={handleChange} placeholder="List name" />
					: <Typography variant="h1" marginRight="20px" >{text}</Typography>
			}

			<IconButton aria-label="edit List name" onClick={handleEditTitle}>
				<EditIcon />
			</IconButton>
		</>
	)
}