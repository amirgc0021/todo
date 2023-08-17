import { TaskList } from 'components/tasks';
import './App.css';
import { ThemeProvider } from '@mui/material'
import theme from "utils/theme";

function App() {
	// const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);



	return (
		<ThemeProvider theme={theme}>
			<TaskList />
		</ThemeProvider>
	)
}

export default App;
