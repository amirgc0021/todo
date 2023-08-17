import { TaskList } from 'components/tasks';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material'


function App() {
	// const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false);

	const theme = createTheme({
		palette: {
			primary: {
				main: "#0e1e2b",
				dark: "#010305",
				light: "#1c3d52",
				contrastText: "#fff"
			},
			secondary: {
				main: "#1c3d52",
				light: "#F6F2F0",
				contrastText: "#000"
			},

		},
		spacing: [20, 42, 5],
		typography: {
			h1: {
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
