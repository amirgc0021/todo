import { TaskList } from 'components/tasks';
import './App.css';
import { ThemeProvider } from '@mui/material'
import theme from "utils/theme";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<TaskList />
		</ThemeProvider>
	)
}

export default App;
