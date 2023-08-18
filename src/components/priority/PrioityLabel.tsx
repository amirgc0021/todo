import Typography from '@mui/material/Typography';
import type { ItaskItem } from 'components/tasks/types';

type Props = {
	label: ItaskItem["priority"]
}

export default function PrioityLabel({label}: Props) {
	return (
		<Typography variant="subtitle1">{label}</Typography>
	)
}