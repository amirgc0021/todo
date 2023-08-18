import { TaskList } from 'components/tasks';
import './App.css';
import { ThemeProvider } from '@mui/material'
import theme from "utils/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<TaskList />
		</ThemeProvider>
	)
}

export default App;
