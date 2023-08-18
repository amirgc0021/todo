import { Box, ListItemButton, SxProps } from '@mui/material'

type Props = {
	title: string,
	index: number,
	numTasks: number
	onClick: (index: number) => void
}

const style: SxProps = [
	{ paddingInline: 2, mb: 1 },
	{
		"&:hover": {
			bgcolor: "primary.light"
		}
	}
]

export default function ListItem({ title, index, numTasks, onClick }: Props) {
	const onItemClicked = () => {
		onClick(index)
	}
	return (
		<ListItemButton onClick={onItemClicked} sx={style}>
			<Box component="span">
				{title}
			</Box>
			<Box component="span" sx={{p: "5px", ml: "auto"}}>
				{numTasks}
			</Box>
		</ListItemButton>
	)
}