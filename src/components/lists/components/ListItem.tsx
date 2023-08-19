import { ListItemButton, SxProps, Typography } from '@mui/material'

type Props = {
	title: string,
	index: number,
	numTasks: number,
	isActive: boolean,
	onClick: (index: number) => void
}

const style: SxProps = [
	{ paddingInline: 2, mb: 0 },
	{
		"&:hover": {
			bgcolor: "primary.light"
		}
	}
]

export default function ListItem({ title, index, numTasks, isActive, onClick }: Props) {
	const onItemClicked = () => {
		onClick(index)
	}
	return (
		<ListItemButton onClick={onItemClicked} sx={style}>
			<Typography component="span" fontWeight={isActive ? "600" : "400"}>
				{title}
			</Typography>
			<Typography component="span" sx={{ p: "5px", ml: "auto" }}>
				{numTasks}
			</Typography>
		</ListItemButton>
	)
}