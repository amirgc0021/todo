import { ListItemButton } from '@mui/material'
import React from 'react'

type Props = {
	title: string,
	index: number,
	numTasks: number
	onClick: (index: number) => void
}

export default function ListItem({ title, index, numTasks, onClick }: Props) {
	const onItemClicked = () => {
		onClick(index)
	}
	return (
		<ListItemButton onClick={onItemClicked}>
			{title}
			{numTasks}
		</ListItemButton>
	)
}