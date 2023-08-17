import { TaskList } from 'components/tasks';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material'


function App() {
	// const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);

	const theme = createTheme({
		palette: {
			primary: {
				main: "#E8EDE7"
			},
			secondary: {
				main: "#81BECE"
			}
		},
		spacing: [20, 42, 5],
		typography: {
			h1:{
				fontSize: "37px"
			},
			h2: {
				fontSize: "23px"
			}
		}
	})

	return (
		<ThemeProvider theme={theme}>
			<TaskList />
		</ThemeProvider>
	)
}

export default App;
